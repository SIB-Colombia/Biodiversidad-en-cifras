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

var options_graph1 =  {
    titlePosition: 'none',
    pieHole: 0.7,
    backgroundColor: 'transparent',
    legend: {position: 'none'},
    chartArea: {width: '220', height: '220'},
    pieSliceBorderColor: 'none',
    slices: {0: {color: '#4BC0C0'}},
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: {trigger: 'none'}
};

var options_graph1b = {
    titlePosition: 'none',
    pieHole: 0.9,
    backgroundColor: 'transparent',
    legend: {position: 'none'},
    chartArea: {width: '222', height: '222'},
    pieSliceBorderColor: 'none',
    slices: {0: {color: '#2B4143'}, 1: {color: '#e7e9ed'}},
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: {isHtml: true, textStyle: {color: '#fff'}}
};

var options_graph2 = {
    titlePosition: 'none',
    pieHole: 0.7,
    backgroundColor: 'transparent',
    legend: {position: 'none'},
    chartArea: {width: '180', height: '180'},
    pieSliceBorderColor: 'none',
    slices: {
        0: {color: '#d51920'},
        1: {color: '#f47d20'},
        2: {color: '#f9ba1b'}
    },
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: {trigger: 'none'}
};

var options_graph2b = {
    titlePosition: 'none',
    pieHole: 0.9,
    backgroundColor: 'transparent',
    legend: {position: 'none'},
    chartArea: {width: '222', height: '222'},
    pieSliceBorderColor: 'none',
    slices: {
        0: {color: '#d51920'},
        1: {color: '#f47d20'},
        2: {color: '#f9ba1b'},
        3: {color: '#e7e9ed'}
    },
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: {isHtml: true, textStyle: {color: '#fff'}}
};

var options_graph3 = {
    titlePosition: 'none',
    pieHole: 0.7,
    backgroundColor: 'transparent',
    legend: {position: 'none'},
    chartArea: {width: '180', height: '180'},
    pieSliceBorderColor: 'none',
    slices: {
        0: {color: '#238ED9'},
        1: {color: '#A2C754'},
        2: {color: '#E8702F'}
    },
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: {trigger: 'none'}
};

var options_graph3b = {
    titlePosition: 'none',
    pieHole: 0.9,
    backgroundColor: 'transparent',
    legend: {position: 'none'},
    chartArea: {width: '222', height: '222'},
    pieSliceBorderColor: 'none',
    slices: {
        0: {color: '#238ED9'},
        1: {color: '#A2C754'},
        2: {color: '#E8702F'},
        3: {color: '#e7e9ed'}
    },
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: {isHtml: true, textStyle: {color: '#fff'}}
};

var options_graph3c = {
    titlePosition: 'none',
    pieHole: 0.7,
    backgroundColor: 'transparent',
    legend: {position: 'none'},
    chartArea: {width: '180', height: '180'},
    pieSliceBorderColor: 'none',
    slices: {
        0: {color: '#238ED9'},
        1: {color: '#46d9c2'},
        2: {color: '#A2C754'},
        3: {color: '#E8702F'}
    },
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: {trigger: 'none'}
};
var options_graph3bc = {
    titlePosition: 'none',
    pieHole: 0.9,
    backgroundColor: 'transparent',
    legend: {position: 'none'},
    chartArea: {width: '222', height: '222'},
    pieSliceBorderColor: 'none',
    slices: {
        0: {color: '#238ED9'},
        1: {color: '#46d9c2'},
        2: {color: '#A2C754'},
        3: {color: '#E8702F'},
        4: {color: '#e7e9ed'}
    },
    sliceVisibilityThreshold: '0',
    fontSize: '12',
    pieSliceText: 'none',
    tooltip: {isHtml: true, textStyle: {color: '#fff'}}
};




