//imports
//google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
//end imports

function onLoad() {
    drawChart();
}

function sendEmail(params) {
    window.location.href = "mailto:alejandro160695@gmail.com";
}

  // Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Skill', 'Level'],
        ['Java', 9],
        ['Talend', 6.5],
        ['Microstrategy', 7],
        ['HTML5', 6],
        ['SQL', 8]
    ]);

    // Optional; add a title and set the width and height of the chart
    var chartwidth = $('#chartparent').width();
    
    var options = {'width':chartwidth, 'height':400, 'backgroundColor': 'transparent', 'legend': 'none'};

    // Display the chart inside the <div> element with id="skillsChart"
    var chart = new google.visualization.BarChart(document.getElementById('skillsChart'));
    chart.draw(data, options);
}

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Skill', 'Level'],
        ['Java', 9],
        ['Talend', 6.5],
        ['Microstrategy', 7],
        ['HTML5', 6],
        ['SQL', 8]
    ]);

    // Optional; add a title and set the width and height of the chart
    var chartwidth = $('#chartparent').width();
    
    var options = {'width':chartwidth, 'height':400, 'backgroundColor': 'transparent', 'legend': 'none'};

    // Display the chart inside the <div> element with id="skillsChart"
    var chart = new google.visualization.BarChart(document.getElementById('skillsChart'));
    chart.draw(data, options);
}

