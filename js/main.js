//imports
//google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
//end imports


$(window).on("resize", function (event) {
    drawChart();
});

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
    var options = {
        title: "",
        width: '100%',
        height: '100%',
        axisTitlesPosition: 'out',
        'isStacked': true,
        pieSliceText: 'percentage',
        colors: ['blue', 'orange'],
        backgroundColor: 'transparent',
        legend: 'none'
    };

    // Display the chart inside the <div> element with id="skillsChart"
    var chart = new google.visualization.BarChart(document.getElementById('skillsChart'));
    chart.draw(data, options);
}