function showDivGraph(currentElement) {
    $('.grapharea').css('display', 'none');
    $(currentElement)
        .parent()
        .next('.grapharea')
        .css('display', 'block');

    // pie de literatura especies mamiferos

    google.charts.load('current', {packages: ['corechart']});

    // pie de literatura especies animales

    google.charts.setOnLoadCallback(Chartanimales1);

    function Chartanimales1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanimales1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartanimales1b);

    function Chartanimales1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 18968],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanimales1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartanimales2);

    function Chartanimales2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 62],
            ['En peligro', 162],
            ['Vulnerable', 264]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanimales2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartanimales2b);

    function Chartanimales2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                50,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 50</br>Registros: 8.504</div>'
            ],
            [
                'En peligro SiB',
                126,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 126</br>Registros: 23.204</div>'
            ],
            [
                'Vulnerable SiB',
                230,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 230</br>Registros: 54.107</div>'
            ],
            ['Especies sin datos SiB Colombia', 82, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanimales2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartanimales3);

    function Chartanimales3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 53],
            ['Apéndice I/II', 1],
            ['Apéndice II', 587],
            ['Apéndice III', 32]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanimales3')
        );
        chart.draw(data, options_graph3c);
    }

    google.charts.setOnLoadCallback(Chartanimales3b);

    function Chartanimales3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                47,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 47</br>Registros: 10.146</div>'
            ],
            [
                'Apéndice I/II en SiB',
                1,
                '<div class="pad10"><b>Apéndice I/II en SiB Colombia</b></br>Especies: 1</br>Registros: 19</div>'
            ],
            [
                'Apéndice II en SiB',
                533,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 533</br>Registros: 569.497</div>'
            ],
            [
                'Apéndice III en SiB',
                31,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 31</br>Registros: 25.878</div>'
            ],
            ['Especies sin datos SiB Colombia', 172, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanimales3b')
        );
        chart.draw(data, options_graph3bc);
    }

    // pie de literatura especies mamiferos

    google.charts.setOnLoadCallback(ChartMam1);

    function ChartMam1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 528]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmam1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartMam1b);

    function ChartMam1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 528]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmam1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartMam2);

    function ChartMam2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 7],
            ['En peligro', 10],
            ['Vulnerable', 25]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmam2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartMam2b);

    function ChartMam2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                3,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 3</br>Registros: 468</div>'
            ],
            [
                'En peligro SiB',
                10,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 10</br>Registros: 321</div>'
            ],
            [
                'Vulnerable SiB',
                21,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 21</br>Registros: 1.583</div>'
            ],
            ['Especies sin datos SiB Colombia', 8, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmam2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartMam3);

    function ChartMam3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 90],
            ['Apéndice II', 63],
            ['Apéndice III', 11]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmam3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartMam3b);

    function ChartMam3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                29,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 29</br>Registros: 2.620</div>'
            ],
            [
                'Apéndice II en SiB',
                60,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 60</br>Registros: 6.765</div>'
            ],
            [
                'Apéndice III en SiB',
                11,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 11</br>Registros: 4.625</div>'
            ],
            ['Especies sin datos SiB Colombia', 4, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmam3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies plantas

    google.charts.setOnLoadCallback(Chartplantas1);

    function Chartplantas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutplantas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartplantas1b);

    function Chartplantas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 30033],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutplantas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartplantas2);

    function Chartplantas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 120],
            ['En peligro', 269],
            ['Vulnerable', 425]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutplantas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartplantas2b);

    function Chartplantas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                95,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 95</br>Registros: 1.318</div>'
            ],
            [
                'En peligro SiB',
                214,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 214</br>Registros: 7.780</div>'
            ],
            [
                'Vulnerable SiB',
                318,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 318</br>Registros: 13.992</div>'
            ],
            ['Especies sin datos SiB Colombia', 187, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutplantas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartplantas3);

    function Chartplantas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 7],
            ['Apéndice II', 2813],
            ['Apéndice III', 3]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutplantas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartplantas3b);

    function Chartplantas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                6,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 6</br>Registros: 85</div>'
            ],
            [
                'Apéndice II en SiB',
                1328,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 1328</br>Registros: 36.567</div>'
            ],
            [
                'Apéndice III en SiB',
                3,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 3</br>Registros: 478</div>'
            ],
            ['Especies sin datos SiB Colombia', 1486, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutplantas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies aves

    google.charts.setOnLoadCallback(Chartave1);

    function Chartave1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 1909]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutave1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartave1b);

    function Chartave1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1909],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutave1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartave2);

    function Chartave2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 17],
            ['En peligro', 56],
            ['Vulnerable', 67]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutave2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartave2b);

    function Chartave2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                15,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 15</br>Registros: 3.587</div>'
            ],
            [
                'En peligro SiB',
                54,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 54</br>Registros: 20.773</div>'
            ],
            [
                'Vulnerable SiB',
                63,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 63</br>Registros: 44.853</div>'
            ],
            ['Especies sin datos SiB Colombia', 8, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutave2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartave3);

    function Chartave3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 10],
            ['Apéndice II', 304],
            ['Apéndice III', 14]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutave3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartave3b);

    function Chartave3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                9,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 9</br>Registros: 5.361</div>'
            ],
            [
                'Apéndice II en SiB',
                294,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 294</br>Registros: 553.027</div>'
            ],
            [
                'Apéndice III en SiB',
                14,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 14</br>Registros: 20.627</div>'
            ],
            ['Especies sin datos SiB Colombia', 11, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutave3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies anfibios

    google.charts.setOnLoadCallback(Chartanfibio1);

    function Chartanfibio1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanfibio1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartanfibio1b);

    function Chartanfibio1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 686],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanfibio1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartanfibio2);

    function Chartanfibio2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 14],
            ['En peligro', 26],
            ['Vulnerable', 15]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanfibio2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartanfibio2b);

    function Chartanfibio2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                13,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 13</br>Registros: 489</div>'
            ],
            [
                'En peligro SiB',
                23,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 23</br>Registros: 544</div>'
            ],
            [
                'Vulnerable SiB',
                14,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 14</br>Registros: 1015</div>'
            ],
            ['Especies sin datos SiB Colombia', 5, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanfibio2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartanfibio3);

    function Chartanfibio3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 39],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanfibio3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartanfibio3b);

    function Chartanfibio3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                29,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 29</br>Registros: 4.233</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 10, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutanfibio3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies reptiles

    google.charts.setOnLoadCallback(Chartreptil1);

    function Chartreptil1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptil1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartreptil1b);

    function Chartreptil1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 632],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptil1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartreptil2);

    function Chartreptil2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 11],
            ['En peligro', 16],
            ['Vulnerable', 17]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptil2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartreptil2b);

    function Chartreptil2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                10,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 10</br>Registros: 1.775</div>'
            ],
            [
                'En peligro SiB',
                16,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 16</br>Registros: 1.248</div>'
            ],
            [
                'Vulnerable SiB',
                15,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 15</br>Registros: 1.212</div>'
            ],
            ['Especies sin datos SiB Colombia', 3, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptil2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartreptil3);

    function Chartreptil3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 10],
            ['Apéndice I/II', 1],
            ['Apéndice II', 25],
            ['Apéndice III', 2]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptil3')
        );
        chart.draw(data, options_graph3c);
    }

    google.charts.setOnLoadCallback(Chartreptil3b);

    function Chartreptil3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                9,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 9</br>Registros: 2.165</div>'
            ],
            [
                'Apéndice I/II en SiB',
                1,
                '<div class="pad10"><b>Apéndice I/II en SiB Colombia</b></br>Especies: 1</br>Registros: 19</div>'
            ],
            [
                'Apéndice II en SiB',
                25,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 25</br>Registros: 3.503</div>'
            ],
            [
                'Apéndice III en SiB',
                2,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 2</br>Registros: 197</div>'
            ],
            ['Especies sin datos SiB Colombia', 1, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptil3b')
        );
        chart.draw(data, options_graph3bc);
    }

    // pie de literatura especies peces

    google.charts.setOnLoadCallback(Chartpeces1);

    function Chartpeces1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpeces1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartpeces1b);

    function Chartpeces1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 3834],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpeces1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartpeces2);

    function Chartpeces2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 7],
            ['En peligro', 10],
            ['Vulnerable', 92]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpeces2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartpeces2b);

    function Chartpeces2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                5,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 5</br>Registros: 2.082</div>'
            ],
            [
                'En peligro SiB',
                9,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 9</br>Registros: 221</div>'
            ],
            [
                'Vulnerable SiB',
                86,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 86</br>Registros: 4.802</div>'
            ],
            ['Especies sin datos SiB Colombia', 9, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpeces2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartpeces3);

    function Chartpeces3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 3],
            ['Apéndice II', 17],
            ['Apéndice III', 4]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpeces3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartpeces3b);

    function Chartpeces3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                13,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 13</br>Registros: 53</div>'
            ],
            [
                'Apéndice III en SiB',
                4,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 4</br>Registros: 429</div>'
            ],
            ['Especies sin datos SiB Colombia', 7, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpeces3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies insectos

    google.charts.setOnLoadCallback(Chartinsecto1);

    function Chartinsecto1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutinsecto1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartinsecto1b);

    function Chartinsecto1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 6457],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutinsecto1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartinsecto2);

    function Chartinsecto2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 5],
            ['En peligro', 15],
            ['Vulnerable', 16]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutinsecto2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartinsecto2b);

    function Chartinsecto2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                3,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 3</br>Registros: 29</div>'
            ],
            [
                'En peligro SiB',
                6,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 6</br>Registros: 23</div>'
            ],
            [
                'Vulnerable SiB',
                7,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 7</br>Registros: 44</div>'
            ],
            ['Especies sin datos SiB Colombia', 20, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutinsecto2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartinsecto3);

    function Chartinsecto3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutinsecto3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartinsecto3b);

    function Chartinsecto3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutinsecto3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies aracnidos

    google.charts.setOnLoadCallback(Chartaracnidos1);

    function Chartaracnidos1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutaracnidos1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartaracnidos1b);

    function Chartaracnidos1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 509],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutaracnidos1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartaracnidos2);

    function Chartaracnidos2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 3],
            ['Vulnerable', 5]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutaracnidos2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartaracnidos2b);

    function Chartaracnidos2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                0,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'En peligro SiB',
                1,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 4</div>'
            ],
            [
                'Vulnerable SiB',
                3,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 3</br>Registros: 69</div>'
            ],
            ['Especies sin datos SiB Colombia', 4, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutaracnidos2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartaracnidos3);

    function Chartaracnidos3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutaracnidos3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartaracnidos3b);

    function Chartaracnidos3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutaracnidos3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies moluscos

    google.charts.setOnLoadCallback(Chartmolusco1);

    function Chartmolusco1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmolusco1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartmolusco1b);

    function Chartmolusco1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1920],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmolusco1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartmolusco2);

    function Chartmolusco2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 14]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmolusco2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartmolusco2b);

    function Chartmolusco2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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
                10,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 10</br>Registros: 433</div>'
            ],
            ['Especies sin datos SiB Colombia', 4, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmolusco2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartmolusco3);

    function Chartmolusco3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 1],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmolusco3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartmolusco3b);

    function Chartmolusco3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                1,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 1</br>Registros: 61/div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmolusco3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies decápodos

    google.charts.setOnLoadCallback(Chartdecapodo1);

    function Chartdecapodo1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodo1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartdecapodo1b);

    function Chartdecapodo1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 767],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodo1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartdecapodo2);

    function Chartdecapodo2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 25],
            ['Vulnerable', 8]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodo2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartdecapodo2b);

    function Chartdecapodo2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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
                7,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 7</br>Registros: 58</div>'
            ],
            ['Especies sin datos SiB Colombia', 20, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodo2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartdecapodo3);

    function Chartdecapodo3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodo3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartdecapodo3b);

    function Chartdecapodo3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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



        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodo3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies crustaceosm

    google.charts.setOnLoadCallback(Chartcrustaceosm1);

    function Chartcrustaceosm1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcrustaceosm1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartcrustaceosm1b);

    function Chartcrustaceosm1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 676],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcrustaceosm1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartcrustaceosm2);

    function Chartcrustaceosm2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcrustaceosm2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartcrustaceosm2b);

    function Chartcrustaceosm2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcrustaceosm2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartcrustaceosm3);

    function Chartcrustaceosm3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcrustaceosm3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartcrustaceosm3b);

    function Chartcrustaceosm3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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



        var chart = new google.visualization.PieChart(
            document.getElementById('donutcrustaceosm3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies equinodermos

    google.charts.setOnLoadCallback(Chartequinodermo1);

    function Chartequinodermo1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutequinodermo1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartequinodermo1b);

    function Chartequinodermo1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 325],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutequinodermo1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartequinodermo2);

    function Chartequinodermo2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutequinodermo2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartequinodermo2b);

    function Chartequinodermo2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutequinodermo2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartequinodermo3);

    function Chartequinodermo3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 1]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutequinodermo3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartequinodermo3b);

    function Chartequinodermo3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutequinodermo3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies esponja marina

    google.charts.setOnLoadCallback(Chartesponjamarina1);

    function Chartesponjamarina1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutesponjamarina1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartesponjamarina1b);

    function Chartesponjamarina1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 406],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutesponjamarina1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartesponjamarina2);

    function Chartesponjamarina2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutesponjamarina2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartesponjamarina2b);

    function Chartesponjamarina2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutesponjamarina2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartesponjamarina3);

    function Chartesponjamarina3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutesponjamarina3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartesponjamarina3b);

    function Chartesponjamarina3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutesponjamarina3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies corales afines

    google.charts.setOnLoadCallback(Chartcoralesafines1);

    function Chartcoralesafines1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcoralesafines1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartcoralesafines1b);

    function Chartcoralesafines1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 166]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcoralesafines1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartcoralesafines2);

    function Chartcoralesafines2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 1],
            ['En peligro', 1],
            ['Vulnerable', 4]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcoralesafines2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartcoralesafines2b);

    function Chartcoralesafines2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                1,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 1</br>Registros: 74</div>'
            ],
            [
                'En peligro SiB',
                1,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 58</div>'
            ],
            [
                'Vulnerable SiB',
                3,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 3</br>Registros: 32</div>'
            ],
            ['Especies sin datos SiB Colombia', 1, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcoralesafines2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartcoralesafines3);

    function Chartcoralesafines3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 117],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcoralesafines3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartcoralesafines3b);

    function Chartcoralesafines3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                97,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 97</br>Registros: 1.769</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 20, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcoralesafines3b')
        );
        chart.draw(data, options_graph3b);
    }


    // pie de literatura especies medusas

    google.charts.setOnLoadCallback(Chartmedusas1);

    function Chartmedusas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmedusas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartmedusas1b);

    function Chartmedusas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 43],
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmedusas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartmedusas2);

    function Chartmedusas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmedusas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartmedusas2b);

    function Chartmedusas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmedusas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartmedusas3);

    function Chartmedusas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 4],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmedusas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartmedusas3b);

    function Chartmedusas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                4,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 4</br>Registros: 49</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmedusas3b')
        );
        chart.draw(data, options_graph3b);
    }


    /*----------------------------------------*\
                     PLANTAS
    \*----------------------------------------*/

    // pie de literatura especies angiospermas

    google.charts.setOnLoadCallback(Chartangiospermas1);

    function Chartangiospermas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutangiospermas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartangiospermas1b);

    function Chartangiospermas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 25648],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutangiospermas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartangiospermas2);

    function Chartangiospermas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 104],
            ['En peligro', 255],
            ['Vulnerable', 337]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutangiospermas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartangiospermas2b);

    function Chartangiospermas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                81,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 81</br>Registros: 1.224</div>'
            ],
            [
                'En peligro SiB',
                203,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 203</br>Registros: 7.334</div>'
            ],
            [
                'Vulnerable SiB',
                255,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 255</br>Registros: 12.951</div>'
            ],
            ['Especies sin datos SiB Colombia', 157, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutangiospermas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartangiospermas3);

    function Chartangiospermas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 6],
            ['Apéndice II', 2718],
            ['Apéndice III', 3]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutangiospermas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartangiospermas3b);

    function Chartangiospermas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                5,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 5</br>Registros: 75</div>'
            ],
            [
                'Apéndice II en SiB',
                1.247,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 1.247</br>Registros: 10.453</div>'
            ],
            [
                'Apéndice III en SiB',
                3,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 3</br>Registros: 478</div>'
            ],
            ['Especies sin datos SiB Colombia', 1472, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutangiospermas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies gimnospermas

    google.charts.setOnLoadCallback(Chartgimnospermas1);

    function Chartgimnospermas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutgimnospermas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartgimnospermas1b);

    function Chartgimnospermas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 89],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutgimnospermas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartgimnospermas2);

    function Chartgimnospermas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 8],
            ['En peligro', 9],
            ['Vulnerable', 8]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutgimnospermas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartgimnospermas2b);

    function Chartgimnospermas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                8,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 8</br>Registros: 62</div>'
            ],
            [
                'En peligro SiB',
                8,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 8</br>Registros: 368</div>'
            ],
            [
                'Vulnerable SiB',
                8,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 8</br>Registros: 686</div>'
            ],
            ['Especies sin datos SiB Colombia', 1, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutgimnospermas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartgimnospermas3);

    function Chartgimnospermas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 1],
            ['Apéndice II', 23],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutgimnospermas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartgimnospermas3b);

    function Chartgimnospermas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                1,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 1</br>Registros: 10</div>'
            ],
            [
                'Apéndice II en SiB',
                18,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 18/br>Registros: 539</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 5, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutgimnospermas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies helechos

    google.charts.setOnLoadCallback(Charthelechos1);

    function Charthelechos1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthelechos1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Charthelechos1b);

    function Charthelechos1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1842],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthelechos1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Charthelechos2);

    function Charthelechos2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthelechos2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Charthelechos2b);

    function Charthelechos2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthelechos2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Charthelechos3);

    function Charthelechos3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 72],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthelechos3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Charthelechos3b);

    function Charthelechos3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                63,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 63</br>Registros: 25.575</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 9, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthelechos3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies musgos

    google.charts.setOnLoadCallback(Chartmusgos1);

    function Chartmusgos1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmusgos1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartmusgos1b);

    function Chartmusgos1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1221],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmusgos1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartmusgos2);

    function Chartmusgos2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 6],
            ['En peligro', 4],
            ['Vulnerable', 32]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmusgos2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartmusgos2b);

    function Chartmusgos2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                6,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 6</br>Registros: 12</div>'
            ],
            [
                'En peligro SiB',
                2,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 2</br>Registros: 7</div>'
            ],
            [
                'Vulnerable SiB',
                21,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 21</br>Registros: 139</div>'
            ],
            ['Especies sin datos SiB Colombia', 13, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmusgos2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartmusgos3);

    function Chartmusgos3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmusgos3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartmusgos3b);

    function Chartmusgos3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmusgos3b')
        );
        chart.draw(data, options_graph3b);
    }


    // pie de literatura especies antocerotas

    google.charts.setOnLoadCallback(Chartantocerotas1);

    function Chartantocerotas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutantocerotas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartantocerotas1b);

    function Chartantocerotas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 9],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutantocerotas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartantocerotas2);

    function Chartantocerotas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutantocerotas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartantocerotas2b);

    function Chartantocerotas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutantocerotas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartantocerotas3);

    function Chartantocerotas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 6],
            ['Apéndice II', 2721],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutantocerotas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartantocerotas3b);

    function Chartantocerotas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutantocerotas3b')
        );
        chart.draw(data, options_graph3b);
    }


    // pie de literatura especies hepaticas

    google.charts.setOnLoadCallback(Charthepaticas1);

    function Charthepaticas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthepaticas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Charthepaticas1b);

    function Charthepaticas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 818],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthepaticas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Charthepaticas2);

    function Charthepaticas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 2],
            ['En peligro', 1],
            ['Vulnerable', 48]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthepaticas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Charthepaticas2b);

    function Charthepaticas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                0,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'En peligro SiB',
                1,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 71</div>'
            ],
            [
                'Vulnerable SiB',
                34,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 34</br>Registros: 216</div>'
            ],
            ['Especies sin datos SiB Colombia', 16, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthepaticas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Charthepaticas3);

    function Charthepaticas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthepaticas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Charthepaticas3b);

    function Charthepaticas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthepaticas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies orquideas

    google.charts.setOnLoadCallback(Chartorquideas1);

    function Chartorquideas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutorquideas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartorquideas1b);

    function Chartorquideas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 2368],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutorquideas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartorquideas2);

    function Chartorquideas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 6],
            ['En peligro', 64],
            ['Vulnerable', 136]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutorquideas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartorquideas2b);

    function Chartorquideas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                2,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 2</br>Registros: 96</div>'
            ],
            [
                'En peligro SiB',
                42,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 42</br>Registros: 338</div>'
            ],
            [
                'Vulnerable SiB',
                86,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 86</br>Registros: 427</div>'
            ],
            ['Especies sin datos SiB Colombia', 76, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutorquideas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartorquideas3);

    function Chartorquideas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 6],
            ['Apéndice II', 2671],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutorquideas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartorquideas3b);

    function Chartorquideas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                5,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 5</br>Registros: 75</div>'
            ],
            [
                'Apéndice II en SiB',
                1.208,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 1.208</br>Registros: 9.168</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 1464, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutorquideas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies magnolias y afines

    google.charts.setOnLoadCallback(Chartmagnolias1);

    function Chartmagnolias1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmagnolias1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartmagnolias1b);

    function Chartmagnolias1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 126],
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmagnolias1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartmagnolias2);

    function Chartmagnolias2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 15],
            ['En peligro', 20],
            ['Vulnerable', 10]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmagnolias2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartmagnolias2b);

    function Chartmagnolias2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                14,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 14</br>Registros: 151</div>'
            ],
            [
                'En peligro SiB',
                20,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 20</br>Registros: 447</div>'
            ],
            [
                'Vulnerable SiB',
                10,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 10</br>Registros: 5.595</div>'
            ],
            ['Especies sin datos SiB Colombia', 1, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmagnolias2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartmagnolias3);

    function Chartmagnolias3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmagnolias3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartmagnolias3b);

    function Chartmagnolias3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmagnolias3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies bromelias

    google.charts.setOnLoadCallback(Chartbromelias1);

    function Chartbromelias1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutbromelias1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartbromelias1b);

    function Chartbromelias1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1040],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutbromelias1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartbromelias2);

    function Chartbromelias2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 47],
            ['En peligro', 94],
            ['Vulnerable', 114]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutbromelias2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartbromelias2b);

    function Chartbromelias2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                30,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 30</br>Registros: 252</div>'
            ],
            [
                'En peligro SiB',
                67,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 67</br>Registros: 567</div>'
            ],
            [
                'Vulnerable SiB',
                88,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 88</br>Registros: 1.047</div>'
            ],
            ['Especies sin datos SiB Colombia', 70, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutbromelias2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartbromelias3);

    function Chartbromelias3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutbromelias3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartbromelias3b);

    function Chartbromelias3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutbromelias3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies palmas

    google.charts.setOnLoadCallback(Chartpalmas1);

    function Chartpalmas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpalmas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartpalmas1b);

    function Chartpalmas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 321],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpalmas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartpalmas2);

    function Chartpalmas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 7],
            ['En peligro', 22],
            ['Vulnerable', 25]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpalmas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartpalmas2b);

    function Chartpalmas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                7,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 7</br>Registros: 62</div>'
            ],
            [
                'En peligro SiB',
                22,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 22</br>Registros: 1.964</div>'
            ],
            [
                'Vulnerable SiB',
                23,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 23</br>Registros: 1.550</div>'
            ],
            ['Especies sin datos SiB Colombia', 2, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpalmas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartpalmas3);

    function Chartpalmas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpalmas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartpalmas3b);

    function Chartpalmas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpalmas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies zamias

    google.charts.setOnLoadCallback(Chartzamias1);

    function Chartzamias1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutzamias1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartzamias1b);

    function Chartzamias1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 23],
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutzamias1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartzamias2);

    function Chartzamias2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 8],
            ['En peligro', 9],
            ['Vulnerable', 4]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutzamias2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartzamias2b);

    function Chartzamias2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                ,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 8</br>Registros: 62</div>'
            ],
            [
                'En peligro SiB',
                8,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 8</br>Registros: 368</div>'
            ],
            [
                'Vulnerable SiB',
                4,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 4</br>Registros: 125</div>'
            ],
            ['Especies sin datos SiB Colombia', 1, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutzamias2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartzamias3);

    function Chartzamias3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 1],
            ['Apéndice II', 23],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutzamias3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartzamias3b);

    function Chartzamias3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                1,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 1</br>Registros: 10</div>'
            ],
            [
                'Apéndice II en SiB',
                18,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 18</br>Registros: 539</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 5, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutzamias3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies frailejones

    google.charts.setOnLoadCallback(Chartfrailejones1);

    function Chartfrailejones1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfrailejones1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartfrailejones1b);

    function Chartfrailejones1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 98],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfrailejones1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartfrailejones2);

    function Chartfrailejones2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 7],
            ['En peligro', 17],
            ['Vulnerable', 13]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfrailejones2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartfrailejones2b);

    function Chartfrailejones2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                7,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 7</br>Registros: 169</div>'
            ],
            [
                'En peligro SiB',
                17,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 17</br>Registros: 1285</div>'
            ],
            [
                'Vulnerable SiB',
                13,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 13</br>Registros: 1022</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfrailejones2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartfrailejones3);

    function Chartfrailejones3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfrailejones3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartfrailejones3b);

    function Chartfrailejones3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfrailejones3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies cactus

    google.charts.setOnLoadCallback(Chartcactus1);

    function Chartcactus1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcactus1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartcactus1b);

    function Chartcactus1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 62],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcactus1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartcactus2);

    function Chartcactus2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcactus2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartcactus2b);

    function Chartcactus2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcactus2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartcactus3);

    function Chartcactus3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 31],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcactus3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartcactus3b);

    function Chartcactus3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                25,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 25</br>Registros: 758</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 6, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcactus3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies pinos

    google.charts.setOnLoadCallback(Chartpinos1);

    function Chartpinos1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpinos1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartpinos1b);

    function Chartpinos1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 51],
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpinos1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartpinos2);

    function Chartpinos2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpinos2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartpinos2b);

    function Chartpinos2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpinos2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartpinos3);

    function Chartpinos3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpinos3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartpinos3b);

    function Chartpinos3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpinos3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies fenerogamas

    google.charts.setOnLoadCallback(Chartfenerogamas1);

    function Chartfenerogamas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfenerogamas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartfenerogamas1b);

    function Chartfenerogamas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 288],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfenerogamas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartfenerogamas2);

    function Chartfenerogamas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 11],
            ['En peligro', 28],
            ['Vulnerable', 34]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfenerogamas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartfenerogamas2b);

    function Chartfenerogamas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                11,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 11</br>Registros: 185</div>'
            ],
            [
                'En peligro SiB',
                26,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 26</br>Registros: 1059</div>'
            ],
            [
                'Vulnerable SiB',
                30,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 30</br>Registros: 373</div>'
            ],
            ['Especies sin datos SiB Colombia', 6, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfenerogamas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartfenerogamas3);

    function Chartfenerogamas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfenerogamas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartfenerogamas3b);

    function Chartfenerogamas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutfenerogamas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies pastos marinos

    google.charts.setOnLoadCallback(Chartpastosm1);

    function Chartpastosm1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpastosm1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartpastosm1b);

    function Chartpastosm1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 6],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpastosm1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartpastosm2);

    function Chartpastosm2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpastosm2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartpastosm2b);

    function Chartpastosm2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpastosm2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartpastosm3);

    function Chartpastosm3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 3],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpastosm3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartpastosm3b);

    function Chartpastosm3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpastosm3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies maderables

    google.charts.setOnLoadCallback(Chartmaderables1);

    function Chartmaderables1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmaderables1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartmaderables1b);

    function Chartmaderables1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 28],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmaderables1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartmaderables2);

    function Chartmaderables2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 8],
            ['En peligro', 13],
            ['Vulnerable', 7]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmaderables2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartmaderables2b);

    function Chartmaderables2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                8,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 8</br>Registros: 440</div>'
            ],
            [
                'En peligro SiB',
                12,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 12</br>Registros: 1.415</div>'
            ],
            [
                'Vulnerable SiB',
                7,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 7</br>Registros: 3.384</div>'
            ],
            ['Especies sin datos SiB Colombia', 1, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmaderables2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartmaderables3);

    function Chartmaderables3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 3],
            ['Apéndice III', 1]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmaderables3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartmaderables3b);

    function Chartmaderables3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                3,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 3</br>Registros: 111</div>'
            ],
            [
                'Apéndice III en SiB',
                1,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 1</br>Registros: 61</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmaderables3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies mangles

    google.charts.setOnLoadCallback(Chartmangles1);

    function Chartmangles1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmangles1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartmangles1b);

    function Chartmangles1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 7],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmangles1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartmangles2);

    function Chartmangles2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 1],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmangles2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartmangles2b);

    function Chartmangles2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                0,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 288</div>'
            ],
            [
                'En peligro SiB',
                1,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 16</div>'
            ],
            [
                'Vulnerable SiB',
                0,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 2.365</div>'
            ],
            ['Especies sin datos SiB Colombia', 1, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmangles2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartmangles3);

    function Chartmangles3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmangles3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartmangles3b);

    function Chartmangles3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                0,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: </div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmangles3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies algas marinas

    google.charts.setOnLoadCallback(Chartalgasmarinas1);

    function Chartalgasmarinas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasmarinas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartalgasmarinas1b);

    function Chartalgasmarinas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 292],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasmarinas1b')
        );
        chart.draw(data, options_graph1b);
    }


    google.charts.setOnLoadCallback(Chartalgasmarinas2);

    function Chartalgasmarinas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasmarinas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartalgasmarinas2b);

    function Chartalgasmarinas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasmarinas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartalgasmarinas3);

    function Chartalgasmarinas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasmarinas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartalgasmarinas3b);

    function Chartalgasmarinas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasmarinas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies algas dulceacuícolas

    google.charts.setOnLoadCallback(Chartalgasdulceacuicolas1);

    function Chartalgasdulceacuicolas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 605]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasdulceacuicolas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartalgasdulceacuicolas1b);

    function Chartalgasdulceacuicolas1b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'SiB');
        data.addColumn({type: 'string', role: 'tooltip'});
        data.addRows([['Sin dato', 100, 'Dato en construcción']]);

        var options = {
            titlePosition: 'none',
            pieHole: 0.9,
            backgroundColor: 'transparent',
            legend: {position: 'none'},
            chartArea: {width: '222', height: '222'},
            pieSliceBorderColor: 'none',
            slices: {0: {color: '#e7e9ed'}},
            sliceVisibilityThreshold: '0',
            fontSize: '12',
            pieSliceText: 'none',
            tooltip: {isHtml: true, textStyle: {color: '#fff'}}
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasdulceacuicolas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartalgasdulceacuicolas2b);

    function Chartalgasdulceacuicolas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasdulceacuicolas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartalgasdulceacuicolas3);

    function Chartalgasdulceacuicolas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasdulceacuicolas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartalgasdulceacuicolas3b);

    function Chartalgasdulceacuicolas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasdulceacuicolas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies algas terrestres

    google.charts.setOnLoadCallback(Chartalgasterrestres1);

    function Chartalgasterrestres1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 46]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasterrestres1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartalgasterrestres1b);

    function Chartalgasterrestres1b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'SiB');
        data.addColumn({type: 'string', role: 'tooltip'});
        data.addRows([['Sin dato', 100, 'Dato en construcción']]);

        var options = {
            titlePosition: 'none',
            pieHole: 0.9,
            backgroundColor: 'transparent',
            legend: {position: 'none'},
            chartArea: {width: '222', height: '222'},
            pieSliceBorderColor: 'none',
            slices: {0: {color: '#e7e9ed'}},
            sliceVisibilityThreshold: '0',
            fontSize: '12',
            pieSliceText: 'none',
            tooltip: {isHtml: true, textStyle: {color: '#fff'}}
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasterrestres2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartalgasterrestres2b);

    function Chartalgasterrestres2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasterrestres2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartalgasterrestres3);

    function Chartalgasterrestres3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasterrestres3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartalgasterrestres3b);

    function Chartalgasterrestres3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutalgasterrestres3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies otras algas

    google.charts.setOnLoadCallback(Chartotrasalgas1);

    function Chartotrasalgas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 28]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutotrasalgas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartotrasalgas1b);

    function Chartotrasalgas1b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'SiB');
        data.addColumn({type: 'string', role: 'tooltip'});
        data.addRows([['Sin dato', 0, 'Dato en construcción']]);

        var options = {
            titlePosition: 'none',
            pieHole: 0.9,
            backgroundColor: 'transparent',
            legend: {position: 'none'},
            chartArea: {width: '222', height: '222'},
            pieSliceBorderColor: 'none',
            slices: {0: {color: '#e7e9ed'}},
            sliceVisibilityThreshold: '0',
            fontSize: '12',
            pieSliceText: 'none',
            tooltip: {isHtml: true, textStyle: {color: '#fff'}}
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutotrasalgas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartotrasalgas2b);

    function Chartotrasalgas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutotrasalgas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartotrasalgas3);

    function Chartotrasalgas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutotrasalgas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartotrasalgas3b);

    function Chartotrasalgas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutotrasalgas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies liquenes

    google.charts.setOnLoadCallback(Chartliquenes1);

    function Chartliquenes1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutliquenes1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartliquenes1b);

    function Chartliquenes1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1242],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutliquenes1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartliquenes2);

    function Chartliquenes2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutliquenes2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartliquenes2b);

    function Chartliquenes2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutliquenes2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartliquenes3);

    function Chartliquenes3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutliquenes3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartliquenes3b);

    function Chartliquenes3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutliquenes3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies macrohongos

    google.charts.setOnLoadCallback(Chartmacrohongos1);

    function Chartmacrohongos1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmacrohongos1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartmacrohongos1b);

    function Chartmacrohongos1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1758],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmacrohongos1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartmacrohongos2);

    function Chartmacrohongos2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmacrohongos2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartmacrohongos2b);

    function Chartmacrohongos2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmacrohongos2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartmacrohongos3);

    function Chartmacrohongos3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmacrohongos3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartmacrohongos3b);

    function Chartmacrohongos3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmacrohongos3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies royas

    google.charts.setOnLoadCallback(Chartroyas1);

    function Chartroyas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 456]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutroyas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartroyas1b);

    function Chartroyas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 0],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutroyas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartroyas2);

    function Chartroyas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutroyas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartroyas2b);

    function Chartroyas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutroyas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartroyas3);

    function Chartroyas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutroyas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartroyas3b);

    function Chartroyas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutroyas3b')
        );
        chart.draw(data, options_graph3b);
    }

    // pie de literatura especies carbones

    google.charts.setOnLoadCallback(Chartcarbones1);

    function Chartcarbones1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 71]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcarbones1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(Chartcarbones1b);

    function Chartcarbones1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 0],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcarbones1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(Chartcarbones2);

    function Chartcarbones2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcarbones2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(Chartcarbones2b);

    function Chartcarbones2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcarbones2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(Chartcarbones3);

    function Chartcarbones3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcarbones3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartcarbones3b);

    function Chartcarbones3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutcarbones3b')
        );
        chart.draw(data, options_graph3b);
    }
}

