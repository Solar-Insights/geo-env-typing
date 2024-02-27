import { UtilGenerator } from "./dummyGenerators/utilGenerators"
import { NumberGenerator } from "./dummyGenerators/numberGenerator";

export type Coordinates = LatLng | LatitudeLongitude | Cartesian;

export function dummyLat() {
    return NumberGenerator.generateDouble(90, -90);
}

export function dummyLng() {
    return NumberGenerator.generateDouble(180, -180);
}

export type LatLng = {
    lat: number;
    lng: number;
};

export function dummyLatLng() {
    return {
        lat: dummyLat(),
        lng: dummyLng()
    } as LatLng;
};

export type LatitudeLongitude = {
    latitude: number;
    longitude: number;
};

export function dummyLatitudeLongitude() {
    return {
        latitude: dummyLat(),
        longitude: dummyLng()
    } as LatitudeLongitude;
};

export type Cartesian = {
    y: number,
    x: number
};

export function dummyCartesian() {
    return {
        x: dummyLat(),
        y: dummyLng()
    } as Cartesian
}

export function validCoordinates(coord: Coordinates) {
    let lat: number;
    let lng: number;

    if ("lat" in coord) {
        lat = coord.lat;
        lng = coord.lng;
    } else if ("latitude" in coord) {
        lat = coord.latitude;
        lng = coord.longitude
    } else if ("x" in coord) {
        lat = coord.y;
        lng = coord.x;
    } else {
        return false;
    }

    return coordinatesRespectRange(lat, lng) && coordinatesAreNumbers(lat, lng);
}

export function coordinatesRespectRange(lat: number, lng: number) {
    return latRespectsRange(lat) && lngRespectsRange(lng);
}

export function latRespectsRange(lat: number) {
    return lat >= -90.0 && lat <= 90.0;
}

export function lngRespectsRange(lng: number) {
    return lng >= -180.0 && lng <= 180.0;
}

export function coordinatesAreNumbers(lat: number, lng: number) {
    return typeof lat === "number" && typeof lng === "number" && !isNaN(lng) && !isNaN(lat);
}

export type MapType = "AIR_QUALITY" | "SOLAR";

export const mapTypes: MapType[] = ["AIR_QUALITY", "SOLAR"];

export function dummyMapType() {
    return UtilGenerator.chooseRandomObjectFromList(mapTypes);
}
