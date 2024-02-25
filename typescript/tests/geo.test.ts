import { describe, test, assert } from "vitest";
import { latRespectsRange, lngRespectsRange, coordinatesAreNumbers, Coordinates } from "../src/geo";

describe("function: latRespectsRange(lat: number)", () => {
    const NEGATIVE_IN_RANGE = -80;
    const NEGATIVE_LIMIT = -90;
    const NEGATIVE_OUT_RANGE = -100;
    test("When lat is negative (but higher than -90), then returns true", () => {
        assert.isTrue(latRespectsRange(NEGATIVE_IN_RANGE));
    });

    test("When lat is -90 (the negative limit), then returns true", () => {
        assert.isTrue(latRespectsRange(NEGATIVE_LIMIT));
    });

    test("When lat is negative (but lower than -90), then returns false ", () => {
        assert.isFalse(latRespectsRange(NEGATIVE_OUT_RANGE));
    });

    const POSITIVE_IN_RANGE = 80;
    const POSITIVE_LIMIT = 90;
    const POSITIVE_OUT_RANGE = 100;
    test("When lat is positive (but lower than 90), then returns true", () => {
        assert.isTrue(latRespectsRange(POSITIVE_IN_RANGE));
    });

    test("When lat is 90 (the positive limit), then returns true", () => {
        assert.isTrue(latRespectsRange(POSITIVE_LIMIT));
    });

    test("When lat is positive (but higher than 90), then returns false", () => {
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

    test("When lng is -180 (the negative limit), then returns true", () => {
        assert.isTrue(lngRespectsRange(NEGATIVE_LIMIT));
    });

    test("When lng is negative (but lower than -180), then returns false", () => {
        assert.isFalse(lngRespectsRange(NEGATIVE_OUT_RANGE));
    });

    const POSITIVE_IN_RANGE = 160;
    const POSITIVE_LIMIT = 180;
    const POSITIVE_OUT_RANGE = 200;
    test("When lng is positive (but lower than 180), then returns true", () => {
        assert.isTrue(lngRespectsRange(POSITIVE_IN_RANGE));
    });

    test("When lng is 180 (the positive limit), then returns true", () => {
        assert.isTrue(lngRespectsRange(POSITIVE_LIMIT));
    });

    test("When lng is positive (but higher than 180), then returns false ", () => {
        assert.isFalse(lngRespectsRange(POSITIVE_OUT_RANGE));
    });
});

describe("function: coordinatesAreNumbers(coordinates: Coordinates)", () => {
    const NUMBERS_COORDINATES = { lat: 50, lng: 50 } as Coordinates;
    test("When coordinates are numbers, then return true", () => {
        assert.isTrue(coordinatesAreNumbers(NUMBERS_COORDINATES));
    });

    const UNDEFINED_COORDINATES = { lat: undefined, lng: undefined } as any as Coordinates;
    test("When coordinates are undefined, then returns false", () => {
        assert.isFalse(coordinatesAreNumbers(UNDEFINED_COORDINATES));
    });

    const NULL_COORDINATES = { lat: null, lng: null } as any as Coordinates;
    test("When coordinates are null / objects. then returns false", () => {
        assert.isFalse(coordinatesAreNumbers(NULL_COORDINATES));
    });

    const NAN_COORDINATES = { lat: NaN, lng: NaN } as any as Coordinates;
    test("When coordinates are NaN, then returns false", () => {
        assert.isFalse(coordinatesAreNumbers(NAN_COORDINATES));
    });
});
