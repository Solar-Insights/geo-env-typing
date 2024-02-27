export class NumberGenerator {
    private constructor() {}

    static generateInt(excludedMax: number, includedMin?: number) {
        if (includedMin === undefined) {
            return Math.floor(Math.random() * excludedMax);
        } else {
            return Math.floor(Math.random() * (excludedMax - includedMin) + includedMin);
        }
    }

    static generateDouble(includedMax: number, includedMin?: number) {
        if (includedMin === undefined) {
            return Math.random() * includedMax;
        } else {
            return Math.random() * (includedMax - includedMin) + includedMin;
        }
    }

    static generateNaN() {
        return NaN;
    }
}