//final graficas

//funciones graficas de mamiferos tercer nivel
$('.mamiferosback').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.mamiferos').css('display', 'block');
});

$('.mamiferosm').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.mamiferosmgraph').css('display', 'block');


    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartmama1);

    function Chartmama1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmama1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartmama1b);

    function Chartmama1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 32],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmama1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartmama2);

    function Chartmama2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 5],
            ['Vulnerable', 2]
        ]);

          

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmama2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartmama2b);

    function Chartmama2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                0,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'En peligro SiB',
                5,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 5</br>Registros: 179</div>'
            ],
            [
                'Vulnerable SiB',
                2,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 2</br>Registros: 13</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmama2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartMama3);

    function ChartMama3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 9],
            ['Apéndice II', 19],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmama3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartMama3b);

    function ChartMama3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                9,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 9</br>Registros: 195</div>'
            ],
            [
                'Apéndice II en SiB',
                18,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 18</br>Registros: 58</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 1, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmama3b')
        );
        chart.draw(data, options_graph3b);
    }
});

//funciones graficas de reptiles tercer nivel
$('.reptilesback').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.reptiles').css('display', 'block');
});

$('.reptilesm').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.reptilesmgraph').css('display', 'block');


    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(ChartReptilm1);

    function ChartReptilm1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptilm1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(ChartReptil1b);

    function ChartReptil1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 6],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptilm1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(ChartReptilm2);

    function ChartReptilm2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 3],
            ['En peligro', 1],
            ['Vulnerable', 1]
        ]);

          

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptilm2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(ChartReptilm2b);

    function ChartReptilm2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                3,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 410</div>'
            ],
            [
                'En peligro SiB',
                1,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 5</br>Registros: 555</div>'
            ],
            [
                'Vulnerable SiB',
                1,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 2</br>Registros: 184</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptilm2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartMama3);

    function ChartMama3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 6],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptilm3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartReptilm3b);

    function ChartReptilm3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                5,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 5</br>Registros: 1.149</div>'
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
            ['Especies sin datos SiB Colombia', 21, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutreptilm3b')
        );
        chart.draw(data, options_graph3b);
    }
});

