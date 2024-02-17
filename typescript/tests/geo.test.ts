import { describe, it, assert } from "vitest";
import { latRespectsRange, lngRespectsRange, coordinatesAreNumbers } from "../src/geo";

describe("latRespectsRange function", () => {
    it("should be true when lat is negative, but higher than -90", () => {
        assert.isTrue(latRespectsRange(-50));
    });

    it("should be true when lat is on the negative limit", () => {
        assert.isTrue(latRespectsRange(-90));
    });

    it("should be true when lat is positive, but lower than 90", () => {
        assert.isTrue(latRespectsRange(42));
    });

    it("should be true when lat is on the positive limit", () => {
        assert.isTrue(latRespectsRange(90));
    });

    it("should be false when lat is lower than -90", () => {
        assert.isFalse(latRespectsRange(-90.1));
    });

    it("should be false when lat is higher than 90", () => {
        assert.isFalse(latRespectsRange(100));
    });
});

describe("lngRespectsRange function", () => {
    it("should be true when lng is negative, but higher than -180", () => {
        assert.isTrue(lngRespectsRange(-120));
    });

    it("should be true when lng is on the negative limit", () => {
        assert.isTrue(lngRespectsRange(-180));
    });

    it("should be true when lng is positive, but lower than 180", () => {
        assert.isTrue(lngRespectsRange(57));
    });

    it("should be false when lng is on the positive limit", () => {
        assert.isTrue(lngRespectsRange(180));
    });

    it("should be false when lng is lower than -180", () => {
        assert.isFalse(lngRespectsRange(-180.1));
    });

    it("should be false when lng is higher than 180", () => {
        assert.isFalse(lngRespectsRange(180.1));
    });
});

describe("coordinatesAreNumbers function", () => {
    it("should be true if coordinates are numbers", () => {
        assert.isTrue(coordinatesAreNumbers({ lat: 50, lng: 50 }));
    });

    it("should be false if coordinates are undefined", () => {
        assert.isFalse(coordinatesAreNumbers({ lat: undefined as any, lng: undefined as any }));
    });

    it("should be false if coordinates are null / objects", () => {
        assert.isFalse(coordinatesAreNumbers({ lat: null as any, lng: null as any }));
    });

    it("should be false if coordinates are NaN", () => {
        assert.isFalse(coordinatesAreNumbers({ lat: NaN as any, lng: NaN as any }));
    });
});
