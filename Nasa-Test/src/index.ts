import express from 'express';
import moment from 'moment';
import { DailyImage } from './nasa/daily-image';

const app = express();
app.use(express.json());
const port = 8002; // default port to listen

// define a route handler for the default home page
app.get( '/', async ( request: any, response: any ) => {
    response.send({});
} );

// Handle get requests to /nasa
app.get( '/daily', async ( request: any, response: any ) => {
    const daily = new DailyImage();
    // Sends in today's date as a formatted string
    const result = await daily.getImageForDate(moment().format('YYYY-MM-DD'));
    // Sends back the result of the image getter
    response.send(result);
} );

// Handle get requests to /nasa for /timeline endpoint
app.get( '/timeline', async ( request: any, response: any ) => {
    const daily = new DailyImage();
    //get date params from query and convert to array (stripping extra characters)
    const dates = request.query.dates.replace(/"/g, '').split(',');

    //send requests for individual dates
    const results = dates.map(async (date: string) =>
            await daily.getImageForDate(date)
    );

    //wait for all promises to be resolved then return results
    Promise.all(results)
        .then(results => {
            response.send(results);
        })
        .catch(e => {
            console.error(e);
        });
} );


// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