//funciones graficas de peces tercer nivel

$('.pecesback').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.peces').css('display', 'block');
});

$('.pecesm').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.pecesmgraph').css('display', 'block');

    // pie de literatura especies peces marinos

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartpecesm1);

    function Chartpecesm1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesm1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartpecesm1b);

    function Chartpecesm1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 2493],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesm1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartpecesm2);

    function Chartpecesm2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 1],
            ['En peligro', 2],
            ['Vulnerable', 9]
        ]);

          

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesm2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartpecesm2b);

    function Chartpecesm2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                1,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 1</br>Registros: 3</div>'
            ],
            [
                'En peligro SiB',
                2,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 2</br>Registros: 49</div>'
            ],
            [
                'Vulnerable SiB',
                7,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 7</br>Registros: 34</div>'
            ],
            ['Especies sin datos SiB Colombia', 2, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesm2b')
        );
        chart.draw(data, options_graph2b);
    }
    google.charts.setOnLoadCallback(Chartpecesm3);

    function Chartpecesm3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 3],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesm3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartpecesm3b);

    function Chartpecesm3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                3,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 3</br>Registros: 12</div>'
            ],
            [
                'Apéndice III en SiB',
                0,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesm3b')
        );
        chart.draw(data, options_graph3b);
    }
});

