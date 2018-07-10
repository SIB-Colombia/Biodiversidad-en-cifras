//funciones para ver referencias e info

function showDiv2(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .parent()
    .parent()
    .next('.referencia')
    .css('display', 'block');
}
function showDiv(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .parent()
    .next('.referencia')
    .css('display', 'block');
}
function showDiv0(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .next('.referencia')
    .css('display', 'block');
}
function showDiv2nd(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .parent()
    .nextAll('.2nd')
    .css('display', 'block');
}
function showDiv3rd(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .parent()
    .nextAll('.3rd')
    .css('display', 'block');
}
function showDiv4th(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .parent()
    .nextAll('.4th')
    .css('display', 'block');
}
function showDiv5th(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .parent()
    .nextAll('.5th')
    .css('display', 'block');
}
function showDiv6th(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .parent()
    .nextAll('.6th')
    .css('display', 'block');
}

function hideDiv(currentElement) {
  $(currentElement)
    .parent()
    .css('display', 'none');
}
function hideDiv2(currentElement) {
  $(currentElement)
    .parent()
    .parent()
    .parent()
    .css('display', 'none');
}

//funciones para graficas de especies y de tercer nivel

function showDivGraph(currentElement) {
  $('.grapharea').css('display', 'none');
  $(currentElement)
    .parent()
    .next('.grapharea')
    .css('display', 'block');

  // pie de literatura especies mamiferos

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(ChartMam1);

  function ChartMam1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 528]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam1b);

  function ChartMam1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 528],
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam2);

  function ChartMam2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 7],
      ['En peligro', 10],
      ['Vulnerable', 25]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam2b);

  function ChartMam2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        3,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 3</br>Registros: 347</div>'
      ],
      [
        'En peligro SiB',
        10,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 10</br>Registros: 97</div>'
      ],
      [
        'Vulnerable SiB',
        21,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 21</br>Registros: 1.245</div>'
      ],
      ['Especies sin datos SiB Colombia', 8, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam3);

  function ChartMam3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 31],
      ['Apéndice II', 65],
      ['Apéndice III', 11]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam3b);

  function ChartMam3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        27,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 27</br>Registros: 1.830</div>'
      ],
      [
        'Apéndice II en SiB',
        48,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 48</br>Registros: 3.504</div>'
      ],
      [
        'Apéndice III en SiB',
        11,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 11</br>Registros: 2.947</div>'
      ],
      ['Especies sin datos SiB Colombia', 21, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies animales

  google.charts.setOnLoadCallback(Chartanimales1);

  function Chartanimales1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 81171]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanimales1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanimales1b);

  function Chartanimales1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 12277],
      ['Especies sin datos SiB Colombia', 68894]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanimales1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanimales2);

  function Chartanimales2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 62],
      ['En peligro', 162],
      ['Vulnerable', 264]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanimales2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanimales2b);

  function Chartanimales2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        46,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 46</br>Registros: 5.103</div>'
      ],
      [
        'En peligro SiB',
        110,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 110</br>Registros: 4.801</div>'
      ],
      [
        'Vulnerable SiB',
        204,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 204</br>Registros: 12.877</div>'
      ],
      ['Especies sin datos SiB Colombia', 128, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanimales2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanimales3);

  function Chartanimales3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 53],
      ['Apéndice II', 596],
      ['Apéndice III', 31]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanimales3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanimales3b);

  function Chartanimales3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        43,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 43</br>Registros: 3.544</div>'
      ],
      [
        'Apéndice II en SiB',
        436,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 436</br>Registros: 61.784</div>'
      ],
      [
        'Apéndice III en SiB',
        29,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 29</br>Registros: 8.007</div>'
      ],
      ['Especies sin datos SiB Colombia', 172, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanimales3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies plantas

  google.charts.setOnLoadCallback(Chartplantas1);

  function Chartplantas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 28000]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutplantas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartplantas1b);

  function Chartplantas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 23036],
      ['Especies sin datos SiB Colombia', 4964]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutplantas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartplantas2);

  function Chartplantas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 120],
      ['En peligro', 269],
      ['Vulnerable', 425]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutplantas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartplantas2b);

  function Chartplantas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        71,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 71</br>Registros: 744</div>'
      ],
      [
        'En peligro SiB',
        176,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 176</br>Registros: 4.580</div>'
      ],
      [
        'Vulnerable SiB',
        253,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 253</br>Registros: 9.968</div>'
      ],
      ['Especies sin datos SiB Colombia', 314, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutplantas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartplantas3);

  function Chartplantas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 7],
      ['Apéndice II', 2868],
      ['Apéndice III', 3]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutplantas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartplantas3b);

  function Chartplantas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        5,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 5</br>Registros: 32</div>'
      ],
      [
        'Apéndice II en SiB',
        835,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 835</br>Registros: 27.610</div>'
      ],
      [
        'Apéndice III en SiB',
        2,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 2</br>Registros: 237</div>'
      ],
      ['Especies sin datos SiB Colombia', 2036, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutplantas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies aves

  google.charts.setOnLoadCallback(Chartave1);

  function Chartave1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1909]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave1b);

  function Chartave1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1861],
      ['Especies sin datos SiB Colombia', 48]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave2);

  function Chartave2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 17],
      ['En peligro', 56],
      ['Vulnerable', 67]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave2b);

  function Chartave2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        14,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 14</br>Registros: 688</div>'
      ],
      [
        'En peligro SiB',
        47,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 47</br>Registros: 3.143</div>'
      ],
      [
        'Vulnerable SiB',
        59,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 59</br>Registros: 2.328</div>'
      ],
      ['Especies sin datos SiB Colombia', 20, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave3);

  function Chartave3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 10],
      ['Apéndice II', 306],
      ['Apéndice III', 14]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave3b);

  function Chartave3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        9,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 9</br>Registros: 753</div>'
      ],
      [
        'Apéndice II en SiB',
        268,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 268</br>Registros: 51.890</div>'
      ],
      [
        'Apéndice III en SiB',
        13,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 13</br>Registros: 4.685</div>'
      ],
      ['Especies sin datos SiB Colombia', 40, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies anfibios

  google.charts.setOnLoadCallback(Chartanfibio1);

  function Chartanfibio1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 814]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio1b);

  function Chartanfibio1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 657],
      ['Especies sin datos SiB Colombia', 157]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio2);

  function Chartanfibio2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 14],
      ['En peligro', 26],
      ['Vulnerable', 15]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio2b);

  function Chartanfibio2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        13,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 13</br>Registros: 361</div>'
      ],
      [
        'En peligro SiB',
        23,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 23</br>Registros: 415</div>'
      ],
      [
        'Vulnerable SiB',
        14,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 14</br>Registros: 852</div>'
      ],
      ['Especies sin datos SiB Colombia', 5, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio3);

  function Chartanfibio3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 38],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio3b);

  function Chartanfibio3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        27,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 27</br>Registros: 2.672</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 11, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies reptiles

  google.charts.setOnLoadCallback(Chartreptil1);

  function Chartreptil1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 537]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil1b);

  function Chartreptil1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 534],
      ['Especies sin datos SiB Colombia', 3]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil2);

  function Chartreptil2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 11],
      ['En peligro', 16],
      ['Vulnerable', 17]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil2b);

  function Chartreptil2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        9,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 9</br>Registros: 1.611</div>'
      ],
      [
        'En peligro SiB',
        14,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 14</br>Registros: 972</div>'
      ],
      [
        'Vulnerable SiB',
        17,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 17</br>Registros: 819</div>'
      ],
      ['Especies sin datos SiB Colombia', 8, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil3);

  function Chartreptil3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 9],
      ['Apéndice II', 28],
      ['Apéndice III', 2]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil3b);

  function Chartreptil3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        7,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 7</br>Registros: 961</div>'
      ],
      [
        'Apéndice II en SiB',
        28,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 28</br>Registros: 3.180</div>'
      ],
      [
        'Apéndice III en SiB',
        2,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 2</br>Registros: 156</div>'
      ],
      ['Especies sin datos SiB Colombia', 2, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies peces

  google.charts.setOnLoadCallback(Chartpeces1);

  function Chartpeces1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 4076]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces1b);

  function Chartpeces1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 2759],
      ['Especies sin datos SiB Colombia', 1317]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces2);

  function Chartpeces2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 7],
      ['En peligro', 10],
      ['Vulnerable', 92]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces2b);

  function Chartpeces2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        4,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 4</br>Registros: 2.069</div>'
      ],
      [
        'En peligro SiB',
        8,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 8</br>Registros: 156</div>'
      ],
      [
        'Vulnerable SiB',
        80,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 80</br>Registros: 3.196</div>'
      ],
      ['Especies sin datos SiB Colombia', 17, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces3);

  function Chartpeces3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 3],
      ['Apéndice II', 17],
      ['Apéndice III', 3]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces3b);

  function Chartpeces3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        13,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 13</br>Registros: 20</div>'
      ],
      [
        'Apéndice III en SiB',
        3,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 3</br>Registros: 219</div>'
      ],
      ['Especies sin datos SiB Colombia', 7, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies insectos

  google.charts.setOnLoadCallback(Chartinsecto1);

  function Chartinsecto1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 65000]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto1b);

  function Chartinsecto1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 4170],
      ['Especies sin datos SiB Colombia', 60830]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto2);

  function Chartinsecto2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 5],
      ['En peligro', 15],
      ['Vulnerable', 16]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto2b);

  function Chartinsecto2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        2,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 2</br>Registros: 24</div>'
      ],
      [
        'En peligro SiB',
        1,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
      ],
      [
        'Vulnerable SiB',
        2,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 2</br>Registros: 4</div>'
      ],
      ['Especies sin datos SiB Colombia', 31, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto3);

  function Chartinsecto3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto3b);

  function Chartinsecto3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies aracnidos

  google.charts.setOnLoadCallback(Chartaracnidos1);

  function Chartaracnidos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1385]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos1b);

  function Chartaracnidos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 91],
      ['Especies sin datos SiB Colombia', 1294]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos2);

  function Chartaracnidos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 3],
      ['Vulnerable', 5]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos2b);

  function Chartaracnidos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        1,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 1</br>Registros: 61</div>'
      ],
      ['Especies sin datos SiB Colombia', 7, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos3);

  function Chartaracnidos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos3b);

  function Chartaracnidos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies moluscos

  google.charts.setOnLoadCallback(Chartmolusco1);

  function Chartmolusco1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1818]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco1b);

  function Chartmolusco1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 785],
      ['Especies sin datos SiB Colombia', 1033]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco2);

  function Chartmolusco2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 3],
      ['Vulnerable', 14]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco2b);

  function Chartmolusco2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        8,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 8</br>Registros: 331</div>'
      ],
      ['Especies sin datos SiB Colombia', 9, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco3);

  function Chartmolusco3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 1],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco3b);

  function Chartmolusco3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 1, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies decápodos

  google.charts.setOnLoadCallback(Chartdecapodo1);

  function Chartdecapodo1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1849]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo1b);

  function Chartdecapodo1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 429],
      ['Especies sin datos SiB Colombia', 1420]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo2);

  function Chartdecapodo2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 25],
      ['Vulnerable', 8]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo2b);

  function Chartdecapodo2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        6,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 6</br>Registros: 12</div>'
      ],
      [
        'Vulnerable SiB',
        3,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 3</br>Registros: 16</div>'
      ],
      ['Especies sin datos SiB Colombia', 24, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo3);

  function Chartdecapodo3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo3b);

  function Chartdecapodo3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies equinodermos

  google.charts.setOnLoadCallback(Chartequinodermo1);

  function Chartequinodermo1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 394]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo1b);

  function Chartequinodermo1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 330],
      ['Especies sin datos SiB Colombia', 64]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo2);

  function Chartequinodermo2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo2b);

  function Chartequinodermo2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo3);

  function Chartequinodermo3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 1]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo3b);

  function Chartequinodermo3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 1, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies esponja marina

  google.charts.setOnLoadCallback(Chartesponjamarina1);

  function Chartesponjamarina1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 142]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina1b);

  function Chartesponjamarina1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 134],
      ['Especies sin datos SiB Colombia', 8]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina2);

  function Chartesponjamarina2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina2b);

  function Chartesponjamarina2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina3);

  function Chartesponjamarina3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 1]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina3b);

  function Chartesponjamarina3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 1, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies corales afines

  google.charts.setOnLoadCallback(Chartcoralesafines1);

  function Chartcoralesafines1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 153]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines1b);

  function Chartcoralesafines1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 153],
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines2);

  function Chartcoralesafines2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 1],
      ['En peligro', 1],
      ['Vulnerable', 4]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines2b);

  function Chartcoralesafines2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        1,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 1</br>Registros: 3</div>'
      ],
      [
        'En peligro SiB',
        1,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 5</div>'
      ],
      [
        'Vulnerable SiB',
        3,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 3</br>Registros: 23</div>'
      ],
      ['Especies sin datos SiB Colombia', 1, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines3);

  function Chartcoralesafines3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 119],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines3b);

  function Chartcoralesafines3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        52,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 52</br>Registros: 480</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 67, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies orquideas

  google.charts.setOnLoadCallback(Chartorquideas1);

  function Chartorquideas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 4270]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas1b);

  function Chartorquideas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1725],
      ['Especies sin datos SiB Colombia', 2545]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas2);

  function Chartorquideas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 6],
      ['En peligro', 64],
      ['Vulnerable', 137]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas2b);

  function Chartorquideas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        2,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 2</br>Registros: 13</div>'
      ],
      [
        'En peligro SiB',
        36,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 36</br>Registros: 176</div>'
      ],
      [
        'Vulnerable SiB',
        72,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 72</br>Registros: 253</div>'
      ],
      ['Especies sin datos SiB Colombia', 97, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas3);

  function Chartorquideas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 6],
      ['Apéndice II', 2721],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas3b);

  function Chartorquideas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        4,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 4</br>Registros: 31</div>'
      ],
      [
        'Apéndice II en SiB',
        744,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 744</br>Registros: 4.536</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 1979, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies magnolias y afines

  google.charts.setOnLoadCallback(Chartmagnolias1);

  function Chartmagnolias1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 114]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias1b);

  function Chartmagnolias1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 114],
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias2);

  function Chartmagnolias2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 15],
      ['En peligro', 20],
      ['Vulnerable', 10]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias2b);

  function Chartmagnolias2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        13,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 13</br>Registros: 96</div>'
      ],
      [
        'En peligro SiB',
        19,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 19</br>Registros: 208</div>'
      ],
      [
        'Vulnerable SiB',
        10,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 10</br>Registros: 4.966</div>'
      ],
      ['Especies sin datos SiB Colombia', 3, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias3);

  function Chartmagnolias3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias3b);

  function Chartmagnolias3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies bromelias

  google.charts.setOnLoadCallback(Chartbromelias1);

  function Chartbromelias1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1024]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias1b);

  function Chartbromelias1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 816],
      ['Especies sin datos SiB Colombia', 208]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias2);

  function Chartbromelias2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 41],
      ['En peligro', 67],
      ['Vulnerable', 75]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias2b);

  function Chartbromelias2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        16,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 16</br>Registros: 130</div>'
      ],
      [
        'En peligro SiB',
        34,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 34</br>Registros: 96</div>'
      ],
      [
        'Vulnerable SiB',
        50,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 50</br>Registros: 369</div>'
      ],
      ['Especies sin datos SiB Colombia', 83, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias3);

  function Chartbromelias3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias3b);

  function Chartbromelias3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies palmas

  google.charts.setOnLoadCallback(Chartpalmas1);

  function Chartpalmas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 289]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas1b);

  function Chartpalmas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 280],
      ['Especies sin datos SiB Colombia', 9]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas2);

  function Chartpalmas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 7],
      ['En peligro', 22],
      ['Vulnerable', 25]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas2b);

  function Chartpalmas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        7,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 7</br>Registros: 39</div>'
      ],
      [
        'En peligro SiB',
        20,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 20</br>Registros: 1.014</div>'
      ],
      [
        'Vulnerable SiB',
        21,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 21</br>Registros: 326</div>'
      ],
      ['Especies sin datos SiB Colombia', 6, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas3);

  function Chartpalmas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas3b);

  function Chartpalmas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies zamias

  google.charts.setOnLoadCallback(Chartzamias1);

  function Chartzamias1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 21]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias1b);

  function Chartzamias1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 21],
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias2);

  function Chartzamias2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 8],
      ['En peligro', 9],
      ['Vulnerable', 4]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias2b);

  function Chartzamias2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        7,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 7</br>Registros: 35</div>'
      ],
      [
        'En peligro SiB',
        8,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 8</br>Registros: 320</div>'
      ],
      [
        'Vulnerable SiB',
        4,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 4</br>Registros: 86</div>'
      ],
      ['Especies sin datos SiB Colombia', 2, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias3);

  function Chartzamias3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 1],
      ['Apéndice II', 24],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias3b);

  function Chartzamias3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        1,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
      ],
      [
        'Apéndice II en SiB',
        17,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 17</br>Registros: 434</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 7, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies frailejones

  google.charts.setOnLoadCallback(Chartfrailejones1);

  function Chartfrailejones1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 87]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones1b);

  function Chartfrailejones1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 78],
      ['Especies sin datos SiB Colombia', 9]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones2);

  function Chartfrailejones2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 7],
      ['En peligro', 17],
      ['Vulnerable', 13]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones2b);

  function Chartfrailejones2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        6,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 6</br>Registros: 37</div>'
      ],
      [
        'En peligro SiB',
        17,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 17</br>Registros: 653</div>'
      ],
      [
        'Vulnerable SiB',
        12,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 12</br>Registros: 733</div>'
      ],
      ['Especies sin datos SiB Colombia', 2, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones3);

  function Chartfrailejones3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones3b);

  function Chartfrailejones3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies cactus

  google.charts.setOnLoadCallback(Chartcactus1);

  function Chartcactus1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 58]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus1b);

  function Chartcactus1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 53],
      ['Especies sin datos SiB Colombia', 5]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus2);

  function Chartcactus2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus2b);

  function Chartcactus2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus3);

  function Chartcactus3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 32],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus3b);

  function Chartcactus3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        21,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 21</br>Registros: 436</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 11, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies pinos

  google.charts.setOnLoadCallback(Chartpinos1);

  function Chartpinos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 23]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos1b);

  function Chartpinos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 23],
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos2);

  function Chartpinos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 4]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos2b);

  function Chartpinos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        4,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 4</br>Registros: 169</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos3);

  function Chartpinos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos3b);

  function Chartpinos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 17</br>Registros: 434</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies helechos

  google.charts.setOnLoadCallback(Charthelechos1);

  function Charthelechos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1534]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos1b);

  function Charthelechos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1397],
      ['Especies sin datos SiB Colombia', 137]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos2);

  function Charthelechos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos2b);

  function Charthelechos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos3);

  function Charthelechos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 73],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos3b);

  function Charthelechos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        40,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 40</br>Registros: 21.920</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 33, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies fenerogamas

  google.charts.setOnLoadCallback(Chartfenerogamas1);

  function Chartfenerogamas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 264]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas1b);

  function Chartfenerogamas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 252],
      ['Especies sin datos SiB Colombia', 12]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas2);

  function Chartfenerogamas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 11],
      ['En peligro', 28],
      ['Vulnerable', 34]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas2b);

  function Chartfenerogamas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        7,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 7</br>Registros: 105</div>'
      ],
      [
        'En peligro SiB',
        20,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 20</br>Registros: 815</div>'
      ],
      [
        'Vulnerable SiB',
        23,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 23</br>Registros: 144</div>'
      ],
      ['Especies sin datos SiB Colombia', 23, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas3);

  function Chartfenerogamas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas3b);

  function Chartfenerogamas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies maderables

  google.charts.setOnLoadCallback(Chartmaderables1);

  function Chartmaderables1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 34]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables1b);

  function Chartmaderables1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 27],
      ['Especies sin datos SiB Colombia', 7]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables2);

  function Chartmaderables2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 8],
      ['En peligro', 13],
      ['Vulnerable', 7]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables2b);

  function Chartmaderables2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        8,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 8</br>Registros: 288</div>'
      ],
      [
        'En peligro SiB',
        12,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 12</br>Registros: 902</div>'
      ],
      [
        'Vulnerable SiB',
        7,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 7</br>Registros: 2.365</div>'
      ],
      ['Especies sin datos SiB Colombia', 1, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables3);

  function Chartmaderables3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 3],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables3b);

  function Chartmaderables3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        3,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 3</br>Registros: 66</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies musgos

  google.charts.setOnLoadCallback(Chartmusgos1);

  function Chartmusgos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1692]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos1b);

  function Chartmusgos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1409],
      ['Especies sin datos SiB Colombia', 283]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos2);

  function Chartmusgos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 8],
      ['En peligro', 5],
      ['Vulnerable', 80]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos2b);

  function Chartmusgos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        1,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
      ],
      [
        'En peligro SiB',
        1,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 69</div>'
      ],
      [
        'Vulnerable SiB',
        36,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 36</br>Registros: 159</div>'
      ],
      ['Especies sin datos SiB Colombia', 55, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos3);

  function Chartmusgos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos3b);

  function Chartmusgos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 49</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies algas marinas

  google.charts.setOnLoadCallback(Chartalgasmarinas1);

  function Chartalgasmarinas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 473]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas1b);

    function Chartalgasmarinas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 249],
            ['Especies sin datos SiB Colombia', 224]
        ]);

        var options = {
            titlePosition: 'none',
            pieHole: 0.9,
            backgroundColor: 'transparent',
            legend: { position: 'none' },
            chartArea: { width: '222', height: '222' },
            pieSliceBorderColor: 'none',
            slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
            sliceVisibilityThreshold: '0',
            fontSize: '12',
            pieSliceText: 'none',
            tooltip: { isHtml: true, textStyle: { color: '#fff' } }
        };

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasmarinas1b')
        );
        chart.draw(data, options);
    }


  google.charts.setOnLoadCallback(Chartalgasmarinas2);

  function Chartalgasmarinas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas2b);

  function Chartalgasmarinas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas3);

  function Chartalgasmarinas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas3b);

  function Chartalgasmarinas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies algas dulceacuícolas

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas1);

  function Chartalgasdulceacuicolas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 605]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas1b);

  function Chartalgasdulceacuicolas1b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'SiB');
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows([['Sin dato', 100, 'Dato en construcción']]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas2);

  function Chartalgasdulceacuicolas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas2b);

  function Chartalgasdulceacuicolas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas3);

  function Chartalgasdulceacuicolas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas3b);

  function Chartalgasdulceacuicolas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies algas terrestres

  google.charts.setOnLoadCallback(Chartalgasterrestres1);

  function Chartalgasterrestres1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 46]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres1b);

  function Chartalgasterrestres1b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'SiB');
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows([['Sin dato', 100, 'Dato en construcción']]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres2);

  function Chartalgasterrestres2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres2b);

  function Chartalgasterrestres2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres3);

  function Chartalgasterrestres3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres3b);

  function Chartalgasterrestres3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies otras algas

  google.charts.setOnLoadCallback(Chartotrasalgas1);

  function Chartotrasalgas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 28]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas1b);

  function Chartotrasalgas1b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'SiB');
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows([['Sin dato', 100, 'Dato en construcción']]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas2);

  function Chartotrasalgas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas2b);

  function Chartotrasalgas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas3);

  function Chartotrasalgas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas3b);

  function Chartotrasalgas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies liquenes

  google.charts.setOnLoadCallback(Chartliquenes1);

  function Chartliquenes1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1473]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes1b);

  function Chartliquenes1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 216],
      ['Especies sin datos SiB Colombia', 1257]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes2);

  function Chartliquenes2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes2b);

  function Chartliquenes2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes3);

  function Chartliquenes3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes3b);

  function Chartliquenes3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies macrohongos

  google.charts.setOnLoadCallback(Chartmacrohongos1);

  function Chartmacrohongos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1261]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos1b);

  function Chartmacrohongos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 169],
      ['Especies sin datos SiB Colombia', 1092]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos2);

  function Chartmacrohongos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos2b);

  function Chartmacrohongos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos3);

  function Chartmacrohongos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos3b);

  function Chartmacrohongos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies royas

  google.charts.setOnLoadCallback(Chartroyas1);

  function Chartroyas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 456]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas1b);

  function Chartroyas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 456]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas2);

  function Chartroyas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas2b);

  function Chartroyas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas3);

  function Chartroyas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas3b);

  function Chartroyas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies carbones

  google.charts.setOnLoadCallback(Chartcarbones1);

  function Chartcarbones1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 71]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones1b);

  function Chartcarbones1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 71]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones2);

  function Chartcarbones2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones2b);

  function Chartcarbones2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones3);

  function Chartcarbones3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones3b);

  function Chartcarbones3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones3b')
    );
    chart.draw(data, options);
  }
}

