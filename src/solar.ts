import { NumberGenerator, StringGenerator, UtilGenerator } from "./generators";
import { LatitudeLongitude, dummyLatitudeLongitude } from "./geo";

export namespace SolarConstants {
    export const DUMMY_OBJECTS_ARRAY_LENGTH = 5;
    export const ARRAY_PANELS_COUNT_MAX = 300;
    export const PANELS_CAPACITY_WATTS_WAX = 500;
    export const PANEL_HEIGHT_METERS_MAX = 2.0;
    export const PANEL_WIDTH_METERS_MAX = 2.0;
    export const PANEL_LIFETIME_YEARS_MAX = 50;
    export const ARRAY_AREA_METER_MAX = 10000;
    export const SUNSHINE_HOURS_PER_YEAR_MAX = 3000;
    export const CARBON_OFFSET_FACTOR_KG_PER_KWH_MAX = 1000;
    export const AREA_METERS_2_MAX = 10000;
    export const GROUND_AREA_METERS_2_MAX = 10000;
    export const SUNSHINE_QUANTILES_COUNT_MAX = 10;
    export const SUNSHINE_QUANTILES_VALUE_MAX = 100;
    export const PITCH_DEGREES_MAX = 90.0;
    export const AZIMUTH_DEGREES_MIN = -180.0;
    export const AZIMUTH_DEGREES_MAX = 180.0;
    export const PLANE_HEIGHT_AT_CENTER_METERS_MAX = 30.0;
    export const YEARLY_ENERGY_DC_KWH = 10000.0;
    export const NANOS_MIN = -999999999;
    export const NANOS_MAX = 999999999;
    export const AVERAGE_KWH_PER_MONTH_MAX = 10000;
    export const PERCENTAGE_100_MAX = 100.0;
    export const PAYBACK_YEARS_MAX = 30;
    export const INITIAL_AC_KWH_PER_YEAR_MAX = 10000.0;
}

const { ..._ } = SolarConstants;

export type BuildingInsights = {
    name: string;
    center: LatitudeLongitude;
    boundingBox: BoundingBox;
    imageryData: GDate;
    imageryProcessedDate: GDate;
    postalCode: string;
    administrativeArea: string;
    statisticalArea: string;
    regionCode: string;
    solarPotential: SolarPotential;
    imageryQuality: ImageryQuality;
};

export function dummyBuildingInsights() {
    return {
        name: StringGenerator.generateWord(),
        center: dummyLatitudeLongitude(),
        boundingBox: dummyBoundingBox(),
        imageryData: dummyGDate(),
        imageryProcessedDate: dummyGDate(),
        postalCode: StringGenerator.generateZipCode(),
        administrativeArea: StringGenerator.generateState(),
        statisticalArea: StringGenerator.generateWord(),
        regionCode: StringGenerator.generateWord(),
        solarPotential: dummySolarPotential(),
        imageryQuality: dummyImageryQuality()
    } as BuildingInsights;
}

export type ImageryQuality = "IMAGERY_QUALITY_UNSPECIFIED" | "HIGH" | "MEDIUM" | "LOW";

export const imageryQualities: ImageryQuality[] = ["IMAGERY_QUALITY_UNSPECIFIED", "HIGH", "MEDIUM", "LOW"];

export function dummyImageryQuality() {
    return UtilGenerator.chooseRandomObjectFromList(imageryQualities);
}

export type SolarPotential = {
    maxArrayPanelsCount: number;
    panelCapacityWatts: number;
    panelHeightMeters: number;
    panelWidthMeters: number;
    panelLifetimeYears: number;
    maxArrayAreaMeters2: number;
    maxSunshineHoursPerYear: number;
    carbonOffsetFactorKgPerMwh: number;
    wholeRoofStats: SizeAndSunshineStats;
    buildingStats: SizeAndSunshineStats;
    roofSegmentStats: RoofSegmentSizeAndSunshineStats[];
    solarPanels: SolarPanel[];
    solarPanelConfigs: SolarPanelConfig[];
    financialAnalyses: FinancialAnalysis[];
};

