import { NumberGenerator } from "./numberGenerator";

export class UtilGenerator {
    private constructor() {}

    static generateMultiple<T>(func: () => T, count: number) {
        return Array.from({ length: count }, () => func());
    }

    static generateDate() {
        const year = NumberGenerator.generateInt(0, 2100);
        const monthIndex = NumberGenerator.generateInt(0, 11);
        const date = NumberGenerator.generateInt(1, 31);
        return new Date(year, monthIndex, date);
    }
}