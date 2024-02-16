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

export type LayerId = "annualFlux" | "monthlyFlux" | "hourlyShade";

export type BuildingInsights = {
    name: string;
    center: SolarDataCoords;
    imageryData: Date;
    regionCode: string;
    solarPotential: {
        maxArrayPanelsCount: number;
        maxArrayAreaMeters2: number;
        maxSunshineHoursPerYear: number;
        carbonOffsetFactorKgPerMwh: number;
        wholeRoofStats: {
            areaMeters2: number;
            sunshineQuantiles: number[];
            groundAreaMeters2: number;
        };
        roofSegmentStats: RoofSegment[];
        solarPanelConfigs: SolarPanelConfig[];
        panelCapacityWatts: number;
        panelHeightMeters: number;
        panelWidthMeters: number;
        panelLifetimeYears: number;
        buildingStats: {
            areaMeters2: number;
            sunshineQuantiles: number[];
            groundAreaMeters2: number;
        };
        solarPanels: SolarPanel[];
    };
    boundingBox: BoundingBox;
    imageryQuality: string;
    imageryProcessedDate: Date;
};

export type SolarDataCoords = {
    latitude: number;
    longitude: number;
};

export type Date = {
    year: number;
    month: number;
    day: number;
};

export type BoundingBox = {
    sw: SolarDataCoords;
    ne: SolarDataCoords;
};

export type RoofSegment = {
    pitchDegrees: number;
    azimuthDegrees: number;
    stats: {
        areaMeters2: number;
        sunshineQuantiles: number[];
        groundAreaMeters2: number;
    };
    center: SolarDataCoords;
    BoundingBox: BoundingBox;
    planeHeightAtCenterMeters: number;
};

export type SolarPanelConfig = {
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    RoofSegmentSummaries: RoofSegmentSummary[];
};

export type RoofSegmentSummary = {
    pitchDegrees: number;
    azimuthDegrees: number;
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    segmentIndex: number;
};

export type SolarPanel = {
    center: SolarDataCoords;
    orientation: string;
    yearlyEnergyDcKwh: number;
    segmentIndex: number;
};

export type Layer = {
    id: LayerId;
    render: (showRoofOnly: boolean, month: number, day: number) => HTMLCanvasElement[];
    bounds: Bounds;
    palette?: Palette;
};

export type Palette = {
    colors: string[];
    min: string;
    max: string;
};

export type Bounds = {
    north: number;
    south: number;
    east: number;
    west: number;
};

export type GeoTiff = {
    width: number;
    height: number;
    rasters: Array<number>[];
    bounds: Bounds;
};

export type MapSettings = {
    layerId: LayerId;
    layerIdChoices: SolarDataType[];
    showPanels: boolean;
    showHeatmap: boolean;
    heatmapAnimation: boolean;
    configIdIndex: number;
};

export type SolarDataType = {
    name: "annualFlux" | "monthlyFlux" | "hourlyShade";
    displayedName: string; // Anything you would want to be displayed to a user
};