export function dummySolarPotential() {
    return {
        maxArrayPanelsCount: NumberGenerator.generateInt(_.ARRAY_PANELS_COUNT_MAX),
        panelCapacityWatts: NumberGenerator.generateInt(_.PANELS_CAPACITY_WATTS_WAX),
        panelHeightMeters: NumberGenerator.generateDouble(_.PANEL_HEIGHT_METERS_MAX),
        panelWidthMeters: NumberGenerator.generateDouble(_.PANEL_WIDTH_METERS_MAX),
        panelLifetimeYears: NumberGenerator.generateInt(_.PANEL_LIFETIME_YEARS_MAX),
        maxArrayAreaMeters2: NumberGenerator.generateDouble(_.ARRAY_AREA_METER_MAX),
        maxSunshineHoursPerYear: NumberGenerator.generateDouble(_.SUNSHINE_HOURS_PER_YEAR_MAX),
        carbonOffsetFactorKgPerMwh: NumberGenerator.generateDouble(_.CARBON_OFFSET_FACTOR_KG_PER_KWH_MAX),
        wholeRoofStats: dummySizeAndSunshineStats(),
        buildingStats: dummySizeAndSunshineStats(),
        roofSegmentStats: UtilGenerator.generateMultipleObjects(
            dummyRoofSegmentSizeAndSunshineStats,
            _.DUMMY_OBJECTS_ARRAY_LENGTH
        ),
        solarPanels: UtilGenerator.generateMultipleObjects(
            dummySolarPanel,
            NumberGenerator.generateInt(_.ARRAY_PANELS_COUNT_MAX)
        ),
        solarPanelConfigs: UtilGenerator.generateMultipleObjects(dummySolarPanelConfig, _.DUMMY_OBJECTS_ARRAY_LENGTH),
        financialAnalyses: UtilGenerator.generateMultipleObjects(dummyFinancialAnalysis, _.DUMMY_OBJECTS_ARRAY_LENGTH)
    } as SolarPotential;
}

export type SizeAndSunshineStats = {
    areaMeters2: number;
    sunshineQuantiles: number[];
    groundAreaMeters2: number;
};

export function dummySizeAndSunshineStats() {
    return {
        areaMeters2: NumberGenerator.generateDouble(_.AREA_METERS_2_MAX),
        sunshineQuantiles: NumberGenerator.generateListOfNumbers(
            NumberGenerator.generateDouble,
            _.SUNSHINE_QUANTILES_COUNT_MAX,
            _.SUNSHINE_QUANTILES_VALUE_MAX
        ),
        groundAreaMeters2: NumberGenerator.generateDouble(_.GROUND_AREA_METERS_2_MAX)
    } as SizeAndSunshineStats;
}

export type RoofSegmentSizeAndSunshineStats = {
    stats: SizeAndSunshineStats;
    center: LatitudeLongitude;
    boundingBox: BoundingBox;
    pitchDegrees: number;
    azimuthDegrees: number;
    planeHeightAtCenterMeters: number;
};

export function dummyRoofSegmentSizeAndSunshineStats() {
    return {
        stats: dummySizeAndSunshineStats(),
        center: dummyLatitudeLongitude(),
        boundingBox: dummyBoundingBox(),
        pitchDegrees: NumberGenerator.generateDouble(_.PITCH_DEGREES_MAX),
        azimuthDegrees: NumberGenerator.generateDouble(_.AZIMUTH_DEGREES_MAX, _.AZIMUTH_DEGREES_MIN),
        planeHeightAtCenterMeters: NumberGenerator.generateDouble(_.PLANE_HEIGHT_AT_CENTER_METERS_MAX)
    } as RoofSegmentSizeAndSunshineStats;
}

export type GDate = {
    year: number;
    month: number;
    day: number;
};

