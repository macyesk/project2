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

//     for (const artist of musicData["Rap"]) {
//         displayArtist(artist, "Rap");
//     }
function printData(musicData) {
    const table = document.createElement("table");
    const headerRow = table.insertRow(0);
    document.body.appendChild(table);

    // Create table headers
    const headers = ["Artist", "Album", "Genre"];
    headers.forEach((headerText, index) => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    console.log(musicData);
    rapObject = musicData["Rap"];
    popObject = musicData["Pop"];
    rockObject = musicData["Rock"];

    for (const key of Object.entries(rapObject)) {
        let artistData = key;
        let artistName = artistData[0];
        console.log(artistName);
        let genreName = "Rap";
        for (const album of rapObject[`${artistName}`]["albums"]) {
            let albumTitle = album["name"];
            let albumRow = document.createElement("tr");
            let nameData = document.createElement("td");
            let albumData = document.createElement("td");
            let genreData = document.createElement("td");
            nameData.innerHTML = artistName;
            albumData.innerHTML = albumTitle;
            genreData.innerHTML = genreName;
            albumRow.appendChild(nameData);
            albumRow.appendChild(albumData);
            albumRow.appendChild(genreData);
            table.appendChild(albumRow);
            console.log(albumRow.innerHTML);
        }
    }

    for (const key of Object.entries(popObject)) {
        let artistData = key;
        let artistName = artistData[0];
        console.log(artistName);
        let genreName = "Pop";
        for (const album of popObject[`${artistName}`]["albums"]) {
            let albumTitle = album["name"];
            let albumRow = document.createElement("tr");
            let nameData = document.createElement("td");
            let albumData = document.createElement("td");
            let genreData = document.createElement("td");
            nameData.innerHTML = artistName;
            albumData.innerHTML = albumTitle;
            genreData.innerHTML = genreName;
            albumRow.appendChild(nameData);
            albumRow.appendChild(albumData);
            albumRow.appendChild(genreData);
            table.appendChild(albumRow);
            console.log(albumRow.innerHTML);
        }
    }
    for (const key of Object.entries(rockObject)) {
        let artistData = key;
        let artistName = artistData[0];
        console.log(artistName);
        let genreName = "Rock";
        for (const album of rockObject[`${artistName}`]["albums"]) {
            let albumTitle = album["name"];
            let albumRow = document.createElement("tr");
            let nameData = document.createElement("td");
            let albumData = document.createElement("td");
            let genreData = document.createElement("td");
            nameData.innerHTML = artistName;
            albumData.innerHTML = albumTitle;
            genreData.innerHTML = genreName;
            albumRow.appendChild(nameData);
            albumRow.appendChild(albumData);
            albumRow.appendChild(genreData);
            table.appendChild(albumRow);
            console.log(albumRow.innerHTML);
        }
    }
    document.body.appendChild(table);
}

//     for (const artist of musicData["Pop"]) {
//         displayArtist(artist, "Pop")
=======
function printData(musicData) {
  const table = document.createElement("table");
  const headerRow = table.insertRow(0);
  document.body.appendChild(table);

  // Create table headers
  const headers = ["Artist", "Album", "Genre"];
  headers.forEach((headerText, index) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  console.log(musicData);
  rapObject = musicData["Rap"];
  popObject = musicData["Pop"];
  rockObject = musicData["Rock"];

  for (const key of Object.entries(rapObject)) {
    let artistData = key;
    let artistName = artistData[0];
    console.log(artistName);
    let genreName = "Rap";
    for (const album of rapObject[`${artistName}`]["albums"]) {
      let albumTitle = album["name"];
      let albumRow = document.createElement("tr");
      let nameData = document.createElement("td");
      let albumData = document.createElement("td");
      let genreData = document.createElement("td");
      nameData.innerHTML = artistName;
      albumData.innerHTML = albumTitle;
      genreData.innerHTML = genreName;
      albumRow.appendChild(nameData);
      albumRow.appendChild(albumData);
      albumRow.appendChild(genreData);
      table.appendChild(albumRow);
      console.log(albumRow.innerHTML);
    }
  }

  for (const key of Object.entries(popObject)) {
    let artistData = key;
    let artistName = artistData[0];
    console.log(artistName);
    let genreName = "Pop";
    for (const album of popObject[`${artistName}`]["albums"]) {
      let albumTitle = album["name"];
      let albumRow = document.createElement("tr");
      let nameData = document.createElement("td");
      let albumData = document.createElement("td");
      let genreData = document.createElement("td");
      nameData.innerHTML = artistName;
      albumData.innerHTML = albumTitle;
      genreData.innerHTML = genreName;
      albumRow.appendChild(nameData);
      albumRow.appendChild(albumData);
      albumRow.appendChild(genreData);
      table.appendChild(albumRow);
      console.log(albumRow.innerHTML);
    }
  }
  for (const key of Object.entries(rockObject)) {
    let artistData = key;
    let artistName = artistData[0];
    console.log(artistName);
    let genreName = "Rock";
    for (const album of rockObject[`${artistName}`]["albums"]) {
      let albumTitle = album["name"];
      let albumRow = document.createElement("tr");
      let nameData = document.createElement("td");
      let albumData = document.createElement("td");
      let genreData = document.createElement("td");
      nameData.innerHTML = artistName;
      albumData.innerHTML = albumTitle;
      genreData.innerHTML = genreName;
      albumRow.appendChild(nameData);
      albumRow.appendChild(albumData);
      albumRow.appendChild(genreData);
      table.appendChild(albumRow);
      console.log(albumRow.innerHTML);
    }
  }
  document.body.appendChild(table);
}


// // Fetch data and call printData function
// function printData(musicData) {
//   const table = document.createElement("table");
//   const headerRow = table.insertRow(0);

//   // Create table headers
//   const headers = ["Artist", "Album", "Genre"];
//   headers.forEach((headerText, index) => {
//     const header = document.createElement("th");
//     header.textContent = headerText;
//     headerRow.appendChild(header);
//   });

//   // Iterate over each genre
//   ["Rap", "Pop", "Rock"].forEach((genre) => {
//     // Iterate over each artist in the genre
//     if (musicData[genre]) {
//       for (const artistName in musicData[genre]) {
//         if (musicData[genre].hasOwnProperty(artistName)) {

//           const artist = musicData[genre][artistName];
//           const row = table.insertRow(-1); // Append row to the end of the table

//           // Insert artist, album, and genre into the row
//           const artistCell = row.insertCell(0);
//           artistCell.textContent = artistName;

//           const albumCell = row.insertCell(1);
//           albumCell.textContent = musicData[genre][artistName].album;

//           const genreCell = row.insertCell(2);
//           genreCell.textContent = genre;
//         }
//       }
//     }
//   });


//     for (const artist of musicData["Rock"]) {
//         displayArtist(artist, "Rock")
//     }
//   // Append the table to the body of the HTML page
//   document.body.appendChild(table);
// }

