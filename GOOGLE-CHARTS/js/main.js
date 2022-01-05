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
        this.buildChart();
    }

    buildChart() {
        fetch(this.getAttribute('data'))
        .then(res => res.json())
        .then(res => this.setData(res))
        .then(res => {
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