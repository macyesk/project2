
// fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
//     .then((response) => response.json())
//     .then((data) => {
//         useData(musicData);
//         // function to execute when the data is retrieved
//     });

// // JS for Table on Products page begins here

// JS for Table on Products page ends here
// Loop through all table rows, and hide those who don't match the search query

// let rapObject = {}
// let popObject = {}
// let rockObject = {}

fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
    .then((response) => response.json())
    .then((data) => printData(data));
// // function for defining rap rock and pop music
// function printData(musicData) {
//     console.log(musicData);
//     rapObject = musicData["Rap"];
//     popObject = musicData["Pop"];
//     rockObject = musicData["Rock"];

//     for (const artist of musicData["Rap"]) {
//         displayArtist(artist, "Rap");
//     }

//     for (const artist of musicData["Pop"]) {
//         displayArtist(artist, "Pop")
//     }

//     for (const artist of musicData["Rock"]) {
//         displayArtist(artist, "Rock")
//     }
// }

// Fetch data and call printData function
function printData(musicData) {
    const table = document.createElement("table");
    const headerRow = table.insertRow(0);

    // Create table headers
    const headers = ["Artist", "Album", "Genre"];
    headers.forEach((headerText, index) => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    // Iterate over each genre
    ["Rap", "Pop", "Rock"].forEach((genre) => {
        // Iterate over each artist in the genre
        if (musicData[genre]) {
            for (const artistName in musicData[genre]) {
                if (musicData[genre].hasOwnProperty(artistName)) {
                    const artist = musicData[genre][artistName];
                    const row = table.insertRow(-1); // Append row to the end of the table

                    // Insert artist, album, and genre into the row
                    const artistCell = row.insertCell(0);
                    artistCell.textContent = artistName;

                    const albumCell = row.insertCell(1);
                    albumCell.textContent = musicData[genre][artistName].album;

                    const genreCell = row.insertCell(2);
                    genreCell.textContent = genre;
                }
            }
        }
    });

    // Append the table to the body of the HTML page
    document.body.appendChild(table);
}