//final graficas

//funciones graficas de especies tercer nivel

$('.pecesback').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.peces').css('display', 'block');
});

$('.pecesm').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.pecesmgraph').css('display', 'block');

  // pie de literatura especies peces marinos

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesm1);

  function Chartpecesm1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 2582]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesm1')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesm1b);

  function Chartpecesm1b() {
      var data = google.visualization.arrayToDataTable([
          ['Titulo', 'SiB'],
          ['Especies con evidencia en el SiB Colombia', 1283],
          ['Especies sin datos SiB Colombia', 1299]
      ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesm1b')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesm2);

  function Chartpecesm2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 6],
      ['En peligro', 7],
      ['Vulnerable', 43]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesm2')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesm2b);

  function Chartpecesm2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'SiB');
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows([['Sin dato', 100, 'Dato en construcción']]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesm2b')
    );
    chart.draw(data, options);
  }
});

$('.pecesd').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.pecesdgraph').css('display', 'block');

  // pie de literatura especies peces dulces

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesd1);

  function Chartpecesd1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1494]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesd1')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesd1b);

  function Chartpecesd1b() {
      var data = google.visualization.arrayToDataTable([
          ['Titulo', 'SiB'],
          ['Especies con evidencia en el SiB Colombia', 1295],
          ['Especies sin datos SiB Colombia', 199]
      ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesd1b')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesd2);

  function Chartpecesd2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 1],
      ['En peligro', 4],
      ['Vulnerable', 48]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesd2')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesd2b);

  function Chartpecesd2b() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Título');
      data.addColumn('number', 'Especies');
      data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
      data.addRows([
          [
              'En peligro crítico SiB',
              2,
              '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 2</br>Registros: 2.043</div>'
          ],
          [
              'En peligro SiB',
              3,
              '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 3</br>Registros: 127</div>'
          ],
          [
              'Vulnerable SiB',
              42,
              '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 42</br>Registros: 1.858</div>'
          ],
          ['Especies sin datos SiB Colombia', 6, '']
      ]);

      var options = {
          titlePosition: 'none',
          pieHole: 0.9,
          backgroundColor: 'transparent',
          legend: { position: 'none' },
          chartArea: { width: '222', height: '222' },
          pieSliceBorderColor: 'none',
          slices: {
              0: { color: '#d51920' },
              1: { color: '#f47d20' },
              2: { color: '#f9ba1b' },
              3: { color: '#e7e9ed' }
          },
          sliceVisibilityThreshold: '0',
          fontSize: '12',
          pieSliceText: 'none',
          tooltip: { isHtml: true, textStyle: { color: '#fff' } }
      };

      var chart = new google.visualization.PieChart(
          document.getElementById('donutpecesd2b')
      );
      chart.draw(data, options);
  }


  google.charts.setOnLoadCallback(Chartpecesd3);

  function Chartpecesd3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 1],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesd3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpecesd3b);

