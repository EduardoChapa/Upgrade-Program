document.getElementById('text-request').addEventListener('click', textRequest);
document.getElementById('json-request').addEventListener('click', jsonRequest);

function textRequest() {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        switch(this.readyState) {
            case 0:
                console.log('Client has been created');
                break;
            case 1:
                console.log('open() has been called');
                break;
            case 2:
                console.log('send() has been called');
                break;
            case 3:
                console.log('Loading data');
                break;
            case 4:
                console.log('Request has been completed succesfully');
                break;
        }
    }

    req.onload = function() {
        if (this.status == 200) {
            var div = document.getElementById('text-file');
            var p = document.createElement('p');
            p.innerText = this.responseText;
            div.appendChild(p);
        }
        else
            console.log('An error occurred');
    }

    req.open('GET', 'js/sample.txt', true);

    req.send();
}


function jsonRequest() {
    var req = new XMLHttpRequest();

    req.onload = function() {
        if (this.status == 200) {
            var div = document.getElementById('json-file');
            var p = document.createElement('p');
            var users = JSON.parse(this.responseText);
            var ul = document.createElement('ul');

            p.innerText = 'Users Data';
            div.appendChild(p);

            for (user of users) {
                data = `ID: ${user.id}<br>
                        Name: ${user.first_name} ${user.last_name}<br>
                        Email: ${user.email}<br>
                        Gender: ${user.gender}<br>
                        IP Address: ${user.ip_address}<br><br>`; 
                li = document.createElement('li');
                li.innerHTML = data
                ul.appendChild(li);
            }
            div.appendChild(ul);           
        }
        else
            console.log('An error occurred');
    }

    req.open('GET', 'js/data.json', true);

    req.send();
}