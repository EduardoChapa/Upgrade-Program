const template = document.createElement('template');
template.innerHTML = `
    <style>    
    #container {
        background-color: rgb(126, 126, 126);
        padding: 0.20%;
        border-radius: 5px;
    }
    #pieChart {
        background-color: rgb(256, 256, 256);
        border-radius: 5px;
        padding: 5px;
    }
    </style>
    <div id="container">
        <div id="pieChart">
            Hi  
        </div>
    </div>
`;

class PieChart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('Connected Callback');
        this.buildChart();
    }

    buildChart() {
        var response = fetch(this.getAttribute('data'));
        var data = response.then(res => res.json());
        var almost = data.then(res => this.setData(res));
        var last = almost.then(res => {
            console.log(this);
            google.charts.load('current', {packages: ['corechart']});
            google.charts.setOnLoadCallback(() => {
                // Define the chart to be drawn.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Element');
                data.addColumn('number', 'Percentage');
                data.addRows([
                ['Completed', res[0]],
                ['Pending', res[1]]
                ]);

                var options = {
                    height: 500
                };

                // Instantiate and draw the chart.
                var chart = new google.visualization.PieChart(this.shadowRoot.getElementById('pieChart'));
                chart.draw(data, options);
            });
        });
    }

    trash() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json().then(data => {data: data}))
        .then(response => {
            console.log(response[1]);
            response[1].setData(response[0]);
        });
    }

    drawChart(res) {
        // Define the chart to be drawn.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Element');
        data.addColumn('number', 'Percentage');
        data.addRows([
          ['Completed', res[0]],
          ['Pending', res[1]]
        ]);
    
        // Instantiate and draw the chart.
        var chart = new google.visualization.PieChart(this.shadowRoot.getElementById('pieChart'));
        console.log(this.shadowRoot.getElementById('pieChart'));
        chart.draw(data, null);
    }

    setData(data) {
        console.log(data);
        var result = [0, 0];
        for (let item of data) {
            if (item.completed)
                result[0] += 1;
            else
                result[1] +=1;
        }
        return result;
    }

}

window.customElements.define('pie-chart', PieChart);

function setData(data) {
    var result = [0, 0];
    for (item of data) {
        if (item.completed)
            result[0] += 1;
        else
            result[1] +=1;
    }
    return result;
}

function drawChart(res) {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.addRows([
      ['Completed', res[0]],
      ['Pending', res[1]]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('container'));
    chart.draw(data, null);
}

window.onload = function() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setData(data))
    .then(data => {
        google.charts.load('current', {packages: ['corechart']});
        google.charts.setOnLoadCallback(function() {
            drawChart(data);
        });
    });
}