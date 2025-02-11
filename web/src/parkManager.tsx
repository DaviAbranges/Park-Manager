import { useState } from "react";
import { Button } from "./components/AddButton";
import { AllSpaces } from "./components/allSpaces";
import { VehiclesList } from "./components/VehiclesList";

export const ParkManager = () => {
  const [totalSpace, setTotalSpace] = useState(10);

  const includeCar = async () => {
    setTotalSpace((prev) => prev - 1);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 rounded-2xl shadow-2xl">
      <div className="flex flex-col gap-6">
        <AllSpaces allSpaces={totalSpace} />
        <Button onClick={includeCar} className="w-full">
          Incluir Carro
        </Button>
      </div>
      <div className="mt-8">
        <VehiclesList />
      </div>
    </div>
  );
};
