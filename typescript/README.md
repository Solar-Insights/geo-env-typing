# Project

The geo-env-typing project aims to provide **types**, **data-validators** and **data-mockers** for developpers wanting to use geographic, solar, and air-quality data from different APIs. The first version of the project is still under development, and only supports response from Google's APIs. The present README describes supported programming languages, supported APIs, usage, etc.

# Supported Languages

Each language is separated into its own directory, at the root of the project. At the moment, TypeScript is the only supported language. Fork the repo and start using its modules, or follow the language-specific isntructions.

## TypeScript

To import geo-env-typing to your project, install the npm package `geo-env-typing` at the root of your project, where the package.json file is located, with the following command: `npm i geo-env-typing`.

From there, you can import the needed modules using the ESModules (`import`) or CommonJS (`require`) syntax. See more information on the API's respective page for the import syntax.

# Google's APIs

The different APIs from Google return three main sorts of data:

-   Geospatial and generic data
-   Solar data
-   Air data

Each sort of data is put into a separate folder, and generator classes are used as helper to provide dummy functions. The name of the types may not be identical to the ones provided by Google, but all the attributes name should be. Do not hesitate to create an issue or to message me if an API endpoint is not supported and / or any error exists in the code regarding the types, their attributes, or the dummy functions.

## TypeScript
For TypeScript users that installed the package `geo-env-typing`, you can access the different types and functions can be imported using the following paths: 
- `geo-env-typing/geo`
- `geo-env-typing/solar`
- `geo-env-typing/air`

Also, the generator classes can be imported from their respective file using the following path: 
- `geo-env-typing/generators/`

For example, to import and use the method `dummyLatLng` from the `geo` module and the `numberGenerator` class using ESModule, the following lines of code would be used:
```
import { dummyLatLng } from "geo-env-typing/geo";
import { numberGenerator } from "geo-env-typing/generators/numberGenerator";

console.log(dummyLatLng());
console.log(numberGenerator.generateLat());
```

# What are Dummy Functions?

Dummy functions are basically functions that can be used for testing purposes. Their goal is to create an object with dummy (randomly generated) data, usable for unit / integration tests, or even first stages of development.

Most of the mocked data is random **(e.g. dates, booleans, strings. etc.)**, but some are created to respect some criterias **(e.g. latitudes should be decimal value between -90 and 90, URLs should respect URL standards, etc.)**. If you encounter any value that should respect specific criterias, do not hesitate to contact me or create an issue.

With all that in mind, dummy functions **might not** return data that makes sense **(e.g. a bounding box could be returned, where the northern-bound latitude is lower than the southern-bound latitude)**. Since endpoints might not validate data on their side, developpers should not always assume that the data received from a request makes sense. **To avoid** that random aspect of dummy functions that might not be wanted for use-cases that need consistency (like unit tests), developpers should simply modify the attributes of the returned objects during the execution.
