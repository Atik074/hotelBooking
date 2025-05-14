import { getHotelReviews } from "@/database/queries";
import Link from "next/link";

const HotelReviewNumber =async({id}) => {
    const reviews = await getHotelReviews(id)

    return (
        <div>
            {
                reviews.length === 0 ? (<Link href="#" className="text-[16px]">
                Be the first one to review
                </Link>) :(<Link href={`/hotels/${id}/reviews`} className="underline">{reviews.length} reviews</Link>)
            }
        </div>
    );
};

export default HotelReviewNumber;