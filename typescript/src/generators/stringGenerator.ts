import { faker } from "@faker-js/faker";

export default class StringGenerator {
    private constructor() {}

    static generateWord() {
        return faker.word.sample();
    }

    static generateSentence() {
        return faker.hacker.phrase();
    }

    static generateUrl() {
        return faker.internet.url();
    }
}
