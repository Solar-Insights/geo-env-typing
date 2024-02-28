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

    static generateLat() {
        return NumberGenerator.generateDouble(90, -90);
    }

    static generateLng() {
        return NumberGenerator.generateDouble(180, -180);
    }

    static generateListOfNumbers(
        func: (max: number, min: number | undefined) => number,
        count: number,
        max: number,
        min?: number
    ) {
        return Array.from({ length: count }, () => func(max, min));
    }

    static generate2DListOfNumbers(
        func: (max: number, min: number | undefined) => number,
        rows: number,
        cols: number,
        max: number,
        min?: number
    ) {
        let twoDimensionsList: number[][] = [];
        for (let i = 0; i < rows; i++) {
            const row = NumberGenerator.generateListOfNumbers(func, cols, max, min);
            twoDimensionsList.push(row);
        }

        return twoDimensionsList;
    }

    static generateNaN() {
        return NaN;
    }
}
