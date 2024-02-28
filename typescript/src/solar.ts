import { LatitudeLongitude, dummyLatitudeLongitude } from "./geo";
import { NumberGenerator } from "./dummyGenerators/numberGenerator";
import { StringGenerator } from "./dummyGenerators/stringGenerator";
import { UtilGenerator } from "./dummyGenerators/utilGenerators";

export type UserSolarData = {
    minPanelCount: number;
    maxPanelCount: number;
    panelCapacityWatts: number;
    defaultPanelCapacityWatts: number;
    panelCount: number;
    installationCostPerWatt: number;
    yearlyEnergyDcKwh: number;
    dcToAcDerate: number;
    averageMonthlyEnergyBill: number;
    energyCostPerKwh: number;
    solarIncentives: number;
    yearlyPanelEfficiencyDecline: number;
    yearlyEnergyCostIncrease: number;
    yearlyDiscountRate: number;
    installationLifespan: number;
};

export function dummyUserSolarData() {
    return {
        minPanelCount: NumberGenerator.generateInt(10, 0),
        maxPanelCount: NumberGenerator.generateInt(200, 0),
        panelCapacityWatts: NumberGenerator.generateDouble(400, 0),
        defaultPanelCapacityWatts: NumberGenerator.generateDouble(100, 0),
        panelCount: NumberGenerator.generateInt(200, 0),
        installationCostPerWatt: NumberGenerator.generateDouble(100, 0),
        yearlyEnergyDcKwh: NumberGenerator.generateDouble(10000, 0),
        dcToAcDerate: NumberGenerator.generateDouble(1, 0),
        averageMonthlyEnergyBill: NumberGenerator.generateDouble(1000, 0),
        energyCostPerKwh: NumberGenerator.generateDouble(1000, 0),
        solarIncentives: NumberGenerator.generateInt(100000, 0),
        yearlyPanelEfficiencyDecline: NumberGenerator.generateDouble(100, 0),
        yearlyEnergyCostIncrease: NumberGenerator.generateDouble(100, 0),
        yearlyDiscountRate: NumberGenerator.generateDouble(100, 0),
        installationLifespan: NumberGenerator.generateInt(100, 0),
    } as UserSolarData;
}

export type ImageryQuality = "HIGH" | "MEDIUM" | "LOW";

export const imageryQualities: ImageryQuality[] = [
    "HIGH",
    "MEDIUM",
    "LOW"
];

export function dummyImageryQuality() {
    return UtilGenerator.chooseRandomObjectFromList(imageryQualities);
}

export type SolarLayers = {
    imageryDate: Date;
    imageryProcessedDate: Date;
    dsmUrl: string;
    rgbUrl: string;
    maskUrl: string;
    annualFluxUrl: string;
    monthlyFluxUrl: string;
    hourlyShadeUrls: string[];
    imageryQuality: "HIGH" | "MEDIUM" | "LOW";
};

export function dummySolarLayers() {
    return {
        imageryDate: dummyDate(),
        imageryProcessedDate: dummyDate(),
        dsmUrl: StringGenerator.generateUrl(),
        rgbUrl: StringGenerator.generateUrl(),
        maskUrl: StringGenerator.generateUrl(),
        annualFluxUrl: StringGenerator.generateUrl(),
        monthlyFluxUrl: StringGenerator.generateUrl(),
        hourlyShadeUrls: UtilGenerator.generateMultipleObjects(StringGenerator.generateUrl, 10),
        imageryQuality: dummyImageryQuality(),
    } as SolarLayers;
}

export type BuildingInsights = {
    name: string;
    center: LatitudeLongitude;
    imageryData: Date;
    regionCode: string;
    solarPotential: {
        maxArrayPanelsCount: number;
        maxArrayAreaMeters2: number;
        maxSunshineHoursPerYear: number;
        carbonOffsetFactorKgPerMwh: number;
        wholeRoofStats: RoofStats;
        roofSegmentStats: RoofSegment[];
        solarPanelConfigs: SolarPanelConfig[];
        panelCapacityWatts: number;
        panelHeightMeters: number;
        panelWidthMeters: number;
        panelLifetimeYears: number;
        buildingStats: RoofStats;
        solarPanels: SolarPanel[];
    };
    boundingBox: BoundingBox;
    imageryQuality: ImageryQuality;
    imageryProcessedDate: Date;
};

