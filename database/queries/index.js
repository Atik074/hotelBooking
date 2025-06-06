import { bookingModel } from "@/models/bookings-model";
import { hotelModel } from "@/models/hotels-model";
import { ratingModel } from "@/models/ratings-model";
import { reviewModel } from "@/models/reviews-model";
import { userModel } from "@/models/users-model";
import {
  isDateInBweeten,
  replaceMongoIdArray,
  replaceMongoIdObj,
} from "@/utils/data-util";
import { Types } from "mongoose";

export async function getAllHotels(destination, checkin, checkout, category) {
  const regex = new RegExp(destination, "i");
  const hotelsByDestination = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  let allHotels = hotelsByDestination;

  if (category) {
    const categoriesToMatch = category.split("|")

    allHotels = allHotels.filter((hotel) => {
      return categoriesToMatch.includes(hotel.propertyCategory.toString());
    });
  }

  if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels.map(async (hotel) => {
        const found = await findBookingHotel(hotel._id, checkin, checkout);

        if (found) {
          hotel["isBooked"] = true;
        } else {
          hotel["isBooked"] = false;
        }
        return hotel;
      })
    );
  }

  return replaceMongoIdArray(allHotels);
}

export async function findBookingHotel(hotelId, checkin, checkout) {
  const matches = await bookingModel
    .find({
      hotelId: new Types.ObjectId(hotelId),
    })
    .lean();

  const found = matches.find((match) => {
    return (
      isDateInBweeten(checkin, match.checkin, match.checkout) ||
      isDateInBweeten(checkout, match.checkin, match.checkout)
    );
  });

  return found;
}

export async function getHotelById(hotelId, checkin, checkout) {
  const hotel = await hotelModel.findById(hotelId).lean();

  if (checkin && checkout) {
    const found = await findBookingHotel(hotel._id, checkin, checkout);

    if (found) {
      hotel["isBooked"] = true;
    } else {
      hotel["isBooked"] = false;
    }
  }
  return replaceMongoIdObj(hotel);
}

export async function getHotelRatings(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();

  return replaceMongoIdArray(ratings);
}

export async function getHotelReviews(hotelId) {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();

  return replaceMongoIdArray(reviews);
}

export async function getUserByEmail(email) {
  const users = await userModel.find({ email: email }).lean();

  return replaceMongoIdObj(users[0]);
}

export async function getBookigIdByUser(userId) {
  const bookings = await bookingModel.find({ userId: userId });
  return replaceMongoIdArray(bookings);
}