function Chartpecesd3b() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Título');
  data.addColumn('number', 'Especies');
  data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
  data.addRows([
    [
      'Apéndice I en SiB',
      0,
      '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
    ],
    [
      'Apéndice II en SiB',
      1,
      '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 1</br>Registros: 2</div>'
    ],
    [
      'Apéndice III en SiB',
      0,
      '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
    ],
    ['Especies sin datos SiB Colombia', 0, '']
  ]);

  var options = {
    titlePosition: 'none',
    pieHole: 0.9,
    backgroundColor: 'transparent',
    legend: { position: 'none' },
    chartArea: { width: '222', height: '222' },
    pieSliceBorderColor: 'none',
    slices: {
      0: { color: '#238ED9' },
      1: { color: '#A2C754' },
      2: { color: '#E8702F' },
      3: { color: '#e7e9ed' }
    },
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: { isHtml: true, textStyle: { color: '#fff' } }
  };

  var chart = new google.visualization.PieChart(
    document.getElementById('donutpecesd3b')
  );
  chart.draw(data, options);
}


});





//funciones graficas de insectos tercer nivel

$('.insectosback').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.insectos').css('display', 'block');
});

$('.escarabajos').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_escarabajos').css('display', 'block');

  // pie de literatura especies escarabajos
  google.charts.setOnLoadCallback(ChartinsectosEscarabajos1);

  function ChartinsectosEscarabajos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 7000]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutescarabajos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosEscarabajos1b);

  function ChartinsectosEscarabajos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 792],
      ['Especies sin datos SiB Colombia', 6208]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutescarabajos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosEscarabajos2);

  function ChartinsectosEscarabajos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 1],
      ['Vulnerable', 4]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutescarabajos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosEscarabajos2b);

  function ChartinsectosEscarabajos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        1,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 1</br>Registros: 3</div>'
      ],
      ['Especies sin datos SiB Colombia', 4, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutescarabajos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosEscarabajos3);

  function ChartinsectosEscarabajos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutescarabajos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosEscarabajos3b);

  function ChartinsectosEscarabajos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutescarabajos3b')
    );
    chart.draw(data, options);
  }
});

