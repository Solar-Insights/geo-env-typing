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

    static generateDateString() {
        return faker.date.anytime().toISOString();
    }

    static generateCountryCode() {
        return faker.location.countryCode();
    }

    static generateState() {
        return faker.location.state();
    }

    static generateZipCode() {
        return faker.location.zipCode();
    }

    static generateCurrencyCode() {
        return faker.finance.currency().code;
    }
}
