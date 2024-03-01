import { NumberGenerator, StringGenerator, UtilGenerator} from "./generators";

export namespace AirConstants {
    export const DUMMY_OBJECTS_ARRAY_LENGTH = 5;
    export const AQI_MAX_VALUE = 100;
    export const RGB_MAX_VALUE = 255;
    export const ALPHA_MAX_VALUE = 1.0;
    export const CONCENTRATION_MAX = 200.0;
};

const {..._} = AirConstants;

export type AirQualityData = {
    dateTime: string;
    regionCode: string;
    indexes: Aqi[];
    pollutants: AirPollutant[];
    healthRecommendations: HealthRecommendations;
}

export function dummyAirQualityData() {
    return {
        dateTime: StringGenerator.generateDateString(),
        regionCode: StringGenerator.generateCountryCode(),
        indexes: UtilGenerator.generateMultipleObjects(dummyAqi, _.DUMMY_OBJECTS_ARRAY_LENGTH),
        pollutants: UtilGenerator.generateMultipleObjects(dummyAirPollutant, _.DUMMY_OBJECTS_ARRAY_LENGTH),
        healthRecommendations: dummyHealthRecommendations()
    } as AirQualityData;
}

export type Aqi = {
    code: string,
    displayName: string,
    aqiDisplay: string,
    color: Color,
    category: string,
    dominantPollutant: string,
    aqi: number
};

export function dummyAqi() {
    const AQI_SCORE = NumberGenerator.generateInt(_.AQI_MAX_VALUE + 1);
    return {
        code: StringGenerator.generateWord(),
        displayName: StringGenerator.generateWord(),
        aqi: AQI_SCORE,
        aqiDisplay: AQI_SCORE.toString(),
        color: dummyColor(),
        category: StringGenerator.generateWord(),
        dominantPollutant: StringGenerator.generateWord()
    } as Aqi;
}

export type Color = {
    red: number,
    green: number,
    blue: number,
    alpha: number
};

export function dummyColor() {
    return {
        red: NumberGenerator.generateInt(_.RGB_MAX_VALUE + 1),
        green: NumberGenerator.generateInt(_.RGB_MAX_VALUE + 1),
        blue: NumberGenerator.generateInt(_.RGB_MAX_VALUE + 1),
        alpha: NumberGenerator.generateDouble(_.ALPHA_MAX_VALUE)
    }
}

export type AirPollutant = {
    code: PollutantCode;
    displayName: string;
    fullName: string;
    additionalInfo: AdditionalInfo;
    concentration: Concentration;
};

export function dummyAirPollutant() {
    return {
        code: dummyPollutantCode(),
        displayName: StringGenerator.generateWord(),
        fullName: StringGenerator.generateWord(),
        additionalInfo: dummyAdditionalInfo(),
        concentration: dummyConcentration()
    } as AirPollutant;
}

export type AdditionalInfo = {
    sources: string,
    effects: String
};

export function dummyAdditionalInfo() {
    return {
        sources: StringGenerator.generateSentence(),
        effects: StringGenerator.generateSentence()
    } as AdditionalInfo;
}

export type Concentration = {
    units: Unit
    value: number
}

export function dummyConcentration() {
    return {
        units: dummyUnit(),
        value: NumberGenerator.generateDouble(_.CONCENTRATION_MAX)
    } as Concentration;
}

export type Unit = "UNIT_UNSPECIFIED" | "PARTS_PER_BILLION" | "MICROGRAMS_PER_CUBIC_METER";

export const units: Unit[] = ["UNIT_UNSPECIFIED", "PARTS_PER_BILLION", "MICROGRAMS_PER_CUBIC_METER"]

export function dummyUnit() {
    return UtilGenerator.chooseRandomObjectFromList(units);
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
        generalPopulation: StringGenerator.generateSentence(),
        children: StringGenerator.generateSentence(),
        elderly: StringGenerator.generateSentence(),
        athletes: StringGenerator.generateSentence(),
        pregnantWomen: StringGenerator.generateSentence(),
        heartDiseasePopulation: StringGenerator.generateSentence(),
        lungDiseasePopulation: StringGenerator.generateSentence()
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
