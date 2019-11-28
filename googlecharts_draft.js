
// Load google charts
google.charts.load('current', {'packages':['corechart', 'bar']});

// Draw the the individual charts.
google.charts.setOnLoadCallback(nonprofits);
google.charts.setOnLoadCallback(nonprofitstime);
google.charts.setOnLoadCallback(public);
google.charts.setOnLoadCallback(reportingpublic);
google.charts.setOnLoadCallback(publictype);
google.charts.setOnLoadCallback(publictypechange);
google.charts.setOnLoadCallback(publicfinances);
google.charts.setOnLoadCallback(publicfinancesbubble);

// Chart One: Nonprofits
function nonprofits() {
    var data = google.visualization.arrayToDataTable([
    ['Object', 'Amount', {role: 'annotation'}, {role: 'style'}],
    ['Nonprofits in US', 1561616, "1.56 Million", "color: #062635"],
    ['Something Else', 1300000, "1.3 Million", "color: #db2b27"],
  ]);

  var options = {
      title:'Nonprofits Registered with the IRS',
      titleTextStyle: {fontSize: 20, color: '#062635'},
      legend: {position: "none"},
      chartArea:{left: 80, right: 0, width:"100%",height:"80%"},
      vAxis: {minValue: 0, maxValue: 1650000, format: "short", title: "Number of Organizations"}, 
      annotations: {alwaysOutside: true, stemColor: 'none'},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
    };
    
  var chart = new google.visualization.ColumnChart(document.getElementById('one'));
  chart.draw(data, options);
}

// Chart Two: Nonprofits Over Time
function nonprofitstime() {
  var data = google.visualization.arrayToDataTable([
  ['Year', 'Amount', {role: 'annotation'}, {role: 'style'}],
  ["2005", 1414343, "1.41 Million", "color: #062635"],
  ["2010", 1493407, "1.49 Million", "color: #062635"],
  ["2015", 1561616, "1.56 Million", "color: #062635"]
]);

var options = {
    title:'Nonprofits Registered with the IRS',
    titleTextStyle: {fontSize: 20, color: '#062635'},
    legend: {position: "none"},
    chartArea:{left: 80, right: 0, width:"100%",height:"80%"},
    vAxis: {minValue: 1000000, maxValue: 1650000, format: "short", title: "Number of Organizations"}, //Set min to 0?
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: { fill:'transparent' },
    fontName: 'Karla', 
    fontSize: '16',
  };
  
var chart = new google.visualization.ColumnChart(document.getElementById('two'));
chart.draw(data, options);
}

