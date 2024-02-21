import { describe, test, assert } from "vitest";
import { latRespectsRange, lngRespectsRange, coordinatesAreNumbers, Coordinates } from "../src/geo";

describe("function: latRespectsRange(lat: number)", () => {
    const NEGATIVE_IN_RANGE = -80;
    const NEGATIVE_LIMIT = -90;
    const NEGATIVE_OUT_RANGE = -100;
    test("should return true when lat is negative (but higher than -90)", () => {
        assert.isTrue(latRespectsRange(NEGATIVE_IN_RANGE));
    });

    test("should return true when lat is -90 (the negative limit)", () => {
        assert.isTrue(latRespectsRange(NEGATIVE_LIMIT));
    });

    test("should return false when lat is negative (but lower than -90)", () => {
        assert.isFalse(latRespectsRange(NEGATIVE_OUT_RANGE));
    });

    const POSITIVE_IN_RANGE = 80;
    const POSITIVE_LIMIT = 90;
    const POSITIVE_OUT_RANGE = 100;
    test("should return true when lat is positive (but lower than 90)", () => {
        assert.isTrue(latRespectsRange(POSITIVE_IN_RANGE));
    });

    test("should return true when lat is 90 (the positive limit)", () => {
        assert.isTrue(latRespectsRange(POSITIVE_LIMIT));
    });

    test("should return false when lat is positive (but higher than 90)", () => {
        assert.isFalse(latRespectsRange(POSITIVE_OUT_RANGE));
    });
});

describe("function: lngRespectsRange(lng: number)", () => {
    const NEGATIVE_IN_RANGE = -160;
    const NEGATIVE_LIMIT = -180;
    const NEGATIVE_OUT_RANGE = -200;
    test("should return true when lng is negative (but higher than -180)", () => {
        assert.isTrue(lngRespectsRange(NEGATIVE_IN_RANGE));
    });

    test("should return true when lng is -180 (the negative limit)", () => {
        assert.isTrue(lngRespectsRange(NEGATIVE_LIMIT));
    });

    test("should return false when lng is negative (but lower than -180)", () => {
        assert.isFalse(lngRespectsRange(NEGATIVE_OUT_RANGE));
    });

    const POSITIVE_IN_RANGE = 160;
    const POSITIVE_LIMIT = 180;
    const POSITIVE_OUT_RANGE = 200;
    test("should return true when lng is positive (but lower than 180)", () => {
        assert.isTrue(lngRespectsRange(POSITIVE_IN_RANGE));
    });

    test("should return true when lng is 180 (the positive limit)", () => {
        assert.isTrue(lngRespectsRange(POSITIVE_LIMIT));
    });

    test("should return false when lng is positive (but higher than 180)", () => {
        assert.isFalse(lngRespectsRange(POSITIVE_OUT_RANGE));
    });
});

describe("function: coordinatesAreNumbers(coordinates: Coordinates)", () => {
    const NUMBERS_COORDINATES = { lat: 50, lng: 50 } as Coordinates;
    test("should return true if coordinates are numbers", () => {
        assert.isTrue(coordinatesAreNumbers(NUMBERS_COORDINATES));
    });

    const UNDEFINED_COORDINATES = { lat: undefined, lng: undefined } as any as Coordinates;
    test("should return false if coordinates are undefined", () => {
        assert.isFalse(coordinatesAreNumbers(UNDEFINED_COORDINATES));
    });

    const NULL_COORDINATES = { lat: null, lng: null } as any as Coordinates;
    test("should return false if coordinates are null / objects", () => {
        assert.isFalse(coordinatesAreNumbers(NULL_COORDINATES));
    });

    const NAN_COORDINATES = { lat: NaN, lng: NaN } as any as Coordinates;
    test("should return false if coordinates are NaN", () => {
        assert.isFalse(coordinatesAreNumbers(NAN_COORDINATES));
    });
});
