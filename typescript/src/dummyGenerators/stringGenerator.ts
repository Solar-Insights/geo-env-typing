import { faker } from "@faker-js/faker";

export class StringGenerator {
    private constructor() {};

    static generateFromChoices(array: String[]) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static generateEmail() {
        return faker.internet.email();
    }

    static generateUuid() {
        return faker.string.uuid();
    }

    static generateSentences() {
        return faker.hacker.phrase();
    }
}