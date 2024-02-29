import UtilGenerator from "./generators/utilGenerator";
import StringGenerator from "./generators/stringGenerator";
import NumberGenerator from "./generators/numberGenerator";

export type AirQualityData = {
    dateTime: Date;
    healthRecommendations: HealthRecommendations;
    indexes: Aqi[];
    pollutants: AirPollutant[];
    regionCode: string;
};

export function dummyAirQualityData() {
    return {
        dateTime: UtilGenerator.generateDate(),
        healthRecommendations: dummyHealthRecommendations(),
        indexes: UtilGenerator.generateMultipleObjects(dummyAqi, 5),
        pollutants: UtilGenerator.generateMultipleObjects(dummyAirPollutant, 5),
        regionCode: StringGenerator.generateWord()
    } as AirQualityData;
}

export type Aqi = {
    aqi: number;
    aqiDisplay: string;
    code: string;
    displayName: string;
    category: string;
    dominantPollutant: string;
};

export function dummyAqi() {
    return {
        aqi: NumberGenerator.generateInt(10),
        aqiDisplay: StringGenerator.generateWord(),
        code: StringGenerator.generateWord(),
        displayName: StringGenerator.generateWord(),
        dominantPollutant: StringGenerator.generateWord()
    } as Aqi;
}

export type AirPollutant = {
    code: PollutantCode;
    displayName: string;
    fullName: string;
    additionalInfo: {
        effects: string;
        sources: string;
    };
    concentration: {
        units: "PARTS_PER_BILLION" | "MICROGRAMS_PER_CUBIC_METER";
        value: number;
    };
};

export function dummyAirPollutant() {
    return {
        code: dummyPollutantCode(),
        displayName: StringGenerator.generateWord(),
        fullName: StringGenerator.generateWord(),
        additionalInfo: {
            effects: StringGenerator.generateWord(),
            sources: StringGenerator.generateWord()
        },
        concentration: {
            units: StringGenerator.generateWord(),
            value: NumberGenerator.generateDouble(100, 0)
        }
    } as AirPollutant;
}

export type HealthRecommendations = {
    generalPopulation: string;
    children: string;
    elderly: string;
    athletes: string;
    pregnantWomen: string;
    heartDiseasePopulation: string;
    lungDiseasePopulation: string;
};

export function dummyHealthRecommendations() {
    return {
        generalPopulation: StringGenerator.generateWord(),
        children: StringGenerator.generateWord(),
        elderly: StringGenerator.generateWord(),
        athletes: StringGenerator.generateWord(),
        pregnantWomen: StringGenerator.generateWord(),
        heartDiseasePopulation: StringGenerator.generateWord(),
        lungDiseasePopulation: StringGenerator.generateWord()
    } as HealthRecommendations;
}

// For an updated list of pollutants, visit https://developers.google.com/maps/documentation/air-quality/pollutants
export type PollutantCode =
    | "co"
    | "c6h6"
    | "ox"
    | "o3"
    | "nh3"
    | "nhmc"
    | "no"
    | "nox"
    | "no2"
    | "pm25"
    | "pm10"
    | "so2"
    | "trs";

export const pollutantCodes: PollutantCode[] = [
    "co",
    "c6h6",
    "ox",
    "o3",
    "nh3",
    "nhmc",
    "no",
    "nox",
    "no2",
    "pm25",
    "pm10",
    "so2",
    "trs"
];

export function dummyPollutantCode() {
    return UtilGenerator.chooseRandomObjectFromList(pollutantCodes);
}
