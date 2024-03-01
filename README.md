# Project

The geo-env-typing project aims to provide **types**, **data-validators** and **data-mockers** for developpers wanting to use geographic, solar, and air-quality data from different APIs. The first version of the project is still under development, and only supports response from Google's APIs. The present README describes supported APIs, usage, etc.

## Import geo-env-typing in TypeScript or JavaScript project

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

# Google's APIs

The different APIs from Google return three main sorts of data:

-   Geospatial and generic data
-   Solar data
-   Air data

Each sort of data is put into a separate folder, and generator classes are used as helper to provide dummy functions. The name of the types may not be identical to the ones provided by Google, but all the attributes name should be. Do not hesitate to create an issue or to message me if an API endpoint is not supported and / or any error exists in the code regarding the types, their attributes, or the dummy functions.

# What are Dummy Functions?

Dummy functions are basically functions that can be used for testing purposes. Their goal is to create an object with dummy (randomly generated) data, usable for unit / integration tests, or even first stages of development.

Most of the mocked data is random **(e.g. dates, booleans, strings. etc.)**, but some are created to respect some criterias **(e.g. latitudes should be decimal value between -90 and 90, URLs should respect URL standards, etc.)**. If you encounter any value that should respect specific criterias, do not hesitate to contact me or create an issue.

With all that in mind, dummy functions **might not** return data that makes sense **(e.g. a bounding box could be returned, where the northern-bound latitude is lower than the southern-bound latitude)**. Since endpoints might not validate data on their side, developpers should not always assume that the data received from a request makes sense. **To avoid** that random aspect of dummy functions that might not be wanted for use-cases that need consistency (like unit tests), developpers should simply modify the attributes of the returned objects during the execution.