export function dummyGDate() {
    const DATE = UtilGenerator.generateDate();
    return {
        year: DATE.getFullYear(),
        month: DATE.getMonth(),
        day: DATE.getDay()
    } as GDate;
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

export type SolarPanelConfig = {
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    roofSegmentSummaries: RoofSegmentSummary[];
};

export function dummySolarPanelConfig() {
    const PANELS_COUNT = NumberGenerator.generateInt(_.ARRAY_PANELS_COUNT_MAX);
    return {
        panelsCount: PANELS_COUNT,
        yearlyEnergyDcKwh: PANELS_COUNT * NumberGenerator.generateDouble(_.YEARLY_ENERGY_DC_KWH),
        roofSegmentSummaries: UtilGenerator.generateMultipleObjects(
            dummyRoofSegmentSummary,
            _.DUMMY_OBJECTS_ARRAY_LENGTH
        )
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
    const PANELS_COUNT = NumberGenerator.generateInt(_.ARRAY_PANELS_COUNT_MAX);
    return {
        pitchDegrees: NumberGenerator.generateDouble(_.PITCH_DEGREES_MAX),
        azimuthDegrees: NumberGenerator.generateDouble(_.AZIMUTH_DEGREES_MAX, _.AZIMUTH_DEGREES_MIN),
        panelsCount: PANELS_COUNT,
        yearlyEnergyDcKwh: PANELS_COUNT * NumberGenerator.generateDouble(_.YEARLY_ENERGY_DC_KWH),
        segmentIndex: NumberGenerator.generateInt(_.DUMMY_OBJECTS_ARRAY_LENGTH)
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
        yearlyEnergyDcKwh: NumberGenerator.generateDouble(_.YEARLY_ENERGY_DC_KWH),
        segmentIndex: NumberGenerator.generateInt(_.ARRAY_PANELS_COUNT_MAX)
    } as SolarPanel;
}

export type SolarPanelOrientation = "SOLAR_PANEL_ORIENTATION_UNSPECIFIED" | "LANDSCAPE" | "PORTRAIT";

export const solarPanelOrientations: SolarPanelOrientation[] = [
    "SOLAR_PANEL_ORIENTATION_UNSPECIFIED",
    "LANDSCAPE",
    "PORTRAIT"
];

export function dummySolarPanelOrientation() {
    return UtilGenerator.chooseRandomObjectFromList(solarPanelOrientations);
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
        west: NumberGenerator.generateDouble(180, -180)
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
        bounds: dummyBounds()
    } as GeoTiff;
}

export type FinancialAnalysis = {
    monthlyBill: Money;
    defaultBill: boolean;
    averageKwhPerMonth: number;
    financialDetails: FinancialDetails;
    leasingSavings: LeasingSavings;
    cashPurchaseSavings: CashPurchaseSavings;
    financedPurchaseSavings: FinancePurchaseSavings;
    panelConfigIndex: number;
};

export function dummyFinancialAnalysis() {
    return {
        monthlyBill: dummyMoney(),
        defaultBill: UtilGenerator.generateBoolean(),
        averageKwhPerMonth: NumberGenerator.generateDouble(_.AVERAGE_KWH_PER_MONTH_MAX),
        financialDetails: dummyFinancialDetails(),
        leasingSavings: dummyLeasingSavings(),
        cashPurchaseSavings: dummyCashPurchaseSavings(),
        financedPurchaseSavings: dummyFinancePurchaseSavings(),
        panelConfigIndex: NumberGenerator.generateInt(_.DUMMY_OBJECTS_ARRAY_LENGTH)
    } as FinancialAnalysis;
}

export type Money = {
    currencyCode: string;
    units: string;
    nanos: number;
};

export function dummyMoney() {
    return {
        currencyCode: StringGenerator.generateCurrencyCode(),
        units: "1",
        nanos: NumberGenerator.generateInt(_.NANOS_MAX, _.NANOS_MIN)
    } as Money;
}

export type FinancialDetails = {
    initialAcKwhPerYear: number;
    remainingLifetimeUtilityBill: Money;
    federalIncentive: Money;
    stateIncentive: Money;
    utilityIncentive: Money;
    lifetimeSrecTotal: Money;
    costOfElectricityWithoutSolar: Money;
    netMeteringAllowed: boolean;
    solarPercentage: number;
    percentageExportedToGrid: number;
};

export function dummyFinancialDetails() {
    return {
        initialAcKwhPerYear: NumberGenerator.generateDouble(_.INITIAL_AC_KWH_PER_YEAR_MAX),
        remainingLifetimeUtilityBill: dummyMoney(),
        federalIncentive: dummyMoney(),
        stateIncentive: dummyMoney(),
        utilityIncentive: dummyMoney(),
        lifetimeSrecTotal: dummyMoney(),
        costOfElectricityWithoutSolar: dummyMoney(),
        netMeteringAllowed: UtilGenerator.generateBoolean(),
        solarPercentage: NumberGenerator.generateDouble(_.PERCENTAGE_100_MAX),
        percentageExportedToGrid: NumberGenerator.generateDouble(_.PERCENTAGE_100_MAX)
    } as FinancialDetails;
}

export type LeasingSavings = {
    leasesAllowed: boolean;
    leasesSupported: boolean;
    annualLeasingCost: Money;
    savings: SavingsOverTime;
};

export function dummyLeasingSavings() {
    return {
        leasesAllowed: UtilGenerator.generateBoolean(),
        leasesSupported: UtilGenerator.generateBoolean(),
        annualLeasingCost: dummyMoney(),
        savings: dummySavingsOverTime()
    } as LeasingSavings;
}

export type CashPurchaseSavings = {
    outOfPocketCost: Money;
    upfrontCost: Money;
    rebateValue: Money;
    savings: SavingsOverTime;
    paybackYears: number;
};

export function dummyCashPurchaseSavings() {
    return {
        outOfPocketCost: dummyMoney(),
        upfrontCost: dummyMoney(),
        rebateValue: dummyMoney(),
        savings: dummySavingsOverTime(),
        paybackYears: NumberGenerator.generateDouble(_.PAYBACK_YEARS_MAX)
    } as CashPurchaseSavings;
}

export type FinancePurchaseSavings = {
    annualLoanPayment: Money;
    rebateValue: Money;
    loanInteresetRate: number;
    savings: SavingsOverTime;
};

export function dummyFinancePurchaseSavings() {
    return {
        annualLoanPayment: dummyMoney(),
        rebateValue: dummyMoney(),
        loanInteresetRate: NumberGenerator.generateDouble(_.PERCENTAGE_100_MAX),
        savings: dummySavingsOverTime()
    } as FinancePurchaseSavings;
}

export type SavingsOverTime = {
    savingsYear1: Money;
    savingsYear20: Money;
    presentValueOfSavingsYear20: Money;
    savingsLifetime: Money;
    presentValueOfSavingsLifetime: Money;
    financiallyViable: boolean;
};

export function dummySavingsOverTime() {
    return {
        savingsYear1: dummyMoney(),
        savingsYear20: dummyMoney(),
        presentValueOfSavingsYear20: dummyMoney(),
        savingsLifetime: dummyMoney(),
        presentValueOfSavingsLifetime: dummyMoney(),
        financiallyViable: UtilGenerator.generateBoolean()
    } as SavingsOverTime;
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
        configIdIndex: NumberGenerator.generateInt(50)
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

export type LayerId = "hourlyShade" | "annualFlux" | "monthlyFlux" | "mask" | "dsm" | "rgb";

export const layerIds: LayerId[] = ["hourlyShade", "annualFlux", "monthlyFlux", "mask", "dsm", "rgb"];

export function dummyLayerId() {
    return UtilGenerator.chooseRandomObjectFromList(layerIds);
}

export type SolarLayers = {
    imageryDate: GDate;
    imageryProcessedDate: GDate;
    dsmUrl: string;
    rgbUrl: string;
    maskUrl: string;
    annualFluxUrl: string;
    monthlyFluxUrl: string;
    hourlyShadeUrls: string[];
    imageryQuality: ImageryQuality;
};

export function dummySolarLayers() {
    return {
        imageryDate: dummyGDate(),
        imageryProcessedDate: dummyGDate(),
        dsmUrl: StringGenerator.generateUrl(),
        rgbUrl: StringGenerator.generateUrl(),
        maskUrl: StringGenerator.generateUrl(),
        annualFluxUrl: StringGenerator.generateUrl(),
        monthlyFluxUrl: StringGenerator.generateUrl(),
        hourlyShadeUrls: UtilGenerator.generateMultipleObjects(StringGenerator.generateUrl, 10),
        imageryQuality: dummyImageryQuality()
    } as SolarLayers;
}
