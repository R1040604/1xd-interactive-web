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

//  2 - use one of the Object IDs you found above to find details about your favourite painting
//  Hint: https://metmuseum.github.io/?ref=dr-pa&utm_medium=public-apis-website#object
//  Hint 2: use the src attribute of the image with id #painting to show the painting, the result will be primaryImageSmall in the fetched data


// HTML elementen ophalen
const btnSearch = document.getElementById("btnSearch");
const metSearchDiv = document.getElementById("metSearch");
const paintingImg = document.getElementById("painting");

// API endpoint
const url = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers";

// ⭐ 1 — IDs ophalen bij click
btnSearch.addEventListener("click", async () => {
    metSearchDiv.innerHTML = "Loading...";

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Toon de eerste 10 object IDs
        const ids = data.objectIDs.slice(0, 10);

        metSearchDiv.innerHTML = `
            <p><strong>Gevonden painting IDs:</strong></p>
            <ul>
                ${ids.map(id => `<li>${id}</li>`).join("")}
            </ul>
        `;

        // Gebruik de eerste ID om details op te halen
        const firstId = ids[0];
        loadPainting(firstId);

    } catch (error) {
        metSearchDiv.innerHTML = "Er ging iets mis!";
        console.error(error);
    }
});

// ⭐ 2 — Details van een painting ophalen en tonen
async function loadPainting(objectID) {
    const objUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;

    try {
        const response = await fetch(objUrl);
        const data = await response.json();

        paintingImg.src = data.primaryImageSmall;
        paintingImg.alt = data.title || "Painting";

    } catch (error) {
        console.error("Error loading painting details", error);
    }
}
