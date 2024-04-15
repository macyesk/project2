
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

    input.addEventListener("keyup", function () {
        const filter = input.value.toUpperCase();
        fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
            .then((response) => response.json())
            .then((data) => {
                // Clear table body before populating with new data
                table.innerHTML = "";
            }
// JS for Table on Products page ends here


// modal for news page
// Get the modal element
// const modal = document.getElementById("myModal");

//         // Get the button that opens the modal
//         const btn = document.getElementById("openModalBtn");

//         // Get the <span> element that closes the modal
//         const span = document.getElementsByClassName("close")[0];

//         // When the user clicks the button, open the modal
//         btn.addEventListener("click", function () {
//             modal.style.display = "block";
//         });

//         // When the user clicks on <span> (x), close the modal
//         span.addEventListener("click", function () {
//             modal.style.display = "none";
//         });

//         // When the user clicks anywhere outside of the modal, close it
// window.addEventListener("click", function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         }
//         })
