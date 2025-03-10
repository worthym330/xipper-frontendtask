import { useEffect, useState } from "react";

interface Booking {
  id: number;
  user: string;
  hotel: string;
  checkInDate: string;
}

function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetch("/data/bookings.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bookings</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-2">Booking ID</th>
              <th className="border border-gray-400 p-2">User</th>
              <th className="border border-gray-400 p-2">Hotel</th>
              <th className="border border-gray-400 p-2">Check-in</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-100">
                <td className="border border-gray-400 p-2">{booking.id}</td>
                <td className="border border-gray-400 p-2">{booking.user}</td>
                <td className="border border-gray-400 p-2">{booking.hotel}</td>
                <td className="border border-gray-400 p-2">{booking.checkInDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;
