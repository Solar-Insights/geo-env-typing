import { NumberGenerator } from "./numberGenerator";

class UtilGenerator {
    private constructor() {}

    static generateDate() {
        const year = NumberGenerator.generateInt(0, 2100);
        const monthIndex = NumberGenerator.generateInt(0, 11);
        const date = NumberGenerator.generateInt(1, 31);
        return new Date(year, monthIndex, date);
    }
}