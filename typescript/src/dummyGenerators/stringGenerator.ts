import { faker } from "@faker-js/faker";

export class StringGenerator {
    private constructor() {};

    static generateWord() {
        return faker.word.sample();
    }

    static generateSentence() {
        return faker.hacker.phrase();
    }

    static generateFromChoices(array: String[]) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static generateEmail() {
        return faker.internet.email();
    }

    static generateUuid() {
        return faker.string.uuid();
    }
}