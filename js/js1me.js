
// fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
//     .then((response) => response.json())
//     .then((data) => {
//         useData(musicData);
//         // function to execute when the data is retrieved
//     });

// // JS for Table on Products page begins here

// JS for Table on Products page ends here
// Loop through all table rows, and hide those who don't match the search query


document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("myTable");
    const input = document.getElementById("myInput");

    input.addEventListener("keyup", function () {
        const filter = input.value.toUpperCase();
        fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
            .then((response) => response.json())
            .then((musicData) => {
                populateTable(table, musicData, filter);
            })
            .catch((error) => {
                console.error('Error fetching music data:', error);
            });
    });

    // Initial population of the table with all data
    fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
        .then((response) => response.json())
        .then((musicData) => {
            populateTable(table, musicData, '');
        })
        .catch((error) => {
            console.error('Error fetching music data:', error);
        });
});

function populateTable(table, musicData, filter) {
    // Clear table body before populating with new data
    table.innerHTML = "";

    // Loop through the music data and add rows to the table
    musicData.forEach((item) => {
        if (item.genre.toUpperCase().includes(filter)) {
            const row = table.insertRow();
            const artistCell = row.insertCell(0);
            const albumCell = row.insertCell(1);
            artistCell.textContent = item.artist;
            albumCell.textContent = item.album;
        }
    });
}
// JS for Table on Products page ends here