$('.mariposas').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_mariposas').css('display', 'block');

  // pie de literatura especies mariposas
  google.charts.setOnLoadCallback(ChartinsectosMariposas1);

  function ChartinsectosMariposas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 3274]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmariposas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosMariposas1b);

  function ChartinsectosMariposas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1532],
      ['Especies sin datos SiB Colombia', 1742]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmariposas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosMariposas2);

  function ChartinsectosMariposas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 1],
      ['En peligro', 6],
      ['Vulnerable', 5]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmariposas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosMariposas2b);

  function ChartinsectosMariposas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        1,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
      ],
      [
        'Vulnerable SiB',
        1,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
      ],
      ['Especies sin datos SiB Colombia', 10, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmariposas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosMariposas3);

  function ChartinsectosMariposas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmariposas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosMariposas3b);

  function ChartinsectosMariposas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmariposas3b')
    );
    chart.draw(data, options);
  }
});

$('.hormigas').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_hormigas').css('display', 'block');

  // pie de literatura especies hormigas
  google.charts.setOnLoadCallback(ChartinsectosHormigas1);

  function ChartinsectosHormigas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 923]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthormigas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosHormigas1b);

  function ChartinsectosHormigas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 540],
      ['Especies sin datos SiB Colombia', 383]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthormigas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosHormigas2);

  function ChartinsectosHormigas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 2]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthormigas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosHormigas2b);

  function ChartinsectosHormigas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 2, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthormigas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosHormigas3);

  function ChartinsectosHormigas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthormigas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosHormigas3b);

  function ChartinsectosHormigas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthormigas3b')
    );
    chart.draw(data, options);
  }
});

