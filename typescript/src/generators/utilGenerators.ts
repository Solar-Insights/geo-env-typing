import { NumberGenerator } from "./numberGenerator";

export class UtilGenerator {
    private constructor() {}

    static chooseRandomObjectFromList<T>(listOfObjects: T[]) {
        const randomIndex = NumberGenerator.generateInt(listOfObjects.length);
        return listOfObjects[randomIndex];
    }

    static generateMultipleObjects<T>(func: () => T, count: number) {
        return Array.from({ length: count }, () => func());
    }

    static generateDate() {
        const year = NumberGenerator.generateInt(0, 2100);
        const monthIndex = NumberGenerator.generateInt(0, 11);
        const date = NumberGenerator.generateInt(1, 31);
        return new Date(year, monthIndex, date);
    }

    static generateBoolean() {
        return NumberGenerator.generateDouble(1) > 0.5;
    }

    static generateHTMLCanvasElement() {
        const canvas = document.createElement("canvas");
        canvas.width = NumberGenerator.generateInt(0, 1000);
        canvas.height = NumberGenerator.generateInt(0, 1000);
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
