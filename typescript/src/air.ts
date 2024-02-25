export type AirQualityData = {
    dateTime: Date;
    healthRecommendations: HealthRecommendations;
    indexes: Aqi[];
    pollutants: AirPollutant[];
    regionCode: string;
};

export type Aqi = {
    aqi: number;
    aqiDisplay: string;
    code: string;
    displayName: string;
    category: string;
    dominantPollutant: string;
};

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

export type HealthRecommendations = {
    generalPopulation: string;
    children: string;
    elderly: string;
    athletes: string;
    pregnantWomen: string;
    heartDiseasePopulation: string;
    lungDiseasePopulation: string;
};

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
