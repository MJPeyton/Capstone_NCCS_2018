
// Load google charts
google.charts.load('current', {'packages':['corechart', 'bar']});

// Draw the the individual charts.
google.charts.setOnLoadCallback(nonprofits);
google.charts.setOnLoadCallback(nonprofitstime);
google.charts.setOnLoadCallback(public);
google.charts.setOnLoadCallback(reportingpublic);
google.charts.setOnLoadCallback(publictype);
google.charts.setOnLoadCallback(publictypechange);

// Chart One: Nonprofits
function nonprofits() {
    var data = google.visualization.arrayToDataTable([
    ['Object', 'Amount', {role: 'annotation'}, {role: 'style'}],
    ['Nonprofits in US', 1561616, "1.56 Million", "color: black"],
    ['Something Else', 1300000, "1.3 Million", "color: blue"],
  ]);

  var options = {
      title:'Nonprofits Registered with the IRS',
      legend: {position: "none"},
      chartArea:{left: 50, right: 0, width:"100%",height:"500px"},
      vAxis: {minValue: 0, format: "short"}, 
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
  ["2005", 1414343, "1.41 Million", "color: black"],
  ["2010", 1493407, "1.49 Million", "color: black"],
  ["2015", 1561616, "1.56 Million", "color: black"]
]);

var options = {
    title:'Nonprofits Registered with the IRS',
    legend: {position: "none"},
    chartArea:{left: 50, right: 0, width:"100%",height:"500px"},
    vAxis: {minValue: 1000000, maxValue: 1650000, format: "short"}, //Set min to 0?
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
    chartArea:{left: 100, right: 0, width:"100%",height:"500px"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: 'transparent',
    colors: ['black'],
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
    chartArea:{left: 100, right: 0, width:"100%",height:"500px"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    vAxis: {format: "short"},
    backgroundColor: 'transparent',
    colors: ['red'],
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
    chartArea:{left: 100, right: 0, width:"100%",height:"500px"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: 'transparent',
    colors: ['black'],
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
    chartArea:{left: 100, right: 0, width:"100%",height:"500px"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    vAxis: {format: "short"},
    backgroundColor: 'transparent',
    colors: ['red'],
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
    chartArea:{left: 100, right: 0, width:"100%",height:"500px"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    vAxis: {format: "short"},
    backgroundColor: 'transparent',
    colors: ['blue'],
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
    ["Human Services",                  110801,   "111K",     "color: black"],
    ["Education",                       54214,    "54K",      "color: black"],
    ["Other Education",                 52061,    "52K",      "color: black"],
    ["Health",                          38861,    "39K",      "color: black"],
    ["Other public and social benefit", 37478,    "37K",      "color: black"],
    ["Other health care",               31748,    "32K",      "color: black"],
    ["Arts",                            31429,    "31K",      "color: black"],
    ["Religion related",                20443,    "20K",      "color: black"],
    ["Envionment and animals",          14591,    "15K",      "color: black"],
    ["Hospitals/primary care",          7113,     "7K",       "color: black"],
    ["International",                   6927,     "7K",       "color: black"],
    ["Higher Education",                2153,     "2K",       "color: black"]
  ]);
  

var options = {
    title:'Nonprofits Registered with the IRS',
    legend: {position: "none"},
    chartArea:{left: 250, right: 0, width:"100%",height:"500px"},
    vAxis: {minValue: 1000000, maxValue: 1650000, format: "short"}, //Set min to 0?
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: { fill:'transparent' },
    fontName: 'Karla', 
    fontSize: '16',
  };
  
var chart = new google.visualization.BarChart(document.getElementById('five'));
chart.draw(data, options);
}

// Chart Six: Public Charities by Type Change
function publictypechange() {
  var data = google.visualization.arrayToDataTable([
    ['Type',                                  '2005',  '2015',    {role: 'annotation'}, {role: 'style'}],
    ["International",                         0,       17.8,     "17.8%",     "color: green"],
    ["Higher Education",                      0,       13.2,     "13.2%",     "color: green"],
    ["Envionment and animals",                0,       12.8,     "12.8%",     "color: green"],
    ["Religion related",                      0,       8.2,      "8.2%",      "color: green"],
    ["Human Services",                        0,       4.4,      "4.4%",      "color: green"],
    ["All public charities",                  0,       0.6,      "0.6%",      "color: blue"],
    ["Hospitals/primary care",                0,       -0.5,     "-0.5%",     "color: red"],
    ["Other public and social benefit",       0,       -2.4,     "-2.4%",     "color: red"],
    ["Education",                             0,       -3.3,     "-3.3%",     "color: red"],
    ["Other Education",                       0,       -4,       "-4%",       "color: red"],
    ["Health",                                0,       -4.9,     "-4.9%",     "color: red"],
    ["Other health care",                     0,       -5.9,     "-5.9%",     "color: red"],
    ["Arts",                                  0,       -9.7,     "-9.7%",     "color: red"]
  ]);
  
  var options = {
      title:'Change in Number of Reporting Publich Charities from 2005 to 2015',
      legend: {position: "none"},
      chartArea:{left: 250, right: 20, width:"100%",height:"500px"},
      annotations: {alwaysOutside: true, stemColor: 'none'},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
    };
    
  var chart = new google.visualization.BarChart(document.getElementById('six'));
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
		});


    //Padding: https://stackoverflow.com/questions/9661456/remove-padding-or-margins-from-google-charts
    //All configs: https://developers.google.com/chart/interactive/docs/gallery/columnchart?csw=1#Configuration_Options
    // Column Roles: https://developers.google.com/chart/interactive/docs/roles


          //animation: {
      //  duration: 1000,
      //  easing: 'linear',
      //  startup: true
      //}