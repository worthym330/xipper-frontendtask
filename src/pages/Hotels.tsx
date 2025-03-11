import { useEffect, useState } from "react";

function Hotels() {
  interface Hotel {
    id: number;
    name: string;
    location: string;
    rating: number;
  }

  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    fetch("http://localhost:5300/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Hotels</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-2">ID</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Location</th>
              <th className="border border-gray-400 p-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel.id}>
                <td className="border border-gray-400 p-2">{hotel.id}</td>
                <td className="border border-gray-400 p-2">{hotel.name}</td>
                <td className="border border-gray-400 p-2">{hotel.location}</td>
                <td className="border border-gray-400 p-2">
                  {hotel.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hotels;
