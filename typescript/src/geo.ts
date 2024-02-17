export type Coordinates = {
    lat: number;
    lng: number;
};

export function validCoordinates(coord: Coordinates) {
    return coordinatesRespectRange(coord) && coordinatesAreNumbers(coord);
}

export function coordinatesRespectRange(coord: Coordinates) {
    return latRespectsRange(coord.lat) && lngRespectsRange(coord.lng);
}

export function latRespectsRange(lat: number) {
    return lat >= -90.0 && lat <= 90.0;
}

export function lngRespectsRange(lng: number) {
    return lng >= -180.0 && lng <= 180.0;
}

export function coordinatesAreNumbers(coord: Coordinates) {
    return typeof coord.lat === "number" && typeof coord.lng === "number" && !isNaN(coord.lng) && !isNaN(coord.lat);
}

export type MapType = "AIR_QUALITY" | "SOLAR";
