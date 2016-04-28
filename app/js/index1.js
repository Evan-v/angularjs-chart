/**
 * Created by fue on 2016/4/25.
 */

    var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    var aa='';
    var bb='';
    $scope.getsValue =function(){
        aa=$scope.startnum;
    };
    $scope.geteValue=function(){
        bb=$scope.endnum;

    };
    var arr = [5, 7, 3, 4, 3, 2, 5, 6, 3, 1, 7, 4, 3.5, 1.3, 5, 6, 3, 4, 3, 2, 5, 6, 3, 1, 7, 4, 3.5, 1.3, 8, 7, 3, 4, 3, 2, 5, 6, 3, 3, 7, 4, 3.5, 1.3,
        5, 7, 3, 4, 3, 2, 5, 6, 3, 1, 7, 4, 3.5, 1.3, 3, 4, 3, 2.1, 5, 6.6, 3, 1.6, 7, 4, 3.5, 1.3, 1.6, 7, 4, 3.5, 1.3, 1.3, 5, 6, 3, 4, 3, 2,
        6, 3, 4, 3, 2, 5, 6, 3, 1, 7, 4, 3.5, 1.3, 8, 7, 2.3, 3.4, 5.2, 1.5, 6.5, 5.5, 7, 9.5, 3, 4, 2, 5, 7, 4, 6.4, 5, 7];
    //$(function () {
        //var chart;


        var data=  {
//                    Highcharts.setOptions({
            colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655',
                '#FFF263', '#6AF9C4'],
//                });
            plotOptions: {
                line: {
                    lineWidth: 2, states: {hover: {lineWidth: 3}},
                    marker: {enabled: false},
//                            pointInterval: 3600000,
//                            pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)

                    //dataLabels: {
                    //    enabled: true
                    //}
                }
            },
            chart: {
                renderTo: 'my_container',
                type: 'line',
                width: 1100,
                zoomType: 'x',
                panning: true,
                panKey: 'shift'
//                    panning: true,
//                        zoomType:'x'
//                    margin:[0,0,0,0]
            },

            title: {
                text: 'chart line'
            },
            xAxis: {
//                        categories: [1,2,3,4,5,6,7,8,9,10,11,12]
            },
            yAxis: {
                title: {
                    text: 'Text'
                }
            },
            credits: {
                enabled: false // remove high chart logo hyper-link
            },
            series: [{
                name: 'Jane',
                data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
            }, {
                name: 'John',
                data: arr
            }, {
                name: 'aaaa',
                data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
                    , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            }


            ]

        }

        // initialization chart and actions
        $(document).ready(function () {
        //chart = new Highcharts.Chart(data);
        //    $('#my_container').highcharts( );


          var  chart = new Highcharts.Chart(data);

            $('#backbtn').on('click',function(e){
                console.log(11);
                //var chart = $('#my_container').highcharts();


            });
            // JQuery, mouse click event bind with dom buttons
            $('#clear-button').on('click', function (e) {
            });

            $('#refresh-button').on('click', function (e) {
                refreshPlot();
            });
            $('#addbutton').on('click', function (e) {
                clearPlot();

                addplot();
            })
        });

        $scope.cleardata = function(){
            clearPlot();

        };

        $scope.startback=function(){
            console.log('angular');
            var aa =new Highcharts.Chart(data);
            aa.reflow();
        };
        function addplot() {

            var chart = $('#my_container').highcharts();

            var newarr = arr.slice(aa, bb);
            console.log(aa);
            console.log(bb);
            console.log(newarr);
            chart.addSeries({
                id: 3,
                name: "zhang-san",
                data: newarr
            }, false);

            chart.redraw();


        }


        // clear all series of the chart
        function clearPlot() {
            //console.log("clear plot data!!!");
            var chart = $('#my_container').highcharts();

            var series = chart.series;
            while (series.length > 0) {
                series[0].remove(false);
            }
            chart.redraw();
        };

        setTimeout(function(){

            },2000);
        function refreshPlot() {
            var chart = $('#my_container').highcharts();

            //console.log("refresh plot data!!!");
            chart.addSeries({
                id: 1,
                name: "gloomyfish",
                data: [
                    [4.23],
                    [4.22],
                    [4.11],
                    [4.14],
                    [4.13],
                    [4.12],
                    [4.15],
                    [4.33],
                    [4.35],
                    [4.37],
                    [5.1],
                    [5.1]
                ]
            }, false);
            chart.addSeries({
                id: 2,
                name: "wang-er-ma",
                data: [[1, 3.92],
                    [3.92],
                    [3.92],
                    [3.92],
                    [3.92],
                    [3.88],
                    [3.9],
                    [3.8],
                    [3.89],
                    [3.9],
                    [4.43],
                    [4.44]]
            }, false);
            chart.addSeries({
                id: 3,
                name: "zhang-san",
                data: [[1, 4.52],
                    [4.18],
                    [4.51],
                    [4.26],
                    [4.23],
                    [4.2],
                    [4.28],
                    [4.83],
                    [4.83],
                    [4.88],
                    [7.1],
                    [7.12]]
            }, false);

            chart.redraw();
        };


    });
    function crte(){
        console.log(123);
        console.log(aaa);
    }
//});