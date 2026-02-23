/*
 (                           )  
 )\ )        *   )   (    ( /(  
(()/(  (   ` )  /(   )\   )\()) 
 /(_)) )\   ( )(_))(((_) ((_)\  
(_))_|((_) (_(_()) )\___  _((_) 
| |_  | __||_   _|((/ __|| || | 
| __| | _|   | |   | (__ | __ | 
|_|   |___|  |_|    \___||_||_|                                 
*/

//  1 - click on the button #btnSearch and fetch Object IDs that match your queries
//  Use the following documentation for your fetch request: https://collectionapi.metmuseum.org/public/collection/v1/search
//  Use the /public/collection/v1/search endpoint to fetch some Object IDs
//  Hint: ask for results that `hasImages`
const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers";

//  2 - use one of the Object IDs you found above to find details about your favourite painting
//  Hint: https://metmuseum.github.io/?ref=dr-pa&utm_medium=public-apis-website#object
//  Hint 2: use the src attribute of the image with id #painting to show the painting, the result will be primaryImageSmall in the fetched data