$('.abejas').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_abejas').css('display', 'block');

  // pie de literatura especies abejas
  google.charts.setOnLoadCallback(ChartinsectosAbejas1);

  function ChartinsectosAbejas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 398]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutabejas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosAbejas1b);

  function ChartinsectosAbejas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 52],
      ['Especies sin datos SiB Colombia', 346]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutabejas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosAbejas2);

  function ChartinsectosAbejas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 4],
      ['En peligro', 5],
      ['Vulnerable', 4]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutabejas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosAbejas2b);

  function ChartinsectosAbejas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        2,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 2</br>Registros: 24</div>'
      ],
      [
        'En peligro SiB',
        1,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 13</div>'
      ],
      [
        'Vulnerable SiB',
        1,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 1</br>Registros: 11</div>'
      ],
      ['Especies sin datos SiB Colombia', 9, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutabejas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosAbejas3);

  function ChartinsectosAbejas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutabejas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosAbejas3b);

  function ChartinsectosAbejas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutabejas3b')
    );
    chart.draw(data, options);
  }
});

$('.dipteros').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_dipteros').css('display', 'block');

  // pie de literatura especies dipteros
  google.charts.setOnLoadCallback(ChartinsectosDipteros1);

  function ChartinsectosDipteros1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 3186]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdipteros1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosDipteros1b);

  function ChartinsectosDipteros1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 253],
      ['Especies sin datos SiB Colombia', 2933]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdipteros1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosDipteros2);

  function ChartinsectosDipteros2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdipteros2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosDipteros2b);

  function ChartinsectosDipteros2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdipteros2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosDipteros3);

  function ChartinsectosDipteros3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdipteros3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartinsectosDipteros3b);

  function ChartinsectosDipteros3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdipteros3b')
    );
    chart.draw(data, options);
  }
});

//funciones graficas de moluscos tercer nivel

$('.moluscosback').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.moluscos').css('display', 'block');
});

$('.marinos').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_marinos').css('display', 'block');

  // pie de literatura especies moluscos marinos
  google.charts.setOnLoadCallback(ChartmoluscosMarinos1);

  function ChartmoluscosMarinos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1168]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmarinos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosMarinos1b);

  function ChartmoluscosMarinos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 522],
      ['Especies sin datos SiB Colombia', 646]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmarinos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosMarinos2);

  function ChartmoluscosMarinos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 14]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmarinos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosMarinos2b);

  function ChartmoluscosMarinos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: En construcción</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 14, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmarinos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosMarinos3);

  function ChartmoluscosMarinos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 1],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmarinos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosMarinos3b);

  function ChartmoluscosMarinos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        1,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 1</br>Registros: 7</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmarinos3b')
    );
    chart.draw(data, options);
  }
});

$('.terrestres').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_terrestres').css('display', 'block');

  // pie de literatura especies moluscos terrestres
  google.charts.setOnLoadCallback(ChartmoluscosTerrestres1);

  function ChartmoluscosTerrestres1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 650]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutterrestres1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosTerrestres1b);

  function ChartmoluscosTerrestres1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutterrestres1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosTerrestres2);

  function ChartmoluscosTerrestres2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutterrestres2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosTerrestres2b);

  function ChartmoluscosTerrestres2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutterrestres2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosTerrestres3);

  function ChartmoluscosTerrestres3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutterrestres3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartmoluscosTerrestres3b);

  function ChartmoluscosTerrestres3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutterrestres3b')
    );
    chart.draw(data, options);
  }
});

//funciones graficas de decápodos tercer nivel

$('.decapodosback').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.decapodos').css('display', 'block');
});

