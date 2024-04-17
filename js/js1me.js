
// JS for Table on Products page begins here
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
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
// JS for Table on Products page ends here
async function fetchData() {
     try {
       const response = await fetch(
         "https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData"
       );
       const data = await response.json();
       return data;
     } catch (error) {
       console.error("Error fetching data:", error);
       return [];
     }
     }

   // Function to populate the table with data
async function populateTable() {
     const dataTable = document.getElementById("data-table");
     const tableBody = dataTable.querySelector("tbody");
     console.log("hey");

     // Fetch data from the API
     const apiData = await fetchData();

     // Clear existing table rows
     tableBody.innerHTML = "";

     // Populate table rows with API data
     apiData.forEach((item) => {
       const row = document.createElement("tr");
       row.innerHTML = `
                <td>${item.artist}</td>
                <td>${item.album}</td>
                <td>${item.email}</td>
            `;
       tableBody.appendChild(row);
     });
}

   // Call the function to populate the table when the page loads
