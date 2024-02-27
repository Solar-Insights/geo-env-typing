import { UtilGenerator } from "./dummyGenerators/utilGenerators"
import { NumberGenerator } from "./dummyGenerators/numberGenerator";

export type Coordinates = {
    lat: number;
    lng: number;
};

export function dummyCoordinates() {
    return {
        lat: NumberGenerator.generateDouble(90, -90),
        lng: NumberGenerator.generateDouble(180, -180)
    } as Coordinates;
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

export const mapTypes: MapType[] = ["AIR_QUALITY", "SOLAR"];

export function dummyMapType() {
    return UtilGenerator.chooseRandomObjectFromList(mapTypes);
}
