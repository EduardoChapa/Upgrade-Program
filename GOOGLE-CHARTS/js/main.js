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
    var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
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