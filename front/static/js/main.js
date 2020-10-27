const MY_URL = "http://127.0.0.1:7005/api/v1/"

function userAction() {
    let username = document.getElementById("search").value;
    console.log(username);
    let new_url = MY_URL + username;
    getData(new_url)
    .then(data => {
    document.getElementById("demo").innerHTML = JSON.stringify(data);
    console.log(data)
    }) 
};

// Function to fetch data from a given URL
async function getData(url) {
    const response = await fetch(url, {
      'mode': 'cors',
      'method': 'GET',
      'headers': {
        'Origin': 'http://184.72.156.146'
      }
    });
    const data = await response.json()
    return data;
  }

