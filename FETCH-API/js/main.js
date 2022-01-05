document.getElementById('getText').addEventListener('click', getTextArrow);
document.getElementById('getJSON').addEventListener('click', getJSON);
document.getElementById('getAPI').addEventListener('click', getAPI);
document.getElementById('addPost').addEventListener('submit', postAPI);

function callbackTest(num, callbackFunction) {
    if (callbackFunction)
        callbackFunction();
    else
        console.log("No callback function found");
}

function doSomething() {
    console.log('Doing something');
}

function getText() {
    fetch('sample.txt')
    .then(function(res) {
        return res.text();
    })
    .then(function(data) {
        console.log(data);
    });
}

//With arrow function
function getTextArrow() {
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
        document.getElementById('contents').innerHTML = data;
    });
}

//Get data from JSON
function getJSON() {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        let result = '<h1>Data from JSON</h1>'
        data.forEach(function(user) {
            result += `
                <ul>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>Gender: ${user.gender}</li>
                    <li>Email: ${user.email}</li>
                    <li>Company: ${user.company}</li>
                    <li>Balance: \$${user.balance}</li>
                </ul>
            `;
            document.getElementById('contents').innerHTML = result;
        })
    });
}

//Get data from API
function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let result = '<h1>Data from API</h1>'
        data.forEach(function(post) {
            result += `
                <ul>
                    <li>User ID: ${post.userId}</li>
                    <li>Post ID: ${post.id}</li>
                    <li>Post Title: ${post.title}</li>
                    <li>Post Contents: ${post.body}</li>
                </ul>
            `;
            document.getElementById('contents').innerHTML = result;
        })
    });
}

//Post data to API
function postAPI(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('title').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
}