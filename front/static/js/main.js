const MY_URL = "http://127.0.0.1:7005/api/v1/"

function userAction() {
    // We take value in the search bar as 'username'
    let username = document.getElementById("search").value;
    console.log(username);
    let new_url = MY_URL + username;
    getData(new_url)
    .then(data => {
    if (data.name === undefined) {
      alert("Please fill in with valid Torre Username")
    } else {
      document.getElementById("demo").innerHTML =
      `<p class="user_name">${data.name}</p>
      <p class="user_headline">${data.headline}</p>
      <p class="score">Your Score: ${data.score}</p>
      <p class="compare">Compare with your friends and improve your Genome!</p>`
    };
    }); 
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

function enterSearch(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    userAction()
    document.getElementById("search").value = ""
  }
}

