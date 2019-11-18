


// Chart Three: Public Charities
function public_old() {
  var oldData = google.visualization.arrayToDataTable([
    ['Year', 'Amount'],
    ["2005", 1414343],
    ["2010", 1493407],
    ["2015", 1561616]
  ]);

  var newData = google.visualization.arrayToDataTable([
    ['Year', 'Amount'],
    ["2005", 847946],
    ["2010", 979883],
    ["2015", 1088447]
  ]);

  var colChartDiff = new google.visualization.ColumnChart(document.getElementById(''));
  
  var options = {
    title:'Nonprofits Registered with the IRS',
    legend: {position: "top"},
    chartArea:{left: 50, right: 0, width:"100%",height:"500px"},
    vAxis: {minValue: 0, maxValue: 1650000, format: "short"}, //Set min to 0?
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: {fill:'transparent'},
    fontName: 'Karla', 
    fontSize: '16',
    diff: { 
      oldData: {color: 'red', tooltip:{prefix:'Nonprofits'}},
      newData: {color: 'black'}
      }
  };

  var diffData = colChartDiff.computeDiff(oldData, newData);
  colChartDiff.draw(diffData, options);
}

// Chart Six: Public Charities by Type Change
function publictypechange() {
  var data = google.visualization.arrayToDataTable([
    ['Type',                                  '2005',  '2015',    {role: 'annotation'}, {role: 'style'}],
    ["International",                         0,       17.8,     "17.8%",     "color: black"],
    ["Higher Education",                      0,       13.2,     "13.2%",     "color: black"],
    ["Envionment and animals",                0,       12.8,     "12.8%",     "color: black"],
    ["Religion related",                      0,       8.2,      "8.2%",      "color: black"],
    ["Human Services",                        0,       4.4,      "4.4%",      "color: black"],
    ["All public charities",                  0,       0.6,      "0.6%",      "color: red"],
    ["Hospitals/primary care",                0,       -0.5,     "-0.5%",     "color: black"],
    ["Other public and social benefit",       0,       -2.4,     "-2.4%",     "color: black"],
    ["Education",                             0,       -3.3,     "-3.3%",     "color: black"],
    ["Other Education",                       0,       -4,       "-4%",       "color: black"],
    ["Health",                                0,       -4.9,     "-4.9%",     "color: black"],
    ["Other health care",                     0,       -5.9,     "-5.9%",     "color: black"],
    ["Arts",                                  0,       -9.7,     "-9.7%",     "color: black"]
  ]);
  
  var options = {
      title:'Nonprofits Registered with the IRS',
      legend: {position: "none"},
      chartArea:{left: 250, right: 0, width:"100%",height:"500px"},
      annotations: {alwaysOutside: true, stemColor: 'none'},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
    };
    
  var chart = new google.visualization.LineChart(document.getElementById('six'));
  chart.draw(data, options);
  }
  
  
// Chart Six: Public Charities by Type Change
function publictypechange() {
  var data = google.visualization.arrayToDataTable([
    ['Type',                                  '2005',  '2015',    {role: 'annotation'}, {role: 'style'}],
    ["International",                         0,       17.8,     "17.8%",     "color: black"],
    ["Higher Education",                      0,       13.2,     "13.2%",     "color: black"],
    ["Envionment and animals",                0,       12.8,     "12.8%",     "color: black"],
    ["Religion related",                      0,       8.2,      "8.2%",      "color: black"],
    ["Human Services",                        0,       4.4,      "4.4%",      "color: black"],
    ["All public charities",                  0,       0.6,      "0.6%",      "color: blue"],
    ["Hospitals/primary care",                0,       -0.5,     "-0.5%",     "color: black"],
    ["Other public and social benefit",       0,       -2.4,     "-2.4%",     "color: black"],
    ["Education",                             0,       -3.3,     "-3.3%",     "color: black"],
    ["Other Education",                       0,       -4,       "-4%",       "color: black"],
    ["Health",                                0,       -4.9,     "-4.9%",     "color: black"],
    ["Other health care",                     0,       -5.9,     "-5.9%",     "color: black"],
    ["Arts",                                  0,       -9.7,     "-9.7%",     "color: black"]
  ]);


var options = {
    title:'Nonprofits Registered with the IRS',
    legend: {position: "none"},
    chartArea:{left: 30, right: 0, width:"100%",height:"500px"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: { fill:'transparent' },
    fontName: 'Karla', 
    fontSize: '16',
  };
  
var chart = new google.visualization.ScatterChart(document.getElementById('six'));
chart.draw(data, options);
}


// Chart Eight: Public Charities by Type Overview
function publicfinancesbubble() {
  var data = google.visualization.arrayToDataTable([
    ['Category', 'Revenue', 'Assets', 'Category', 'Total Number'],
    ['Arts',40.6, 127.9, "group", 31429],
    ['Education',354.3, 1128.8, "group", 54214],
    ['Higher education',230.9, 736.3, "group", 2153],
    ['Other education',123.4, 392.5, "group", 52061],
    ['Environment and animals',19.7, 47.8, "group", 14591],
    ['Health',1160.5, 1574.1, "group", 38861],
    ['Hospitals and primary care facilities',977.1, 1281.5, "group", 7113],
    ['Other health care',183.4, 292.6, "group", 31748],
    ['Human services',234.1, 357.1, "group", 110801],
    ['International',38.5, 43.2, "group", 6927],
    ['Other public and social benefit',111.3, 347.1, "group", 37478],
    ['Religion related',19.6, 42.6, "group", 20443]
  ]);
  
  var options = {
      title:'Finances for Reporting Public Charities',
      legend: {position: "top"},
      chartArea:{left: 60, right: 0, width:"100%",height:"900px"},
      annotations: {alwaysOutside: true, stemColor: 'none'},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
      explorer: {maxZoomOut: 1.75,
                  maxZoomIn: .75
      }
    };
    
  var chart = new google.visualization.BubbleChart(document.getElementById('eight'));
  chart.draw(data, options);
  }