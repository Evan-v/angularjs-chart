/**
 * Created by fue on 2016/4/25.
 */

/**
 * hightcharts global
 */
Highcharts.setOptions({
    global: {useUTC: false}
});

/**
 * my credits
 */
var defaultCredits = {
    href: 'http://blog.fens.me',
    position: {x: -30, y: -30},
    style: {color: '#191a37', fontWeight: 'bold'},
    text: 'http://blog.fens.me'
}

/**
 * transfer Datetime: 20130101101010 to time
 */
function transferDate(json) {
    for (var i = 0; i < json.length; i++) {
        var obj = json[i].data;
        for (var j = 0; j < obj.length; j++) {
            obj[j][0] = moment(obj[j][0], 'YYYYMMDDHHmmss').toDate().getTime();
        }
    }
    return json;
}

/**
 * Spline Chart Template
 */
var logarithmic = [1,2,3,4,5,6,7,8,9,10,11,12];
function getSplineChart(series) {
    return {
        chart: {
            type: 'spline',
            animation: Highcharts.svg,
            marginRight: 10,
            panning: true,
            zoomType: 'x',
            panKey: 'shift'

        },
        title: {
            text: 'Title'
        },
        credits: defaultCredits,
        xAxis: {
            maxPadding: 0.05, minPadding: 0.05, type: 'datetime', tickWidth: 5,
            labels: {
                formatter: function() {
                    return Highcharts.dateFormat('%H:%M:%S', this.value);
                }
            },
            //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            //series: [{
            //    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            //}]

        },
        yAxis: {
            title: {text: 'yAxis'},
            plotLines: [
                {value: 0, width: 1, color: '#808080'}
            ]
        },
        //数据提示框
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        //图例开关
        legend: {enabled: true},
        exporting: {enabled: false},
        //线条样式
        plotOptions: {
            spline: {
                lineWidth: 4, states: {hover: {lineWidth: 5}},
                marker: {enabled: false},
                pointInterval: 3600000,
                pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
            }
        },
        series: series
    };
}

/**
 * Create a spline
 */
function createSpline(id,url,transDate){
    $.get(url, function (json) {
        if(transDate||false) json=transferDate(json);
        $(id).highcharts(getSplineChart(json));
    });
}
createSpline('#container','json/line.json',true);


//series: [{
//    name: 'Tokyo',
//    marker: {
//        symbol: 'square'//点形状
//    },
//    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
//        y: 26.5,
//        marker: {//值为26.5参数
//            fillColor: '#FF0000',//点填充色
//
//            lineColor: '#FF0000',//点边框色
//
//            states:{//鼠标经过
//
//                hover:{
//
//                    fillColor: '#FF0000',//点填充色
//
//                    lineColor: '#FF0000'//点边框色
//
//                }
//
//            }
//        }
//    }, 23.3, 18.3, 13.9, 9.6]
//
//}]