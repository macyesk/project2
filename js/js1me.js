
fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
    .then((response) => response.json())
    .then((data) => {
        useData(musicData);
        // function to execute when the data is retrieved
    });

// // JS for Table on Products page begins here

// JS for Table on Products page ends here
// Loop through all table rows, and hide those who don't match the search query
function useData(musicData) {
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("myTable");
    const input = document.getElementById("myInput");

    input.addEventListener("keyup", function (useData) {
        const filter = input.value.toUpperCase();
        fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
            .then((response) => response.json())
            .then((musicData) => {
                // Clear table body before populating with new data
                table.innerHTML = "";
            }
// JS for Table on Products page ends here
