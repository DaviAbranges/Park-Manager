import { useEffect, useState } from "react";
import { Button } from "./components/AddButton";
import { AllSpaces } from "./components/allSpaces";
import { VehiclesList } from "./components/VehiclesList";
import { fetchAllSpaces } from "../src/api/spaces/space";
// import { useQuery } from "@tanstack/react-query";

// interface SpaceProps {
//   status: string,
//   type: string,
//   number_spaces: number
// }

export const ParkManager = () => {
  const [currentSpace, setCurrentSpace] = useState(0);
  const [totalSpace, setTotalSpace] = useState(0)

  const includeCar = async () => {
    setCurrentSpace((prev) => prev - 1);
  };
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await fetchAllSpaces();
        console.log('respoo', response);
        
        setCurrentSpace(response[0].number_spaces);
        setTotalSpace(response[0].number_spaces)
      } catch (error) {
        console.error("Erro ao buscar espaços:", error);
      }
    };
    
    fetchSpaces();
  }, []);  
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 rounded-2xl shadow-2xl">
      <div className="flex flex-col gap-6">
        <AllSpaces allSpaces={currentSpace} totalSpace={totalSpace}/>
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
