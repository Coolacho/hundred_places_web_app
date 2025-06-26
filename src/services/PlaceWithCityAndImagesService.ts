import axios from "axios"

const PLACES_API_BASE_URL = 'http://192.168.2.150:8080/api/v1/places/enriched'

export async function getPlaces(): Promise<PlaceWithCityAndImages[]> {
    const response = await axios.get(PLACES_API_BASE_URL)

    if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.data
}

export async function getPlaceById(id: string): Promise<PlaceWithCityAndImages> {
    const response = await axios.get(PLACES_API_BASE_URL + "/" + id)

    if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.data
}