// Chart Three: Public Charities
function public() {
  var data0 = google.visualization.arrayToDataTable([
    ['Year', 'All Nonprofits', {role: 'annotation'}],
    ["2005", 1414343,          "1.41 Million"],
    ["2010", 1493407,          "1.49 Million"],
    ["2015", 1561616,          "1.56 Million"]
  ]);

  var data1 = google.visualization.arrayToDataTable([
    ['Year', 'Public Charities', {role: 'annotation'}],
    ["2005", 847946,              "850K"],
    ["2010", 979883,              "980K"],
    ["2015", 1088447,             "1,088K"]
  ]);
  
  var options0 = {
    title:'Public Entities as a part of All Nonprofits',
    titleTextStyle: {fontSize: 20, color: 'none'},
    chartArea:{left: 100, right: 0, width:"100%",height:"80%"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: 'transparent',
    colors: ['#062635'],
    height: 500,
    legend: {
      position: 'top'
    },
    vAxis: {
      format: 'short',
      title: "Number of Organizations",
      viewWindow: {
        min: 0,
        max: 1750000
      }
    },
    fontName: 'Karla', 
    fontSize: '16',
  };

  var options1 = {
    title:'Public Entities as a part of All Nonprofits',
    titleTextStyle: {fontSize: 20, color: '#062635'},
    chartArea:{left: 100, right: 0, width:"100%",height:"80%"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    vAxis: {format: "short"},
    backgroundColor: 'transparent',
    colors: ['#fdbf11'],
    height: 500,
    legend: {
      position: 'top',
      alignment: 'center'
    },
    vAxis: {
      format: 'short',
      ticks: [{v: 0, f: ''}],
      viewWindow: {
        min: 0,
        max: 1750000
      }
    },
    fontName: 'Karla', 
    fontSize: '16',
  };

  var chart1 = new google.visualization.ColumnChart(document.getElementById('three_0'));
  var chart2 = new google.visualization.ColumnChart(document.getElementById('three_1'));

  chart1.draw(data0, options0);
  chart2.draw(data1, options1);
}

// Chart four: Reporting Public Charities
function reportingpublic() {
  var data0 = google.visualization.arrayToDataTable([
    ['Year', 'All Nonprofits', {role: 'annotation'}],
    ["2005", 1414343,          "1.41 Million"],
    ["2010", 1493407,          "1.49 Million"],
    ["2015", 1561616,          "1.56 Million"]
  ]);

  var data1 = google.visualization.arrayToDataTable([
    ['Year', 'Public Charities', {role: 'annotation'}],
    ["2005", 847946,              "850K"],
    ["2010", 979883,              "980K"],
    ["2015", 1088447,             "1,088K"]
  ]);

  var data2 = google.visualization.arrayToDataTable([
    ['Year', 'Reporting Public Charities', {role: 'annotation'}],
    ["2005", 312778,              "313K"],
    ["2010", 293265,              "293K"],
    ["2015", 314744,             "315K"]
  ]);
  
  var options0 = {
    title:'Reporting Public Entities as a part of All Nonprofits',
    titleTextStyle: {fontSize: 20, color: '#062635'},
    chartArea:{left: 100, right: 0, width:"100%",height:"80%"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: 'transparent',
    colors: ['#062635'],
    height: 500,
    legend: {
      position: 'top'
    },
    vAxis: {
      format: 'short',
      viewWindow: {
        min: 0,
        max: 1750000
      }
    },
    fontName: 'Karla', 
    fontSize: '16',
  };

  var options1 = {
    title:'Reporting Public Entities as a part of All Nonprofits',
    titleTextStyle: {fontSize: 20, color: 'none'},
    chartArea:{left: 100, right: 0, width:"100%",height:"80%"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    vAxis: {format: "short"},
    backgroundColor: 'transparent',
    colors: ['#fdbf11'],
    height: 500,
    legend: {
      position: 'top',
      alignment: 'center'
    },
    vAxis: {
      format: 'short',
      ticks: [{v: 0, f: ''}],
      viewWindow: {
        min: 0,
        max: 1750000
      }
    },
    fontName: 'Karla', 
    fontSize: '16',
  };

  var options2 = {
    title:'Reporting Public Entities as a part of All Nonprofits',
    titleTextStyle: {fontSize: 20, color: 'none'},
    chartArea:{left: 100, right: 0, width:"100%",height:"80%"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    vAxis: {format: "short"},
    backgroundColor: 'transparent',
    colors: ['#1696d2'],
    height: 500,
    legend: {
      position: 'top',
      alignment: 'end'
    },
    vAxis: {
      format: 'short',
      ticks: [{v: 0, f: ''}],
      viewWindow: {
        min: 0,
        max: 1750000
      }
    },
    fontName: 'Karla', 
    fontSize: '16',
  };


  var chart1 = new google.visualization.ColumnChart(document.getElementById('four_0'));
  var chart2 = new google.visualization.ColumnChart(document.getElementById('four_1'));
  var chart3 = new google.visualization.ColumnChart(document.getElementById('four_2'));

  chart1.draw(data0, options0);
  chart2.draw(data1, options1);
  chart3.draw(data2, options2);
}

// Chart Five: Public Charities by Type
function publictype() {
  var data = google.visualization.arrayToDataTable([
    ['Type', 'Number', {role: 'annotation'}, {role: 'style'}],
    ["Human Services",                  110801,   "111K",     "color: #1696d2"],
    ["Education",                       54214,    "54K",      "color: #1696d2"],
    ["Other Education",                 52061,    "52K",      "color: #1696d2"],
    ["Health",                          38861,    "39K",      "color: #1696d2"],
    ["Other public and social benefit", 37478,    "37K",      "color: #1696d2"],
    ["Other health care",               31748,    "32K",      "color: #1696d2"],
    ["Arts",                            31429,    "31K",      "color: #1696d2"],
    ["Religion related",                20443,    "20K",      "color: #1696d2"],
    ["Envionment and animals",          14591,    "15K",      "color: #1696d2"],
    ["Hospitals/primary care",          7113,     "7K",       "color: #1696d2"],
    ["International",                   6927,     "7K",       "color: #1696d2"],
    ["Higher Education",                2153,     "2K",       "color: #1696d2"]
  ]);
  

var options = {
    title:'Nonprofits Registered with the IRS',
    titleTextStyle: {fontSize: 20, color: '#062635'},
    legend: {position: "none"},
    chartArea:{left: 250, right: 0, bottom: 75, width:"100%",height:"80%"},
    vAxis: {minValue: 1000000, maxValue: 1650000, format: "short"}, //Set min to 0?
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: { fill:'transparent' },
    fontName: 'Karla', 
    fontSize: '16',
    hAxis: {title: "Number of Organizations in 2015"}
  };
  
var chart = new google.visualization.BarChart(document.getElementById('five'));
chart.draw(data, options);
}

// Chart Six: Public Charities by Type Change
function publictypechange() {
  var data = google.visualization.arrayToDataTable([
    ['Type',                                  '2005',  '2015',    {role: 'annotation'}, {role: 'style'}],
    ["International",                         0,       17.8,     "17.8%",     "color: #55B748"],
    ["Higher Education",                      0,       13.2,     "13.2%",     "color: #55B748"],
    ["Envionment and animals",                0,       12.8,     "12.8%",     "color: #55B748"],
    ["Religion related",                      0,       8.2,      "8.2%",      "color: #55B748"],
    ["Human Services",                        0,       4.4,      "4.4%",      "color: #55B748"],
    ["All public charities",                  0,       0.6,      "0.6%",      "color: #1696d2"],
    ["Hospitals/primary care",                0,       -0.5,     "-0.5%",     "color: #DB2B27"],
    ["Other public and social benefit",       0,       -2.4,     "-2.4%",     "color: #DB2B27"],
    ["Education",                             0,       -3.3,     "-3.3%",     "color: #DB2B27"],
    ["Other Education",                       0,       -4,       "-4%",       "color: #DB2B27"],
    ["Health",                                0,       -4.9,     "-4.9%",     "color: #DB2B27"],
    ["Other health care",                     0,       -5.9,     "-5.9%",     "color: #DB2B27"],
    ["Arts",                                  0,       -9.7,     "-9.7%",     "color: #DB2B27"]
  ]);
  
  var options = {
      title:'Change in Number of Reporting Publich Charities from 2005 to 2015',
      titleTextStyle: {fontSize: 20, color: '#062635'},
      legend: {position: "none"},
      chartArea:{left: 250, right: 20, bottom: 75, width:"100%",height:"80%"},
      bar: {groupWidth: "100%"},
      annotations: {alwaysOutside: true, stemColor: 'none'},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
      hAxis: {title: "% Change in Number of Organizations from 2005-2010"}
    };
    
  var chart = new google.visualization.BarChart(document.getElementById('six'));
  chart.draw(data, options);
  }

// Chart Seven: Public Charities Finance Overview 
function publicfinances() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Revenue', 'Expenses', 'Assets'],
    ['2005', 1424, 1307.7, 2506.4],
    ['2010', 1641, 1576.9, 2904.1],
    ['2015', 1978.6, 1838.9, 3668.6],
  ]);
  
  var options = {
      title:'Change in Finances for Reporting Public Charities',
      titleTextStyle: {fontSize: 20, color: '#062635'},
      legend: {position: "top"},
      chartArea:{left: 80, right: 0, width:"100%",height:"80%"},
      annotations: {alwaysOutside: true, stemColor: 'none'},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
      vAxis: {title: "$ Billions"},
    };
    
  var chart = new google.visualization.LineChart(document.getElementById('seven'));
  chart.draw(data, options);
  }


// Chart Eight: Public Charities by Type Overview
function publicfinancesbubble() {
  var data = google.visualization.arrayToDataTable([
    ['Category', 'Revenue', 'Assets', 'Category', 'Number of Organizations'],
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
      titleTextStyle: {fontSize: 20, color: '#062635'},
      legend: {position: "top"},
      chartArea:{left: 60, right: 0, width:"100%",height:"80%"},
      annotations: {alwaysOutside: true, stemColor: 'none'},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
      explorer: {maxZoomOut: 1.5, maxZoomIn: .25},
      vAxis: {title: "Revenue ($ Billions)"},
      hAxis: {title: "Assets ($ Billions)"},
      sizeAxis: {minSize: 5, maxSize: 40}
    };
    
  var chart = new google.visualization.BubbleChart(document.getElementById('eight'));
  chart.draw(data, options);
  }



















// Responsive Charts 

$(window).resize(function(){
  nonprofits();
  nonprofitstime();
  public();
  reportingpublic();
  publictype();
  publictypechange();
  publicfinances();
  publicfinancesbubble();
		});


    //Padding: https://stackoverflow.com/questions/9661456/remove-padding-or-margins-from-google-charts
    //All configs: https://developers.google.com/chart/interactive/docs/gallery/columnchart?csw=1#Configuration_Options
    // Column Roles: https://developers.google.com/chart/interactive/docs/roles


          //animation: {
      //  duration: 1000,
      //  easing: 'linear',
      //  startup: true
      //}