
// Load google charts
google.charts.load('current', {'packages':['corechart', 'bar', 'treemap']});

// Draw the the individual charts.
google.charts.setOnLoadCallback(nonprofits);
google.charts.setOnLoadCallback(nonprofitstime);
google.charts.setOnLoadCallback(public);
google.charts.setOnLoadCallback(publictype);
google.charts.setOnLoadCallback(publictypechange);
google.charts.setOnLoadCallback(revenuechange);
google.charts.setOnLoadCallback(assets);

// Chart One: Nonprofits
function nonprofits() {
    var data = google.visualization.arrayToDataTable([
    ['Object', 'Amount', {role: 'annotation'}, {role: 'style'}],
    ['Nonprofits in US', 1561616, "1.56 Million", "color: #062635"],
    ['Restaurants in the US', 647288, "0.6 Million", "color: #696969"],
  ]);

  var options = {
      title:'Nonprofits Registered with the IRS',
      titleTextStyle: {fontSize: 20, color: '#062635'},
      legend: {position: "none"},
      chartArea:{left: 80, right: 0, width:"100%",height:"80%"},
      vAxis: {minValue: 0, maxValue: 1650000, format: "short", title: "Number of Organizations",
      gridlines: {
        color: 'transparent'
    }}, 
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
  ['Year', 'Amount', {role: 'annotation'}, {role: 'style'}, 'Start'],
  ["2005", 1414343, "1.41 Million", "color: #062635", 1000000],
  ["2010", 1493407, "1.49 Million", "color: #062635", 1000000],
  ["2015", 1561616, "1.56 Million", "color: #062635", 1000000]
]);

var options = {
    title:'Nonprofits Registered with the IRS',
    titleTextStyle: {fontSize: 20, color: '#062635'},
    legend: {position: "none"},
    chartArea:{left: 80, right: 0, width:"100%",height:"80%"},
    vAxis: {minValue: 1000000, maxValue: 1650000, format: "short", title: "Number of Organizations",
        gridlines: {
          color: 'transparent'
        }
      }, 
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: { fill:'transparent' },
    fontName: 'Karla', 
    fontSize: '16',
    seriesType: 'bars',
    series: {1: {type: 'line', color: 'black', lineWidth: 1}}
  };
  
var chart = new google.visualization.ColumnChart(document.getElementById('two'));
chart.draw(data, options);
}

// Chart Three: Reporting Public Charities as part of Whole
function public() {
  var data = google.visualization.arrayToDataTable([
    ['Category',                   'Amount',         {role: 'annotation'}, {role: 'style'}],
    ["Registered Nonprofits",       1561616,         "1.56 Million",        '#848081'],
    ["Public Charities",            1088447,         "1.08 Million",        '#fdd870'],
    ["Reporting Public Charities",  314744,          "0.3 Million",         '#1696d2']
  ]);

  var options = {
    title:'Reporting Public Entities as a part of All Nonprofits in 2015',
    titleTextStyle: {fontSize: 20, color: 'white'},
    legend: {position: "none"},
    chartArea:{left: 100, right: 0, width:"100%",height:"80%"},
    annotations: {alwaysOutside: true, stemColor: 'none'},
    backgroundColor: 'transparent',
    colors: ['#1696d2'],
    height: 500,
    bar: {
      groupWidth: '100%'
    },
    hAxis:{
      textStyle: {
        color: "white"
      }
    },
    vAxis: {
      baselineColor: '#CCCCCC',
      format: 'short',
      title: "Number of Organizations",
      viewWindow: {
        min: 0,
        max: 1750000
      },
      gridlines: {
        color: 'transparent'
      },
      titleTextStyle : {
        color: 'white'
      },
      textStyle: {
        color: "white"
      }
    },
    fontName: 'Karla', 
    fontSize: '16',
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('three'));
  chart.draw(data, options);
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
 // Chart 7: Revenue Change from 2005-2015
 function revenuechange() {
  var data = google.visualization.arrayToDataTable([
    ['Category'
    ,'Arts'
    ,'Education'
    ,'Higher education'
    ,'Other education'
    ,'Environment and animals'
    ,'Health'
    ,'Hospitals and primary care facilities'
    ,'Other health care'
    ,'Human services'
    ,'International'
    ,'Other public and social benefit'
    ,'Religion related'
    ],
    ['2005 Revenue'
    ,31.7
    ,251.7
    ,166.3
    ,85.4
    ,13.0
    ,817.2
    ,689.3
    ,127.9
    ,185.3
    ,30.5
    ,82.3
    ,12.3
    ],
    ['2015 Revenue'
    ,40.6
    ,354.3
    ,230.9
    ,123.4
    ,19.7
    ,1160.5
    ,977.1
    ,183.4
    ,234.1
    ,38.5
    ,111.3
    ,19.6
    ]
  ]);
  
  var options = {
      title:'Change in Revenue (2005-2015) by Category',
      titleTextStyle: {fontSize: 20, color: '#062635'},
      legend: {position: "none"},
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
function assets() {
  var data = google.visualization.arrayToDataTable([
    ['Category',                              'Parent',  'Number of Organizations', ],
    ['Public Charities',                                         ,     ,  ],
    ['Arts',                                  'Public Charities',   127.9    ,  ],
    ['Education',                             'Public Charities',   1128.8   ,  ],
    ['Higher education',                      'Public Charities',   736.3    ,  ],
    ['Other education',                       'Public Charities',   392.5    ,  ],
    ['Environment and animals',               'Public Charities',   47.8     ,  ],
    ['Health',                                'Public Charities',   1574.1   ,  ],
    ['Hospitals and primary care facilities', 'Public Charities',   1281.5   ,  ],
    ['Other health care',                     'Public Charities',   292.6    ,  ],
    ['Human services',                        'Public Charities',   357.1    ,  ],
    ['International',                         'Public Charities',   43.2     ,  ],
    ['Other public and social benefit',       'Public Charities',   347.1    ,  ],
    ['Religion related',                      'Public Charities',   42.6     ,  ]
  ]);

  var options = {
      title:'Assets of Reporting Public Charities by Type',
      titleTextStyle: {fontSize: 20, color: '#062635'},
      legend: {position: "none"},
      chartArea:{left: 60, right: 0, width:"100%",height:"80%"},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
      highlightOnMouseOver: true,
      headerHeight: 0,
      minColor: '#a2d4ec',
      midColor: '#1696d2',
      maxColor: '#12719e',
      showScale: true,
      generateTooltip: showFullTooltip
    };
    
  var chart = new google.visualization.TreeMap(document.getElementById('eight'));
  chart.draw(data, options);


  function showFullTooltip(row, size, value) {
    return '<div style="background:#d2d2d2; padding:10px; border-style:none">' +
           '<span style="font-family:Karla">' + data.getValue(row, 0) + ': ' + data.getValue(row, 2);
  }
}



















// Responsive Charts 

$(window).resize(function(){
  nonprofits();
  nonprofitstime();
  public();
  reportingpublic();
  publictype();
  publictypechange();
  revenuechange();
  assets();
		});


    //Padding: https://stackoverflow.com/questions/9661456/remove-padding-or-margins-from-google-charts
    //All configs: https://developers.google.com/chart/interactive/docs/gallery/columnchart?csw=1#Configuration_Options
    // Column Roles: https://developers.google.com/chart/interactive/docs/roles


          //animation: {
      //  duration: 1000,
      //  easing: 'linear',
      //  startup: true
      //}