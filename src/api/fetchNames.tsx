import axios from "axios";

export type NameInfo = {
    id: number,
    day: number,
    month: number,
    name: string,
    namelength: number,
    last_letter: string,
    first_letter: string,
    gender: string
}

async function fetchNames() {
    const { data } = await axios.get<NameInfo[]>('http://localhost:3004/names');
    return data;
}

export { fetchNames }