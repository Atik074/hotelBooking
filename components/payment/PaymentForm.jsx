"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = ({ loggedInUser, hotelInfo, checkin, checkout }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState(loggedInUser?.email);
  const router = useRouter();
 

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const hotelId = hotelInfo?.id;
      const userId = loggedInUser?.id;
      const checkin = formData.get("checkin");
      const checkout = formData.get("checkout");

      const res = await fetch("/api/auth/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelId,
          userId,
          checkin,
          checkout,
        }),
      });

    

      res.status === 201 && router.push("/bookings");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="text-xl text-red-500">{error}</div>

      <form className="my-8" onSubmit={onSubmit}>
        <div className="my-4 space-y-2">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={loggedInUser.name}
            readOnly
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={loggedInUser.email}
            onChange={()=>setEmail(email)}
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <span>Check in</span>
          <h4 className="mt-2">
            <input type="date" readOnly name="checkin" id="checkin" value={checkin} />
          </h4>
        </div>

        <div className="my-4 space-y-2">
          <span>Checkout</span>
          <h4 className="mt-2">
            <input type="date" readOnly value={checkout} name="checkout" id="checkout" />
          </h4>
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="card" className="block">
            Card Number
          </label>
          <input
            type="text"
            id="card"
            name="card"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="expiry" className="block">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="cvv" className="block">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <button
                disabled={hotelInfo?.isBooked}
                type="submit"
                className="btn-primary w-full"
            >
                Pay Now (${(hotelInfo?.highRate + hotelInfo?.lowRate) / 2})
            </button>
      </form>
    </>
  );
};

export default PaymentForm;
