"use client ";

// import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";

// useOptimistic(bookings, () => {});

function ReservationList({ bookings }) {
  return (
    <ul className="space-y-6">
      {bookings.map((booking) => (
        <ReservationCard booking={booking} key={booking.id} />
      ))}
    </ul>
  );
}

export default ReservationList;
