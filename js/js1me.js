fetch("https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData")
  .then((response) => response.json())
  .then((data) => {
    useData(data);
    // function to execute when the data is retrieved
  });

  function useData(data) {
    let name = data["Rock"]["The Beatles"]["followers"]
    console.log(name)
  }