$('.pecesd').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.pecesdgraph').css('display', 'block');

    // pie de literatura especies peces dulces

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartpecesd1);

    function Chartpecesd1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 1341]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesd1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartpecesd1b);

    function Chartpecesd1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1341],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesd1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartpecesd2);

    function Chartpecesd2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 2],
            ['En peligro', 3],
            ['Vulnerable', 49]
        ]);

          

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesd2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(Chartpecesd2b);

    function Chartpecesd2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                2,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 2</br>Registros: 2.048</div>'
            ],
            [
                'En peligro SiB',
                3,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 3</br>Registros: 134</div>'
            ],
            [
                'Vulnerable SiB',
                46,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 46</br>Registros: 3.395</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesd2b')
        );
        chart.draw(data, options_graph2b);
    }


    google.charts.setOnLoadCallback(Chartpecesd3);

    function Chartpecesd3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 1],
            ['Apéndice III', 4]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesd3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(Chartpecesd3b);

    function Chartpecesd3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'Apéndice I en SiB',
                0,
                '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Apéndice II en SiB',
                2,
                '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 2</br>Registros: 2</div>'
            ],
            [
                'Apéndice III en SiB',
                4,
                '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 4</br>Registros: 429</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutpecesd3b')
        );
        chart.draw(data, options_graph3b);
    }
});

