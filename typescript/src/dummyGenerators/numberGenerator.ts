export class NumberGenerator {
    private constructor() {}

    static generateInt(max: number, min?: number) {
        if (min === undefined) {
            return Math.floor(Math.random() * max);
        } else {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }

    static generateDouble(max: number, min?: number) {
        if (min === undefined) {
            return Math.random() * max;
        } else {
            return Math.random() * (max - min) + min;
        }
    }

    static generateNaN() {
        return NaN;
    }
}