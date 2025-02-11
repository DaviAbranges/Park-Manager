interface AllSpacesProps {
  allSpaces: number;
  totalSpace: number
}

export const AllSpaces = ({ allSpaces, totalSpace}: AllSpacesProps) => {


  
  return (
    <div className="mb-6 p-6 bg-indigo-50 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-semibold text-gray-800">{`Vagas disponíveis: ${allSpaces}/${totalSpace}`}</h2>
      <p className="text-gray-600 mt-2 text-lg">Aproveite cada espaço!</p>
    </div>
  );
};
