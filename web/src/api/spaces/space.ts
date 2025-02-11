import axios from "axios"

export const fetchAllSpaces = async () => {
    const {data} = await axios.get("http://localhost:8000/space/", {
        headers: {
           "Content-Type": "application/json",
        },
    })

    return data
}