$('.decapodos_marinos').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_decapodos_marinos').css('display', 'block');

  // pie de literatura especies decapodos marinos
  google.charts.setOnLoadCallback(ChartdecapodosMarinos1);

  function ChartdecapodosMarinos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1057]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosmarinos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosMarinos1b);

  function ChartdecapodosMarinos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 600],
      ['Especies sin datos SiB Colombia', 457]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosmarinos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosMarinos2);

  function ChartdecapodosMarinos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 7]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosmarinos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosMarinos2b);

  function ChartdecapodosMarinos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        3,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 3</br>Registros: 16</div>'
      ],
      ['Especies sin datos SiB Colombia', 4, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosmarinos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosMarinos3);

  function ChartdecapodosMarinos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosmarinos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosMarinos3b);

  function ChartdecapodosMarinos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosmarinos3b')
    );
    chart.draw(data, options);
  }
});

$('.decapodos_terrestres').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_decapodos_terrestres').css('display', 'block');

  // pie de literatura especies decapodos terrestres
  google.charts.setOnLoadCallback(ChartdecapodosTerrestres1);

  function ChartdecapodosTerrestres1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 688]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosterrestres1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosTerrestres1b);

  function ChartdecapodosTerrestres1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosterrestres1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosTerrestres2);

  function ChartdecapodosTerrestres2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosterrestres2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosTerrestres2b);

  function ChartdecapodosTerrestres2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosterrestres2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosTerrestres3);

  function ChartdecapodosTerrestres3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosterrestres3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosTerrestres3b);

  function ChartdecapodosTerrestres3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosterrestres3b')
    );
    chart.draw(data, options);
  }
});

$('.decapodos_dulceacuicolas').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.graph_decapodos_dulceacuicolas').css('display', 'block');

  // pie de literatura especies decapodos dulce
  google.charts.setOnLoadCallback(ChartdecapodosDulce1);

  function ChartdecapodosDulce1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 104]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosdulce1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosDulce1b);

  function ChartdecapodosDulce1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosdulce1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosDulce2);

  function ChartdecapodosDulce2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 25],
      ['Vulnerable', 1]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosdulce2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosDulce2b);

  function ChartdecapodosDulce2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        6,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 6</br>Registros: 12</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 20, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosdulce2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosDulce3);

  function ChartdecapodosDulce3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosdulce3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartdecapodosDulce3b);

  function ChartdecapodosDulce3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodosdulce3b')
    );
    chart.draw(data, options);
  }
});

//show hide otras graficas

function showDivspp1() {
  document.getElementById('chart_div_colecciones').style.display = 'none';
  document.getElementById('chart_div_observaciones').style.display = 'none';
  document.getElementById('chart_div_records').style.display = 'block';
}

