import { faker } from "@faker-js/faker";
import NumberGenerator from "./numberGenerator";

export namespace UtilGeneratorConstants {
    export const BOOLEAN_MAX = 1.0;
    export const BOOLEAN_HALF = 0.5;
    export const CANVAS_ELEMENT_MAX_HEIGHT = 1000;
    export const CANVAS_ELEMENT_MAX_WIDTH = 1000;
};

const {..._} = UtilGeneratorConstants;

export default class UtilGenerator {
    private constructor() {}

    static chooseRandomObjectFromList<T>(listOfObjects: T[]) {
        const randomIndex = NumberGenerator.generateInt(listOfObjects.length);
        return listOfObjects[randomIndex];
    }

    static generateMultipleObjects<T>(func: () => T, count: number) {
        return Array.from({ length: count }, () => func());
    }

    static generateDate() {
        return faker.date.anytime();
    }

    static generateBoolean() {
        return NumberGenerator.generateDouble(_.BOOLEAN_MAX) > _.BOOLEAN_HALF;
    }

    static generateHTMLCanvasElement() {
        const canvas = document.createElement("canvas");
        canvas.width = NumberGenerator.generateInt(_.CANVAS_ELEMENT_MAX_WIDTH);
        canvas.height = NumberGenerator.generateInt(_.CANVAS_ELEMENT_MAX_HEIGHT);
        return canvas;
    }

    static generateJsonStringFromObject(object: any) {
        return JSON.stringify(object);
    }

    static identicalJsonStrings(object1: any, object2: any) {
        return (
            UtilGenerator.generateJsonStringFromObject(object1) === UtilGenerator.generateJsonStringFromObject(object2)
        );
    }
}
