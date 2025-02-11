import { fetchAllVehicles } from "../api/vehicles/vehicle";
import { useQuery } from "@tanstack/react-query";

interface Vehicle {
  id: number;
  plate: string;
  type: "car" | "motorcycle";
  model: string;
  year: number;
  Color: string;
}

export const VehiclesList = () => {
  const {
    data: vehicles,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["vehicle"],
    queryFn: fetchAllVehicles,
  });

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin border-t-4 border-indigo-600 w-16 h-16 rounded-full border-t-transparent mx-auto"></div>
        <p className="text-indigo-600 font-semibold mt-4">
          Loading vehicles...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-600 font-semibold">Error loading vehicles!</p>
      </div>
    );
  }

  if (!vehicles) {
    return (
      <div className="text-center py-10">
        <p>No vehicles found!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Carros Estacionados
      </h3>
      <div className="overflow-x-auto shadow-2xl rounded-lg border border-gray-300 flex justify-between ">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-4 px-6 text-left font-semibold">Placa</th>
              <th className="py-4 px-6 text-left font-semibold">Modelo</th>
              <th className="py-4 px-6 text-left font-semibold">Ano</th>
              <th className="py-4 px-6 text-left font-semibold">Cor</th>
              <th className="py-4 px-6 text-left font-semibold">Tipo</th>
              <th className="py-4 px-6 text-center font-semibold">Está lá?</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle: Vehicle) => (
              <tr
                key={vehicle.id}
                className="border-b hover:bg-indigo-50 transition-colors"
              >
                <td className="py-3 px-6 text-gray-700">{vehicle.plate}</td>
                <td className="py-3 px-6 text-gray-700">{vehicle.model}</td>
                <td className="py-3 px-6 text-gray-700">{vehicle.year}</td>
                <td className="py-3 px-6 text-gray-700">{vehicle.Color}</td>
                <td className="py-3 px-6 capitalize text-gray-700">
                  {vehicle.type}
                </td>
                <td className="py-3 px-6 text-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