//funciones graficas de insectos tercer nivel

$('.insectosback').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.insectos').css('display', 'block');
});

$('.escarabajos').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_escarabajos').css('display', 'block');

    // pie de literatura especies escarabajos
    google.charts.setOnLoadCallback(ChartinsectosEscarabajos1);

    function ChartinsectosEscarabajos1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutescarabajos1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartinsectosEscarabajos1b);

    function ChartinsectosEscarabajos1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1192],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutescarabajos1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartinsectosEscarabajos2);

    function ChartinsectosEscarabajos2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 1],
            ['Vulnerable', 4]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutescarabajos2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartinsectosEscarabajos2b);

    function ChartinsectosEscarabajos2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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
                2,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 2</br>Registros: 7</div>'
            ],
            ['Especies sin datos SiB Colombia', 2, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutescarabajos2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartinsectosEscarabajos3);

    function ChartinsectosEscarabajos3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutescarabajos3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartinsectosEscarabajos3b);

    function ChartinsectosEscarabajos3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutescarabajos3b')
        );
        chart.draw(data, options_graph3b);
    }
});

$('.mariposas').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_mariposas').css('display', 'block');

    // pie de literatura especies mariposas
    google.charts.setOnLoadCallback(ChartinsectosMariposas1);

    function ChartinsectosMariposas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmariposas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartinsectosMariposas1b);

    function ChartinsectosMariposas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 1905],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmariposas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartinsectosMariposas2);

    function ChartinsectosMariposas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 1],
            ['En peligro', 6],
            ['Vulnerable', 5]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmariposas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartinsectosMariposas2b);

    function ChartinsectosMariposas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                0,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'En peligro SiB',
                ,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 3</br>Registros: 20</div>'
            ],
            [
                'Vulnerable SiB',
                1,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
            ],
            ['Especies sin datos SiB Colombia', 8, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmariposas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartinsectosMariposas3);

    function ChartinsectosMariposas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmariposas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartinsectosMariposas3b);

    function ChartinsectosMariposas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmariposas3b')
        );
        chart.draw(data, options_graph3b);
    }
});

$('.hormigas').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_hormigas').css('display', 'block');

    // pie de literatura especies hormigas
    google.charts.setOnLoadCallback(ChartinsectosHormigas1);

    function ChartinsectosHormigas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthormigas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartinsectosHormigas1b);

    function ChartinsectosHormigas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 774],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthormigas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartinsectosHormigas2);

    function ChartinsectosHormigas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 2]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthormigas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartinsectosHormigas2b);

    function ChartinsectosHormigas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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
                2,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 2</br>Registros: 3</div>'
            ],
            ['Especies sin datos SiB Colombia', 0, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthormigas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartinsectosHormigas3);

    function ChartinsectosHormigas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthormigas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartinsectosHormigas3b);

    function ChartinsectosHormigas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donuthormigas3b')
        );
        chart.draw(data, options_graph3b);
    }
});

