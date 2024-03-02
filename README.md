# Project

The geo-env-typing project aims to provide **types**, **data-validators**, **data-generators** and **constants** for developpers wanting to use geographic, solar, and air-quality data from different APIs. The first version of the project is still under development, and supports part of Google's APIs. The present README describes supported APIs, usage, etc.

## Import in a TypeScript or JavaScript project

To import geo-env-typing to your project, install the npm package `geo-env-typing` at the root of your project, where the package.json file is located, with the following command: `npm i geo-env-typing`.

From there, you can import the needed modules using the ESModules (`import`) or CommonJS (`require`) syntax. See more information on the API's respective page for the import syntax.

## Usage

For users that installed the npm package `geo-env-typing`, you can import types, dummy functions or even generator classes directly in your modules:

```
import { BuildingInsights } from "geo-env-typing/solar";
import { AirQualityData } from "geo-env-typing/air";
import { dummyLatLng } from "geo-env-typing/geo";
import { NumberGenerator } from "geo-env-typing/generators";
```

You are invited to explore geo-env-typing's modules, as you could find little helpers that will enhance your project and save you time. Simply `CTRL + Left Click` on the import path, and most text editors will send you to the right place. If this does not work, then you can scroll through your `node_modules` folder and find the geo-env-typing package.

# The 4 Main Components

## Types

Types help you define the structure of the data received from a database or API call. Using the provided types also help you avoid code duplication by using the package both on the frontend and the backend if needed.

## Dummy functions

Dummy functions are basically functions that can be used to generate an object of a desired type, with randomly data, usable for unit / integration tests, or even first stages of development. Every type should have a dummy function, and super-types (objects containing non-default types as attributes) use these inside their own dummy function to create a large dummy object.

Most of the mocked fields are random **(e.g. dates, booleans, strings. etc.)**, but some are created to respect some criterias **(e.g. latitudes should be decimal value between -90 and 90, URLs should respect URL standards, etc.)**. If you encounter any value that should respect specific criterias, do not hesitate to contact me or create an issue.

With all that in mind, dummy functions **might not** return data that makes sense **(e.g. a bounding box could be returned, where the northern-bound latitude is lower than the southern-bound latitude)**. Thus, developpers should not assume that the data received from a a dummy function always makes sense. **To avoid** that random aspect of dummy functions that might not be wanted for use-cases that need consistency (like unit tests), developpers should simply modify the attributes of the returned objects during the execution.

## Generators

The available generator classes offer a centralised access to different data-generation methods. They can be used to generate data for your application, or even replace the fields of an object returned by a dummy function. All generators are available at the route of the project (`geo-env-typing/generators`), but they can also be imported from their respective module (e.g. `geo-env-typing/generators/numberGenerator.ts`).

## Constants

Every (almost) module of the geo-env-typing project provides a namespace for the constants used to create the methods or dummy functions inside of it. The namespace can be imported to equip the developper with default values or limits that are used when setting the values of the types' attributes.

# Supported APIs

## Google (Solar, Air Quality, Maps)

Google provides a broad range of choices in the geographic / environnemental API landscape. Our project, geo-env-typing, currently supports important types and mockers for these APIs. Links to documentation are provided if you would like to try them out:

-   [Building Insights Requests](https://developers.google.com/maps/documentation/solar/building-insights)
-   [Air Quality Requests](https://developers.google.com/maps/documentation/air-quality/overview)
-   [Geocoding Requests](https://developers.google.com/maps/documentation/geocoding)

Each sort of data is put into a separate folder, and generator classes are used as helper to provide dummy functions. The name of the types may not be identical to the ones provided by Google, but all the attributes name should be. Do not hesitate to create an issue or to message me if an API endpoint is not supported and / or any error exists in the code regarding the types, their attributes, or the dummy functions.
