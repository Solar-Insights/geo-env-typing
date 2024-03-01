import NumberGenerator from "./numberGenerator";

export namespace UtilGeneratorConstants {
    export const MIN_YEAR = 0;
    export const MAX_YEAR = 3000;
    export const MIN_MONTH_INDEX = 0;
    export const MAX_MONTH_INDEX = 11;
    export const MIN_DAY = 1;
    export const MAX_DAY = 31;
    export const BOOLEAN_MAX = 1.0;
    export const BOOLEAN_HALF = 0.5;
    export const CANVAS_ELEMENT_MIN_HEIGHT = 0;
    export const CANVAS_ELEMENT_MAX_HEIGHT = 1000;
    export const CANVAS_ELEMENT_MIN_WIDTH = 0;
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
        const year = NumberGenerator.generateInt(_.MAX_YEAR, _.MIN_YEAR);
        const monthIndex = NumberGenerator.generateInt(_.MAX_MONTH_INDEX + 1, _.MIN_MONTH_INDEX);
        const date = NumberGenerator.generateInt(_.MAX_DAY + 1, _.MIN_DAY);
        return new Date(year, monthIndex, date);
    }

    static generateBoolean() {
        return NumberGenerator.generateDouble(_.BOOLEAN_MAX) > _.BOOLEAN_HALF;
    }

    static generateHTMLCanvasElement() {
        const canvas = document.createElement("canvas");
        canvas.width = NumberGenerator.generateInt(_.CANVAS_ELEMENT_MAX_WIDTH, _.CANVAS_ELEMENT_MIN_WIDTH);
        canvas.height = NumberGenerator.generateInt(_.CANVAS_ELEMENT_MAX_HEIGHT, _.CANVAS_ELEMENT_MIN_HEIGHT);
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