export function dummyBuildingInsights() {
    return {
        name: StringGenerator.generateWord(),
        center: dummyLatitudeLongitude(),
        imageryData: dummyDate(),
        regionCode: StringGenerator.generateWord(),
        solarPotential: {
            maxArrayPanelsCount: NumberGenerator.generateDouble(200, 0),
            maxArrayAreaMeters2: NumberGenerator.generateDouble(1000, 0),
            maxSunshineHoursPerYear: NumberGenerator.generateDouble(3000, 0),
            carbonOffsetFactorKgPerMwh: NumberGenerator.generateDouble(100, 0),
            wholeRoofStats: dummyRoofStats(),
            roofSegmentStats: UtilGenerator.generateMultipleObjects(dummyRoofSegment, 5),
            solarPanelConfigs: UtilGenerator.generateMultipleObjects(dummySolarPanelConfig, 30),
            panelCapacityWatts: NumberGenerator.generateInt(500, 50),
            panelHeightMeters: NumberGenerator.generateDouble(3, 0.5),
            panelWidthMeters: NumberGenerator.generateDouble(3, 0.5),
            panelLifetimeYears: NumberGenerator.generateInt(30, 0),
            buildingStats: dummyRoofStats(),
            solarPanels: UtilGenerator.generateMultipleObjects(dummySolarPanel, 50),
        },
        boundingBox: dummyBoundingBox(),
        imageryQuality: dummyImageryQuality(),
        imageryProcessedDate: dummyDate()
    } as BuildingInsights;
}

export type Date = {
    year: number;
    month: number;
    day: number;
};

export function dummyDate() {
    return {
        year: NumberGenerator.generateInt(3000, 0),
        month: NumberGenerator.generateInt(13, 1),
        day: NumberGenerator.generateInt(32, 1),
    } as Date;
}

export type BoundingBox = {
    sw: LatitudeLongitude;
    ne: LatitudeLongitude;
};

export function dummyBoundingBox() {
    return {
        sw: dummyLatitudeLongitude(),
        ne: dummyLatitudeLongitude()
    } as BoundingBox;
}

export type RoofStats = {
    areaMeters2: number;
    sunshineQuantiles: number[];
    groundAreaMeters2: number;
};

export function dummyRoofStats() {
    return {
        areaMeters2: NumberGenerator.generateDouble(2000, 0),
        sunshineQuantiles: NumberGenerator.generateListOfNumbers(NumberGenerator.generateDouble, 10, 1),
        groundAreaMeters2: NumberGenerator.generateDouble(2000, 0)
    } as RoofStats;
}

export type RoofSegment = {
    pitchDegrees: number;
    azimuthDegrees: number;
    stats: RoofStats;
    center: LatitudeLongitude;
    boundingBox: BoundingBox;
    planeHeightAtCenterMeters: number;
};

export function dummyRoofSegment() {
    return {
        pitchDegrees: NumberGenerator.generateDouble(60, 15),
        azimuthDegrees: NumberGenerator.generateDouble(360, 0),
        stats: dummyRoofStats(),
        center: dummyLatitudeLongitude(),
        boundingBox: dummyBoundingBox(),
        planeHeightAtCenterMeters: NumberGenerator.generateDouble(20, 0)
    } as RoofSegment;
}

export type SolarPanelConfig = {
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    roofSegmentSummaries: RoofSegmentSummary[];
};

export function dummySolarPanelConfig() {
    return {
        panelsCount: NumberGenerator.generateInt(0, 200),
        yearlyEnergyDcKwh: NumberGenerator.generateDouble(10000),
        roofSegmentSummaries: UtilGenerator.generateMultipleObjects(dummyRoofSegmentSummary, 5)
    } as SolarPanelConfig;
}

export type RoofSegmentSummary = {
    pitchDegrees: number;
    azimuthDegrees: number;
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    segmentIndex: number;
};

