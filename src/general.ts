export type Coordinates = {
    lat: number,
    lng: number
};

export function validCoordinates(coord: Coordinates) {
    const { lat, lng } = coord;
    const respectLimits = lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
    const notNull = lat != null && lng != null;
    const notNaN = !isNaN(lat) && !isNaN(lng);
    
    if ( !(respectLimits && notNull && notNaN) ) {
        console.log(`the coordinates (lat: ${coord.lat}, lng: ${coord.lng}) do not respect the template of coordinates`);
    }
    return respectLimits && notNull && notNaN;
};

export type MapType = "AIR_QUALITY" | "SOLAR";