# Setup

1. Make sure you have the following installed:
```
NodeJS 10.x, x > 10
NPM
```
2. Fork this repository to your working station and open the project in your favourite TypeScript editor. I recommend that you use [Visual Studio Code](https://code.visualstudio.com/download) in order to start working on the project
3. Go to https://api.nasa.gov/ and get an api key. Note: for each API key there is a 1000 request per hour limit applied across all api.nasa.gov API requests, make sure not to exceed this when testing your code.
4. Go to the Nasa-Test\src\nasa\keys file and insert your key as a string. Make sure changes on this file are **ABSOLUTELY NOT** commited to keep your api key private

# Programming Question
- Under the Nasa-Test\src\nasa folder of the project, you will see that there is a class called DailyImage that allows users to get the Astronomy Picture Of The Day info from the Nasa api. 
- In the Nasa-Test\src\index.ts file, you will see that a get endpoint has been setup for /daily, that allows the user to get the daily image by using the DailyImage class.
- Using a similar project structure create a new endpoint /timeline that accepts a GET request with a dates parameter (You may use any existing methods in your implementation. )
- For each of the dates in the parameter, fetch the Astronomy Picture Of The Day from the nasa daily image api. You will then need to order this list chronologically with the most recent picture first.

The request parameter has the following format:
```
?dates="2019-10-10,2019-02-05,2020-01-01" (comma separated string of dates)
```

Your response json should have the following format: 
```
{
timeline: [
  {   
    "date": "2020-01-21",
    "explanation": "text text text",
    "media_type": "video",
    "title": "text",
    "url": "https://image.com"
  }, ...
]
}
```

# Building the project
Go to the Nasa-Test folder and run the following commands: 
```
npm install
npm run start
```

To run the unit test, run the following commangs:
``` 
npm install
npm run test
```

# Passing Criteria & Submitting

* Keep code strongly typed with good coding practices, and use the await/async model when performing `Promises` within TypeScript
* Document all of your functions with statement blocks using the @param and @returns annotations, and add 2 tests for every function written, one that expects to pass and one that expects to fail. Your tests should go in the Nasa-Test\tests\nasa\nasa-test.ts file
* Once you are done, commit your solution to a branch in the GitHub repository with the branch name in the following format: student number-name (i.e.: 123456-first-last) and make a pull request. You have until Jan 31st, 6pm to submit your interview. 


# Bonus Front End Challenge
This is a bonus challenge to show off your skills as a front end developer.
Create a single page application in the browser that would be used to input the dates the user wants, consume, and display this timeline data. You may use the technology of your choice, as well as any UI libraries.

Example data:
```
[
{
    "date": "2020-01-22",
    "explanation": "It is the closest cluster of stars to the Sun. The Hyades open cluster is bright enough to have been remarked on even thousands of years ago, yet is not as bright or compact as the nearby Pleiades (M45) star cluster. Pictured here is a particularly deep image of the Hyades which has brings out vivid star colors and faint coincidental nebulas.  The brightest star in the field is yellow Aldebaran, the eye of the bull toward the constellation of Taurus. Aldebaran, at 65 light-years away, is now known to be unrelated to the Hyades cluster, which lies about 150 light-years away.  The central Hyades stars are spread out over about 15 light-years. Formed about 625 million years ago, the Hyades likely shares a common origin with the Beehive cluster (M44), a naked-eye open star cluster toward the constellation of Cancer, based on M44's motion through space and remarkably similar age.",
    "media_type": "image",
    "title": "The Hyades Star Cluster",
    "url": "https://apod.nasa.gov/apod/image/2001/Hyades_Mtanous_1080.jpg"
}, ...
]
```
