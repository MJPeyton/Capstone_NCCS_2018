
// Load google charts
google.charts.load('current', {'packages':['corechart', 'bar', 'treemap']});

// Draw the the individual charts.
google.charts.setOnLoadCallback(nonprofits);
google.charts.setOnLoadCallback(nonprofitstime);
google.charts.setOnLoadCallback(public);
google.charts.setOnLoadCallback(reportingpublic);
google.charts.setOnLoadCallback(publictype);
google.charts.setOnLoadCallback(publictypechange);
google.charts.setOnLoadCallback(revenuechange);
google.charts.setOnLoadCallback(assetchange);
google.charts.setOnLoadCallback(orgtree);

// Chart One: Nonprofits
function nonprofits() {
    var data = google.visualization.arrayToDataTable([
    ['Object', 'Amount', {role: 'annotation'}, {role: 'style'}],
    ['Nonprofits in US', 1561616, "1.56 Million", "color: #062635"],
    ['Something Else', 1300000, "1.3 Million", "color: #696969"],
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


// Chart 7-1: Revenue Change from 2005-2015
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
    
  var chart = new google.visualization.LineChart(document.getElementById('seven_one'));
  chart.draw(data, options);
  }

// Chart 7-2: Asset Change from 2005-2015
function assetchange() {
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
    ['2005 Assets'
    ,98.3
    ,783.1
    ,527.6
    ,255.5
    ,32.0
    ,1000.8
    ,790.1
    ,210.7
    ,274.3
    ,28.5
    ,262.5
    ,26.9
    ],
    ['2015 Assets'
    ,127.9
    ,1128.8
    ,736.3
    ,392.5
    ,47.8
    ,1574.1
    ,1281.5
    ,292.6
    ,357.1
    ,43.2
    ,347.1
    ,42.6
    ]
  ]);
  
  var options = {
      title:'Change in Assets (2005-2015) by Category',
      titleTextStyle: {fontSize: 20, color: '#062635'},
      legend: {position: "none"},
      chartArea:{left: 80, right: 0, width:"100%",height:"80%"},
      annotations: {alwaysOutside: true, stemColor: 'none'},
      backgroundColor: { fill:'transparent' },
      fontName: 'Karla', 
      fontSize: '16',
      vAxis: {title: "$ Billions"},
    };
    
  var chart = new google.visualization.LineChart(document.getElementById('seven_two'));
  chart.draw(data, options);
  }


// Chart Eight: Public Charities by Type Overview
function orgtree() {
  var data = google.visualization.arrayToDataTable([
    ['Category',                              'Parent',  'Number of Organizations', ],
    ['Public Charities',                                         ,    314744 ,  ],
    ['Arts',                                  'Public Charities',     31429  ,  ],
    ['Education',                             'Public Charities',     54214  ,  ],
    ['Higher education',                      'Public Charities',     2153   ,  ],
    ['Other education',                       'Public Charities',     52061  ,  ],
    ['Environment and animals',               'Public Charities',     14591  ,  ],
    ['Health',                                'Public Charities',     38861  ,  ],
    ['Hospitals and primary care facilities', 'Public Charities',     7113   ,  ],
    ['Other health care',                     'Public Charities',     31748  ,  ],
    ['Human services',                        'Public Charities',     110801 ,  ],
    ['International',                         'Public Charities',     6927   ,  ],
    ['Other public and social benefit',       'Public Charities',     37478  ,  ],
    ['Religion related',                      'Public Charities',     20443  ,  ]
  ]);

  var options = {
      title:'Reporting Public Charities by Type',
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
  assetchange();
  orgtree();
		});


    //Padding: https://stackoverflow.com/questions/9661456/remove-padding-or-margins-from-google-charts
    //All configs: https://developers.google.com/chart/interactive/docs/gallery/columnchart?csw=1#Configuration_Options
    // Column Roles: https://developers.google.com/chart/interactive/docs/roles


          //animation: {
      //  duration: 1000,
      //  easing: 'linear',
      //  startup: true
      //}