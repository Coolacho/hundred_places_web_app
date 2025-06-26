type PlaceWithCityAndImages = {
    place: Place
    city: string,
    images: string[]
}

type Place = {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    type: string,
    rating: number,
    descriptionPath: string,
    is100Places: boolean,
}