export function dummyRoofSegmentSummary() {
    return {
        pitchDegrees: NumberGenerator.generateDouble(60, 15),
        azimuthDegrees: NumberGenerator.generateDouble(360, 0),
        panelsCount: NumberGenerator.generateInt(0, 200),
        yearlyEnergyDcKwh: NumberGenerator.generateDouble(10000),
        segmentIndex: NumberGenerator.generateInt(10, 0),
    } as RoofSegmentSummary;
}

export type SolarPanel = {
    center: LatitudeLongitude;
    orientation: string;
    yearlyEnergyDcKwh: number;
    segmentIndex: number;
};

export function dummySolarPanel() {
    return {
        center: dummyLatitudeLongitude(),
        orientation: StringGenerator.generateWord(),
        yearlyEnergyDcKwh: NumberGenerator.generateDouble(10000),
        segmentIndex: NumberGenerator.generateInt(20)
    } as SolarPanel;
}

export type Layer = {
    id: LayerId;
    render: (showRoofOnly: boolean, month: number, day: number) => HTMLCanvasElement[];
    bounds: Bounds;
    palette?: Palette;
};

export function dummyLayer() {
    return {
        id: dummyLayerId(),
        render: () => UtilGenerator.generateMultipleObjects(UtilGenerator.generateHTMLCanvasElement, 5),
        bounds: dummyBounds(),
        palette: UtilGenerator.generateBoolean() ? dummyPalette() : undefined
    } as Layer;
}

export type Palette = {
    colors: string[];
    min: string;
    max: string;
};

export function dummyPalette() {
    return {
        colors: UtilGenerator.generateMultipleObjects(StringGenerator.generateWord, 10),
        min: StringGenerator.generateWord(),
        max: StringGenerator.generateWord()
    } as Palette;
}

export type Bounds = {
    north: number;
    south: number;
    east: number;
    west: number;
};

export function dummyBounds() {
    return {
        north: NumberGenerator.generateDouble(90, -90),
        south: NumberGenerator.generateDouble(90, -90),
        east: NumberGenerator.generateDouble(180, -180),
        west: NumberGenerator.generateDouble(180, -180),
    } as Bounds;
}

export type GeoTiff = {
    width: number;
    height: number;
    rasters: Array<number>[];
    bounds: Bounds;
};

export function dummyGeoTiff() {
    return {
        width: NumberGenerator.generateInt(1000),
        height: NumberGenerator.generateInt(1000),
        rasters: NumberGenerator.generate2DListOfNumbers(NumberGenerator.generateInt, 40, 40, 256),
        bounds: dummyBounds(),
    } as GeoTiff;
}

export type MapSettings = {
    layerId: LayerId;
    layerIdChoices: SolarDataType[];
    showPanels: boolean;
    showHeatmap: boolean;
    heatmapAnimation: boolean;
    configIdIndex: number;
};

export function dummyMapSettings() {
    return {
        layerId: dummyLayerId(),
        layerIdChoices: UtilGenerator.generateMultipleObjects(dummySolarDataType, 5),
        showPanels: UtilGenerator.generateBoolean(),
        showHeatmap: UtilGenerator.generateBoolean(),
        heatmapAnimation: UtilGenerator.generateBoolean(),
        configIdIndex: NumberGenerator.generateInt(50),
    } as MapSettings;
}

export type SolarDataType = {
    name: LayerId;
    displayedName: string; // Anything you would want to be displayed to a user
};

export function dummySolarDataType() {
    return {
        name: dummyLayerId(),
        displayedName: StringGenerator.generateWord()
    } as SolarDataType;
}

export type LayerId = 
    "hourlyShade" |
    "annualFlux" | 
    "monthlyFlux" | 
    "mask" |
    "dsm" | 
    "rgb";

export const layerIds: LayerId[] = [
    "hourlyShade",
    "annualFlux", 
    "monthlyFlux",
    "mask",
    "dsm",
    "rgb"
];

export function dummyLayerId() {
    return UtilGenerator.chooseRandomObjectFromList(layerIds);
}