$('.abejas').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_abejas').css('display', 'block');

    // pie de literatura especies abejas
    google.charts.setOnLoadCallback(ChartinsectosAbejas1);

    function ChartinsectosAbejas1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutabejas1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartinsectosAbejas1b);

    function ChartinsectosAbejas1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 166],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutabejas1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartinsectosAbejas2);

    function ChartinsectosAbejas2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 4],
            ['En peligro', 4],
            ['Vulnerable', 3]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutabejas2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartinsectosAbejas2b);

    function ChartinsectosAbejas2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
        data.addRows([
            [
                'En peligro crítico SiB',
                3,
                '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 3</br>Registros: 29</div>'
            ],
            [
                'En peligro SiB',
                0,
                '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
            ],
            [
                'Vulnerable SiB',
                2,
                '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 2</br>Registros: 33</div>'
            ],
            ['Especies sin datos SiB Colombia', 6, '']
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutabejas2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartinsectosAbejas3);

    function ChartinsectosAbejas3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutabejas3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartinsectosAbejas3b);

    function ChartinsectosAbejas3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutabejas3b')
        );
        chart.draw(data, options_graph3b);
    }
});

$('.dipteros').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_dipteros').css('display', 'block');

    // pie de literatura especies dipteros
    google.charts.setOnLoadCallback(ChartinsectosDipteros1);

    function ChartinsectosDipteros1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdipteros1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartinsectosDipteros1b);

    function ChartinsectosDipteros1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 793],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdipteros1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartinsectosDipteros2);

    function ChartinsectosDipteros2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdipteros2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartinsectosDipteros2b);

    function ChartinsectosDipteros2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdipteros2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartinsectosDipteros3);

    function ChartinsectosDipteros3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdipteros3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartinsectosDipteros3b);

    function ChartinsectosDipteros3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdipteros3b')
        );
        chart.draw(data, options_graph3b);
    }
});

//funciones graficas de moluscos tercer nivel

$('.moluscosback').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.moluscos').css('display', 'block');
});

$('.marinos').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_marinos').css('display', 'block');

    // pie de literatura especies moluscos marinos
    google.charts.setOnLoadCallback(ChartmoluscosMarinos1);

    function ChartmoluscosMarinos1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmarinos1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartmoluscosMarinos1b);

    function ChartmoluscosMarinos1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 531],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmarinos1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartmoluscosMarinos2);

    function ChartmoluscosMarinos2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmarinos2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartmoluscosMarinos2b);

    function ChartmoluscosMarinos2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmarinos2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartmoluscosMarinos3);

    function ChartmoluscosMarinos3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmarinos3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartmoluscosMarinos3b);

    function ChartmoluscosMarinos3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutmarinos3b')
        );
        chart.draw(data, options_graph3b);
    }
});

$('.terrestres').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_terrestres').css('display', 'block');

    // pie de literatura especies moluscos terrestres
    google.charts.setOnLoadCallback(ChartmoluscosTerrestres1);

    function ChartmoluscosTerrestres1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 650]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutterrestres1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartmoluscosTerrestres1b);

    function ChartmoluscosTerrestres1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 0],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutterrestres1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartmoluscosTerrestres2);

    function ChartmoluscosTerrestres2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutterrestres2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartmoluscosTerrestres2b);

    function ChartmoluscosTerrestres2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutterrestres2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartmoluscosTerrestres3);

    function ChartmoluscosTerrestres3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutterrestres3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartmoluscosTerrestres3b);

    function ChartmoluscosTerrestres3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutterrestres3b')
        );
        chart.draw(data, options_graph3b);
    }
});

//funciones graficas de decápodos tercer nivel

$('.decapodosback').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.decapodos').css('display', 'block');
});

$('.decapodos_marinos').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_decapodos_marinos').css('display', 'block');

    // pie de literatura especies decapodos marinos
    google.charts.setOnLoadCallback(ChartdecapodosMarinos1);

    function ChartdecapodosMarinos1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 1057]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosmarinos1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartdecapodosMarinos1b);

    function ChartdecapodosMarinos1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 0],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosmarinos1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartdecapodosMarinos2);

    function ChartdecapodosMarinos2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 7]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosmarinos2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartdecapodosMarinos2b);

    function ChartdecapodosMarinos2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosmarinos2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartdecapodosMarinos3);

    function ChartdecapodosMarinos3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosmarinos3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartdecapodosMarinos3b);

    function ChartdecapodosMarinos3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosmarinos3b')
        );
        chart.draw(data, options_graph3b);
    }
});

$('.decapodos_terrestres').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_decapodos_terrestres').css('display', 'block');

    // pie de literatura especies decapodos terrestres
    google.charts.setOnLoadCallback(ChartdecapodosTerrestres1);

    function ChartdecapodosTerrestres1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 688]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosterrestres1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartdecapodosTerrestres1b);

    function ChartdecapodosTerrestres1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 0],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosterrestres1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartdecapodosTerrestres2);

    function ChartdecapodosTerrestres2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 0],
            ['Vulnerable', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosterrestres2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartdecapodosTerrestres2b);

    function ChartdecapodosTerrestres2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosterrestres2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartdecapodosTerrestres3);

    function ChartdecapodosTerrestres3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosterrestres3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartdecapodosTerrestres3b);

    function ChartdecapodosTerrestres3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosterrestres3b')
        );
        chart.draw(data, options_graph3b);
    }
});