function showDivspp2() {
  document.getElementById('chart_div_observaciones').style.display = 'none';
  document.getElementById('chart_div_records').style.display = 'none';
  document.getElementById('chart_div_colecciones').style.display = 'block';

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChartColecciones);

  function drawChartColecciones() {
    var data = google.visualization.arrayToDataTable([
      ['Fecha', 'Plantas', 'Animales', 'Hongos', 'Otros'],
      ['Dic.07', 19471, 5591, 1333, 92],
      ['Abr.08', 19666, 5641, 1378, 92],
      ['Jun.08', 22163, 6016, 1426, 113],
      ['Oct.08', 22180, 7780, 1433, 118],
      ['Dic.08', 22527, 7764, 1463, 119],
      ['Abr.09', 23112, 8040, 1475, 119],
      ['Jun.09', 23110, 8429, 1481, 119],
      ['Sept.09', 24057, 9891, 1625, 122],
      ['Dic.09', 24407, 11309, 1626, 122],
      ['Abr.10', 24466, 11315, 1639, 122],
      ['Jul.10', 24325, 11110, 1393, 113],
      ['Nov.10', 25003, 11501, 1683, 133],
      ['Feb.11', 24890, 12600, 1694, 135],
      ['Jun.11', 24895, 13177, 1705, 120],
      ['Sept.11', 25302, 13178, 1700, 120],
      ['Ene.12', 25120, 13725, 1687, 120],
      ['Mar.12', 25584, 13618, 1696, 120],
      ['Jul.12', 25647, 14271, 1707, 124],
      ['Oct.12', 26766, 14914, 1844, 128],
      ['Dic.12', 26985, 14911, 1852, 129],
      ['Feb.13', 27983, 14970, 1924, 129],
      ['May.13', 28831, 15888, 1927, 129],
      ['Jul.13', 28927, 15992, 1943, 129],
      ['Sept.13', 29010, 15979, 1943, 129],
      ['Dic.13', 29069, 15888, 1937, 128],
      ['Mar.14', 29259, 16881, 2020, 190],
      ['Sept.14', 28392, 15465, 2046, 167],
      ['Ene.15', 28806, 15920, 2074, 173],
      ['Abr.15', 29310, 16808, 2110, 198],
      ['Jul.15', 29945, 17197, 2214, 205],
      ['Oct.15', 31403, 20480, 2239, 276],
      ['Ene.16', 31654, 20636, 2254, 276],
      ['Abr.16', 32548, 21344, 2292, 276],
      ['Jul.16', 32596, 21595, 2309, 277],
      ['Oct.16', 32640, 21743, 2327, 282],
      ['Dic.16', 33767, 21969, 2342, 288],
      ['Abr.17', 33238, 22702, 2333, 272],
      ['Jul.17', 33810, 23199, 2357, 294],
      ['Oct.17', 33602, 23373, 2399, 272]
    ]);

    var options_chart = {
      legend: 'none',
      hAxis: {
        title: 'Fecha',
        titleTextStyle: { color: '#6f6f6f' },
        gridlines: { color: '#fff', count: 10 },
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      vAxis: {
        title: 'Número especies observadas (en miles)',
        titleTextStyle: { color: '#6f6f6f' },
        minValue: 0,
        gridlines: { color: '#fff' },
        format: 'short',
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      isStacked: true,
      areaOpacity: 0.7,
      chartArea: {
        backgroundColor: '#E7E9ED',
        left: 70,
        top: 20,
        right: 50,
        width: '100%',
        height: 400
      },
      colors: ['#9A9ACC', '#4BC0C0', '#FF6383', '#FFCE56'],
      width: '100%'
    };

    var chart = new google.visualization.AreaChart(
      document.getElementById('chart_div_colecciones')
    );
    chart.draw(data, options_chart);
  }
}

function showDivspp3() {
  document.getElementById('chart_div_records').style.display = 'none';
  document.getElementById('chart_div_colecciones').style.display = 'none';
  document.getElementById('chart_div_observaciones').style.display = 'block';

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChartObservaciones);

  function drawChartObservaciones() {
    var data = google.visualization.arrayToDataTable([
      ['Fecha', 'Plantas', 'Animales', 'Hongos', 'Otros'],
      ['Dic.07', 0, 67, 19, 0],
      ['Abr.08', 0, 70, 19, 0],
      ['Jun.08', 0, 432, 19, 32],
      ['Oct.08', 0, 458, 20, 75],
      ['Dic.08', 0, 848, 20, 80],
      ['Abr.09', 0, 862, 20, 80],
      ['Jun.09', 0, 905, 20, 80],
      ['Sept.09', 146, 906, 22, 80],
      ['Dic.09', 148, 918, 22, 80],
      ['Abr.10', 148, 919, 22, 95],
      ['Jul.10', 148, 919, 22, 95],
      ['Nov.10', 201, 1604, 22, 95],
      ['Feb.11', 2455, 2878, 31, 100],
      ['Jun.11', 2783, 3457, 31, 108],
      ['Sept.11', 2783, 3458, 31, 108],
      ['Ene.12', 2781, 3463, 31, 108],
      ['Mar.12', 2781, 3447, 31, 108],
      ['Jul.12', 2843, 3589, 31, 108],
      ['Oct.12', 2843, 3602, 32, 108],
      ['Dic.12', 2844, 3743, 32, 108],
      ['Feb.13', 2323, 2823, 32, 108],
      ['May.13', 3120, 2823, 113, 108],
      ['Jul.13', 3293, 2838, 116, 108],
      ['Sept.13', 3294, 2913, 116, 108],
      ['Dic.13', 3344, 3146, 118, 108],
      ['Mar.14', 3351, 3192, 119, 108],
      ['Sept.14', 3569, 3247, 115, 108],
      ['Ene.15', 3790, 3334, 115, 108],
      ['Abr.15', 3977, 3390, 115, 108],
      ['Jul.15', 4080, 3460, 117, 116],
      ['Oct.15', 4199, 3460, 116, 116],
      ['Ene.16', 4232, 3530, 117, 228],
      ['Abr.16', 4593, 3712, 117, 228],
      ['Jul.16', 4815, 3835, 117, 228],
      ['Oct.16', 4835, 3960, 118, 228],
      ['Dic.16', 4861, 4110, 118, 231],
      ['Abr.17', 5055, 4208, 120, 237],
      ['Jul.17', 5207, 4317, 124, 237],
      ['Oct.17', 5318, 4397, 131, 237]
    ]);

    var options_chart = {
      legend: 'none',
      hAxis: {
        title: 'Fecha',
        titleTextStyle: { color: '#6f6f6f' },
        gridlines: { color: '#fff', count: 10 },
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      vAxis: {
        title: 'Número especies observadas (en miles)',
        titleTextStyle: { color: '#6f6f6f' },
        minValue: 0,
        gridlines: { color: '#fff' },
        format: 'short',
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      isStacked: true,
      areaOpacity: 0.7,
      chartArea: {
        backgroundColor: '#E7E9ED',
        left: 70,
        top: 20,
        right: 50,
        width: '100%',
        height: 400
      },
      colors: ['#9A9ACC', '#4BC0C0', '#FF6383', '#FFCE56'],
      width: '100%'
    };

    var chart = new google.visualization.AreaChart(
      document.getElementById('chart_div_observaciones')
    );
    chart.draw(data, options_chart);
  }
}

function showDivmap1() {
  document.getElementById('mapa2').style.display = 'none';
  document.getElementById('mapa1').style.display = 'block';
}

function showDivmap2() {
  document.getElementById('mapa1').style.display = 'none';
  document.getElementById('mapa2').style.display = 'block';

  //mapa departamentos registros

  google.charts.load('current', { packages: ['geochart'] });
  google.charts.setOnLoadCallback(drawMarkersMap2);

  function drawMarkersMap2() {
    var data = google.visualization.arrayToDataTable([
      ['Departament', 'Nombre', 'Registros'],
      ['CO-DC', 'Bogotá Distrito Capital', 11735],
      ['CO-AMA', 'Amazonas', 54213],
      ['CO-ANT', 'Antioquia', 281436],
      ['CO-ARA', 'Arauca', 13013],
      ['CO-ATL', 'Atlántico', 3368],
      ['CO-BOL', 'Bolívar', 22618],
      ['CO-BOY', 'Boyacá', 90531],
      ['CO-CAL', 'Caldas', 54264],
      ['CO-CAQ', 'Caquetá', 36246],
      ['CO-CAS', 'Casanare', 41689],
      ['CO-CAU', 'Cauca', 41741],
      ['CO-CES', 'Cesar', 9764],
      ['CO-COR', 'Córdoba', 60897],
      ['CO-CUN', 'Cundinamarca', 26978],
      ['CO-CHO', 'Chocó', 113668],
      ['CO-GUA', 'Guainía', 8122],
      ['CO-GUV', 'Guaviare', 14388],
      ['CO-HUI', 'Huila', 15904],
      ['CO-LAG', 'La Guajira', 41931],
      ['CO-MAG', 'Magdalena', 71195],
      ['CO-MET', 'Meta', 52169],
      ['CO-NAR', 'Nariño', 393867],
      ['CO-NSA', 'Norte de Santander', 9279],
      ['CO-PUT', 'Putumayo', 11801],
      ['CO-QUI', 'Quindío', 34469],
      ['CO-RIS', 'Risaralda', 41979],
      ['CO-SAP', 'San Andrés, Providencia y Santa Catalina', 9192],
      ['CO-SAN', 'Santander', 57353],
      ['CO-SUC', 'Sucre', 50285],
      ['CO-TOL', 'Tolima', 41646],
      ['CO-VAC', 'Valle del Cauca', 135589],
      ['CO-VAU', 'Vaupés', 11272],
      ['CO-VID', 'Vichada', 18010]
    ]);

    var options = {
      region: 'CO',
      resolution: 'provinces',
      displayMode: 'regions',
      enableRegionInteractivity: true,
      backgroundColor: 'transparent',
      colors: ['#F7E2AD', '#F7B000'],
      datalessRegionColor: 'transparent',
      width: '100%',
      tooltip: {
        isHtml: true,
        textStyle: { color: '#fff', fontName: 'Open Sans' }
      }
    };

    var chart = new google.visualization.GeoChart(
      document.getElementById('chart_div2')
    );
    chart.draw(data, options);
  }
}

//graficas que cargan al inicio

$(document).ready(function() {
  // Tooltip only Text

  $('.masterTooltip')
    .hover(
      function() {
        var title = $(this).attr('title');
        $(this)
          .data('tipText', title)
          .removeAttr('title');
        $('<p class="tooltip"></p>')
          .text(title)
          .appendTo('body')
          .fadeIn('fast');
      },
      function() {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
      }
    )
    .mousemove(function(e) {
      var mousex = e.pageX + 20;
      var mousey = e.pageY + 10;
      $('.tooltip').css({ top: mousey, left: mousex });
    });

  $('.masterTooltip2')
    .hover(
      function() {
        var title = $(this).attr('title');
        $(this)
        .data('tipText', title)
        .removeAttr('title');
        $('<p class="tooltip2"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('fast');
      },
      function() {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip2').remove();
      }
    )
    .mousemove(function(e) {
      var mousex = e.pageX + 20;
      var mousey = e.pageY + 10;
      $('.tooltip2').css({ top: mousey, left: mousex });
    });

  //primer grafica de especies

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChartRegisters);

  function drawChartRegisters() {
    var data = google.visualization.arrayToDataTable([
      ['Fecha', 'Plantas', 'Animales', 'Hongos', 'Otros'],
      ['Dic.07', 20886, 6885, 1554, 154],
      ['Abr.08', 21051, 8158, 1569, 154],
      ['Jun.08', 23157, 8897, 1616, 190],
      ['Oct.08', 23181, 8994, 1622, 233],
      ['Dic.08', 23484, 9125, 1652, 239],
      ['Abr.09', 24065, 9330, 1666, 242],
      ['Jun.09', 24072, 9658, 1672, 242],
      ['Sept.09', 24951, 11129, 1813, 243],
      ['Dic.09', 25277, 12568, 1814, 243],
      ['Abr.10', 25335, 12575, 1827, 258],
      ['Jul.10', 25182, 12304, 1582, 244],
      ['Nov.10', 25809, 12948, 1870, 277],
      ['Feb.11', 26473, 14594, 1888, 284],
      ['Jun.11', 26759, 15336, 1898, 297],
      ['Sept.11', 27032, 15309, 1893, 298],
      ['Ene.12', 26903, 15786, 1881, 298],
      ['Mar.12', 27306, 15686, 1892, 300],
      ['Jul.12', 27305, 16430, 1903, 304],
      ['Oct.12', 27739, 16846, 2038, 306],
      ['Dic.12', 27778, 16930, 2041, 306],
      ['Feb.13', 28625, 16551, 2113, 306],
      ['May.13', 29523, 16938, 2117, 308],
      ['Jul.13', 29633, 17058, 2133, 308],
      ['Sept.13', 29714, 17073, 2133, 308],
      ['Dic.13', 29771, 16967, 2127, 306],
      ['Mar.14', 29975, 18002, 2213, 347],
      ['Sept.14', 29809, 19707, 2262, 393],
      ['Ene.15', 30240, 20324, 2292, 426],
      ['Abr.15', 30707, 21179, 2328, 457],
      ['Jul.15', 31336, 21589, 2430, 470],
      ['Oct.15', 32131, 21756, 2432, 497],
      ['Ene.16', 32388, 21933, 2482, 537],
      ['Abr.16', 33255, 22616, 2518, 537],
      ['Jul.16', 33310, 22883, 2534, 654],
      ['Oct.16', 33382, 23072, 2552, 664],
      ['Dic.16', 34474, 23345, 2567, 670],
      ['Abr.17', 34472, 24061, 2567, 676],
      ['Jul.17', 34539, 24545, 2585, 676],
      ['Oct.17', 34830, 24683, 2636, 680]
    ]);

    var options_chart = {
      legend: 'none',
      hAxis: {
        title: 'Fecha',
        titleTextStyle: { color: '#6f6f6f' },
        gridlines: { color: '#fff', count: 8 },
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      vAxis: {
        title: 'Número especies observadas (en miles)',
        titleTextStyle: { color: '#6f6f6f' },
        minValue: 0,
        gridlines: { color: '#fff' },
        format: 'short',
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      isStacked: true,
      areaOpacity: 0.7,
      chartArea: {
        backgroundColor: '#E7E9ED',
        left: 70,
        top: 20,
        right: 50,
        width: '100%',
        height: 400
      },
      colors: ['#9A9ACC', '#4BC0C0', '#FF6383', '#FFCE56'],
      width: '100%'
    };

    var chart = new google.visualization.AreaChart(
      document.getElementById('chart_div_records')
    );
    chart.draw(data, options_chart);
  }

  // tabs de graficas especies

  $('.databox input').on('click', function() {
    $('.databox .acttabbtn').removeClass('acttabbtn');
    $(this).addClass('acttabbtn');
  });

  //mapa paises

  google.charts.load('current', { packages: ['geochart'] });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Puesto'],
      ['Brazil', 1],
      ['Colombia', 2],
      ['Indonesia', 3],
      ['China', 4],
      ['Mexico', 5],
      ['Peru', 6],
      ['Australia', 7],
      ['India', 8],
      ['Ecuador', 9],
      ['Venezuela', 10],
      ['USA', 10]
    ]);

    var options = {
      displayMode: 'regions',
      enableRegionInteractivity: true,
      backgroundColor: 'transparent',
      colors: ['#F7B000', '#F7F0DE'],
      datalessRegionColor: '#17557A',
      width: '90%',
      legend: 'none',
      tooltip: {
        isHtml: true,
        textStyle: { color: '#fff', fontName: 'Open Sans' }
      }
    };

    var chart = new google.visualization.GeoChart(
      document.getElementById('regions_div')
    );

    chart.draw(data, options);
  }

  //mapa departamentos especies

  google.charts.load('current', { packages: ['geochart'] });
  google.charts.setOnLoadCallback(drawMarkersMap);

  function drawMarkersMap() {
    var data = google.visualization.arrayToDataTable([
      ['Departament', 'Nombre', 'Especies'],
      ['CO-DC', 'Bogotá Distrito Capital', 126],
      ['CO-AMA', 'Amazonas', 2363],
      ['CO-ANT', 'Antioquia', 5020],
      ['CO-ARA', 'Arauca', 213],
      ['CO-ATL', 'Atlántico', 388],
      ['CO-BOL', 'Bolívar', 451],
      ['CO-BOY', 'Boyacá', 1205],
      ['CO-CAL', 'Caldas', 439],
      ['CO-CAQ', 'Caquetá', 1588],
      ['CO-CAS', 'Casanare', 535],
      ['CO-CAU', 'Cauca', 1269],
      ['CO-CES', 'Cesar', 143],
      ['CO-COR', 'Córdoba', 1794],
      ['CO-CUN', 'Cundinamarca', 280],
      ['CO-CHO', 'Chocó', 2214],
      ['CO-GUA', 'Guainía', 559],
      ['CO-GUV', 'Guaviare', 365],
      ['CO-HUI', 'Huila', 400],
      ['CO-LAG', 'La Guajira', 460],
      ['CO-MAG', 'Magdalena', 782],
      ['CO-MET', 'Meta', 1149],
      ['CO-NAR', 'Nariño', 1637],
      ['CO-NSA', 'Norte de Santander', 382],
      ['CO-PUT', 'Putumayo', 621],
      ['CO-QUI', 'Quindío', 352],
      ['CO-RIS', 'Risaralda', 632],
      ['CO-SAP', 'San Andrés, Providencia y Santa Catalina', 467],
      ['CO-SAN', 'Santander', 1530],
      ['CO-SUC', 'Sucre', 179],
      ['CO-TOL', 'Tolima', 498],
      ['CO-VAC', 'Valle del Cauca', 2618],
      ['CO-VAU', 'Vaupés', 611],
      ['CO-VID', 'Vichada', 1700]
    ]);

    var options = {
      region: 'CO',
      resolution: 'provinces',
      displayMode: 'regions',
      enableRegionInteractivity: true,
      backgroundColor: 'transparent',
      colors: ['#3999C2', '#17557A'],
      datalessRegionColor: 'transparent',
      width: '100%',
      tooltip: {
        isHtml: true,
        textStyle: { color: '#fff', fontName: 'Open Sans' }
      }
    };

    var chart = new google.visualization.GeoChart(
      document.getElementById('chart_div')
    );
    chart.draw(data, options);
  }

  //tabs de mapa departamentos

  $('.mapsdep input').on('click', function() {
    $('.mapsdep .acttabbtn').removeClass('acttabbtn');
    $(this).addClass('acttabbtn');
  });
});
