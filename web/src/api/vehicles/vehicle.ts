import axios from "axios";

export const fetchAllVehicles = async () => {
  const { data } = await axios.get("http://localhost:8000/vehicles/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("DATGAAA: ", data);

  return data;
};
