import { useEffect, useState } from "react";

function Checkins() {
  interface Checkin {
    id: number;
    user: string;
    hotel: string;
    aadhaar: string;
  }

  const [checkins, setCheckins] = useState<Checkin[]>([]);

  useEffect(() => {
    fetch("/data/checkin.json")
      .then((res) => res.json())
      .then((data) => setCheckins(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Checkins</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-2">ID</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Hotel Name</th>
              <th className="border border-gray-400 p-2">Aadhaar</th>
            </tr>
          </thead>
          <tbody>
            {checkins.map((checkin) => (
              <tr key={checkin.id}>
                <td className="border border-gray-400 p-2">{checkin.id}</td>
                <td className="border border-gray-400 p-2">{checkin.user}</td>
                <td className="border border-gray-400 p-2">{checkin.hotel}</td>
                <td className="border border-gray-400 p-2">
                  {checkin.aadhaar}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Checkins;
