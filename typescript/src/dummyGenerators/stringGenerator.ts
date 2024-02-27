import { faker } from "@faker-js/faker";

export class StringGenerator {
    private constructor() {};

    static generateWord() {
        return faker.word.sample();
    }

    static generateSentence() {
        return faker.hacker.phrase();
    }
}