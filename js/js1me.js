
fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
  .then((response) => response.json())
  .then((data) => {
    useData(data);
    // function to execute when the data is retrieved
  });

// JS for Table on Products page begins here

// JS for Table on Products page ends here
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

// JS for Table on Products page ends here