$('.decapodos_dulceacuicolas').on('click', function () {
    $('.grapharea').css('display', 'none');
    $('.graph_decapodos_dulceacuicolas').css('display', 'block');

    // pie de literatura especies decapodos dulce
    google.charts.setOnLoadCallback(ChartdecapodosDulce1);

    function ChartdecapodosDulce1() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Representatividad de especies', 104]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosdulce1')
        );
        chart.draw(data, options_graph1);
    }

    google.charts.setOnLoadCallback(ChartdecapodosDulce1b);

    function ChartdecapodosDulce1b() {
        var data = google.visualization.arrayToDataTable([
            ['Titulo', 'SiB'],
            ['Especies con evidencia en el SiB Colombia', 0],
            ['Especies sin datos SiB Colombia', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosdulce1b')
        );
        chart.draw(data, options_graph1b);
    }

    google.charts.setOnLoadCallback(ChartdecapodosDulce2);

    function ChartdecapodosDulce2() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['En peligro crítico', 0],
            ['En peligro', 25],
            ['Vulnerable', 1]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosdulce2')
        );
        chart.draw(data, options_graph2);
    }

    google.charts.setOnLoadCallback(ChartdecapodosDulce2b);

    function ChartdecapodosDulce2b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosdulce2b')
        );
        chart.draw(data, options_graph2b);
    }

    google.charts.setOnLoadCallback(ChartdecapodosDulce3);

    function ChartdecapodosDulce3() {
        var data = google.visualization.arrayToDataTable([
            ['Especies estimadas', 'Número de especies'],
            ['Apéndice I', 0],
            ['Apéndice II', 0],
            ['Apéndice III', 0]
        ]);

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosdulce3')
        );
        chart.draw(data, options_graph3);
    }

    google.charts.setOnLoadCallback(ChartdecapodosDulce3b);

    function ChartdecapodosDulce3b() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Título');
        data.addColumn('number', 'Especies');
        data.addColumn({type: 'string', role: 'tooltip', p: {html: true}});
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

        var chart = new google.visualization.PieChart(
            document.getElementById('donutdecapodosdulce3b')
        );
        chart.draw(data, options_graph3b);
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

    google.charts.load('current', {packages: ['corechart']});
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
                titleTextStyle: {color: '#6f6f6f'},
                gridlines: {color: '#fff', count: 10},
                textStyle: {color: '#6f6f6f', fontSize: 12}
            },
            vAxis: {
                title: 'Número especies observadas (en miles)',
                titleTextStyle: {color: '#6f6f6f'},
                minValue: 0,
                gridlines: {color: '#fff'},
                format: 'short',
                textStyle: {color: '#6f6f6f', fontSize: 12}
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

    google.charts.load('current', {packages: ['corechart']});
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
                titleTextStyle: {color: '#6f6f6f'},
                gridlines: {color: '#fff', count: 10},
                textStyle: {color: '#6f6f6f', fontSize: 12}
            },
            vAxis: {
                title: 'Número especies observadas (en miles)',
                titleTextStyle: {color: '#6f6f6f'},
                minValue: 0,
                gridlines: {color: '#fff'},
                format: 'short',
                textStyle: {color: '#6f6f6f', fontSize: 12}
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

    google.charts.load('current', {packages: ['geochart']});
    google.charts.setOnLoadCallback(drawMarkersMap2);

    function drawMarkersMap2() {
        var data = google.visualization.arrayToDataTable([
            ['Departament', 'Nombre', 'Registros'],
            ['CO-DC', 'Bogotá Distrito Capital', 123729],
            ['CO-AMA', 'Amazonas', 137401],
            ['CO-ANT', 'Antioquia', 779541],
            ['CO-ARA', 'Arauca', 39093],
            ['CO-ATL', 'Atlántico', 27325],
            ['CO-BOL', 'Bolívar', 81830],
            ['CO-BOY', 'Boyacá', 215423],
            ['CO-CAL', 'Caldas', 453381],
            ['CO-CAQ', 'Caquetá', 90642],
            ['CO-CAS', 'Casanare', 139579],
            ['CO-CAU', 'Cauca', 140311],
            ['CO-CES', 'Cesar', 49295],
            ['CO-COR', 'Córdoba', 67101],
            ['CO-CUN', 'Cundinamarca', 396832],
            ['CO-CHO', 'Chocó', 223583],
            ['CO-GUA', 'Guainía', 56281],
            ['CO-GUV', 'Guaviare', 46907],
            ['CO-HUI', 'Huila', 85466],
            ['CO-LAG', 'La Guajira', 137616],
            ['CO-MAG', 'Magdalena', 372369],
            ['CO-MET', 'Meta', 271233],
            ['CO-NAR', 'Nariño', 488525],
            ['CO-NSA', 'Norte de Santander', 34243],
            ['CO-PUT', 'Putumayo', 133293],
            ['CO-QUI', 'Quindío', 135245],
            ['CO-RIS', 'Risaralda', 293569],
            ['CO-ARC', 'San Andrés, Providencia y Santa Catalina', 1823],
            ['CO-SAN', 'Santander', 220049],
            ['CO-SUC', 'Sucre', 72474],
            ['CO-TOL', 'Tolima', 333974],
            ['CO-VAC', 'Valle del Cauca', 685998],
            ['CO-VAU', 'Vaupés', 66572],
            ['CO-VID', 'Vichada', 66045]
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
                textStyle: {color: '#fff', fontName: 'Open Sans'}
            }
        };

        var chart = new google.visualization.GeoChart(
            document.getElementById('chart_div2')
        );
        chart.draw(data, options);
    }
}

//graficas que cargan al inicio

$(document).ready(function () {
    // Tooltip only Text

    $('.masterTooltip')
        .hover(
            function () {
                var title = $(this).attr('title');
                $(this)
                    .data('tipText', title)
                    .removeAttr('title');
                $('<p class="tooltip"></p>')
                    .text(title)
                    .appendTo('body')
                    .fadeIn('fast');
            },
            function () {
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
            }
        )
        .mousemove(function (e) {
            var mousex = e.pageX + 20;
            var mousey = e.pageY + 10;
            $('.tooltip').css({top: mousey, left: mousex});
        });

    $('.masterTooltip2')
        .hover(
            function () {
                var title = $(this).attr('title');
                $(this)
                    .data('tipText', title)
                    .removeAttr('title');
                $('<p class="tooltip2"></p>')
                    .text(title)
                    .appendTo('body')
                    .fadeIn('fast');
            },
            function () {
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip2').remove();
            }
        )
        .mousemove(function (e) {
            var mousex = e.pageX + 20;
            var mousey = e.pageY + 10;
            $('.tooltip2').css({top: mousey, left: mousex});
        });

    //primer grafica de especies

    google.charts.load('current', {packages: ['corechart']});
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
                titleTextStyle: {color: '#6f6f6f'},
                gridlines: {color: '#fff', count: 8},
                textStyle: {color: '#6f6f6f', fontSize: 12}
            },
            vAxis: {
                title: 'Número especies observadas (en miles)',
                titleTextStyle: {color: '#6f6f6f'},
                minValue: 0,
                gridlines: {color: '#fff'},
                format: 'short',
                textStyle: {color: '#6f6f6f', fontSize: 12}
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

    $('.databox input').on('click', function () {
        $('.databox .acttabbtn').removeClass('acttabbtn');
        $(this).addClass('acttabbtn');
    });

    //mapa paises

    google.charts.load('current', {packages: ['geochart']});
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
                textStyle: {color: '#fff', fontName: 'Open Sans'}
            }
        };

        var chart = new google.visualization.GeoChart(
            document.getElementById('regions_div')
        );

        chart.draw(data, options);
    }

    //mapa departamentos especies

    google.charts.load('current', {packages: ['geochart']});
    google.charts.setOnLoadCallback(drawMarkersMap);

    function drawMarkersMap() {
        var data = google.visualization.arrayToDataTable([
            ['Departament', 'Nombre', 'Especies'],
            ['CO-DC', 'Bogotá Distrito Capital', 4180],
            ['CO-AMA', 'Amazonas', 8348],
            ['CO-ANT', 'Antioquia', 15199],
            ['CO-ARA', 'Arauca', 3256],
            ['CO-ATL', 'Atlántico', 1826],
            ['CO-BOL', 'Bolívar', 4333],
            ['CO-BOY', 'Boyacá', 7793],
            ['CO-CAL', 'Caldas', 6893],
            ['CO-CAQ', 'Caquetá', 7793],
            ['CO-CAS', 'Casanare', 4462],
            ['CO-CAU', 'Cauca', 8195],
            ['CO-CES', 'Cesar', 2664],
            ['CO-COR', 'Córdoba', 3211],
            ['CO-CUN', 'Cundinamarca', 9492],
            ['CO-CHO', 'Chocó', 9905],
            ['CO-GUA', 'Guainía', 3309],
            ['CO-GUV', 'Guaviare', 3544],
            ['CO-HUI', 'Huila', 4870],
            ['CO-LAG', 'La Guajira', 2847],
            ['CO-MAG', 'Magdalena', 6763],
            ['CO-MET', 'Meta', 15854],
            ['CO-NAR', 'Nariño', 8292],
            ['CO-NSA', 'Norte de Santander', 3715],
            ['CO-PUT', 'Putumayo', 6114],
            ['CO-QUI', 'Quindío', 3840],
            ['CO-RIS', 'Risaralda', 5968],
            ['CO-ARC', 'San Andrés, Providencia y Santa Catalina', 642],
            ['CO-SAN', 'Santander', 9916],
            ['CO-SUC', 'Sucre', 2285],
            ['CO-TOL', 'Tolima', 6700],
            ['CO-VAC', 'Valle del Cauca', 10847],
            ['CO-VAU', 'Vaupés', 4409],
            ['CO-VID', 'Vichada', 3915]
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
                textStyle: {color: '#fff', fontName: 'Open Sans'}
            }
        };

        var chart = new google.visualization.GeoChart(
            document.getElementById('chart_div')
        );
        chart.draw(data, options);
    }

    //tabs de mapa departamentos

    $('.mapsdep input').on('click', function () {
        $('.mapsdep .acttabbtn').removeClass('acttabbtn');
        $(this).addClass('acttabbtn');
    });
});
