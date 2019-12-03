


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



  // Chart Seven: Public Charities Finance Overview 
function publicfinances() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Revenue', 'Expenses', 'Assets'],
    ['2005', 1424, 1307.7, 2506.4],

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
    [{role:'annotation'}
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