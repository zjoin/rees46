$(document).ready(function(){
    
 
    
   var dd1 = [
    {
        value: 190,
        color:"#ffffff",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 500,
        color: "#00aeef",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 350,
        color: "#1a2a34",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 80,
        color: "#121e25",
        highlight: "#FFC870",
        label: "Yellow"
    }   
]
   

var data = {
    labels: ["16 апр", "17 апр", "18 апр",
             "19 апр", "20 апр", "21 апр",
             "22 апр", "", "24 апр",
             "25 апр", "26 апр", "27 апр",
             "28 апр", "29 апр" ],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "#254559",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [50, 46, 49, 43, 56, 50, 50, 62, 48, 40, 50, 40, 44, 36 ]
        },
        {
            label: "My Second dataset",
            fillColor: "#00aeef",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [60, 50, 59, 48, 60, 66, 54, 72, 55, 67, 58, 75, 53, 50 ]
        }
    ]
};   
   
 
   
   
dd1Options = {   
    segmentShowStroke : false,    
    segmentStrokeColor : "#fff",  
    segmentStrokeWidth : 1,  
    percentageInnerCutout : 65,   
    animationSteps : 100,  
    animationEasing : "easeInOutCubic",   
    animateRotate : true,  
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}   
  


var dougnut1 = new Chart(document.getElementById("myChart1").getContext("2d")).Doughnut(dd1, dd1Options);
var dougnut2 = new Chart(document.getElementById("myChart2").getContext("2d")).Doughnut(dd1, dd1Options);   
var dougnut3 = new Chart(document.getElementById("myChart3").getContext("2d")).Doughnut(dd1, dd1Options);
    

var bar = document.getElementById('bar').getContext('2d')
var myBarChart = new Chart(bar).Bar(data, {    
     scaleSteps: 0,     
     scaleBeginAtZero : false,   
     scaleShowGridLines : false, 
     scaleGridLineColor : "rgba(0,0,0,.09)",    
     scaleGridLineWidth : 2,   
     scaleShowHorizontalLines: false,   
     scaleShowVerticalLines: false, 
     barShowStroke : false,
     barStrokeWidth : 0,   
     barValueSpacing : 10,  
     barDatasetSpacing : 5,    
     scaleShowLabels: false,    
     scaleLineWidth: 0,    
     scaleFontSize: 9, 
     scaleFontColor: "#ffffff",
     scaleLineColor: "#203541",   
     showTooltips: false,
  
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

});
    
    

    
var selectid;
$(document).on('click','.select',function(){
  selectid = $(this).index('.select');
  var adjust = ($(this).hasClass('collapsed')) ? 1 : 0;
  
  console.log((($(this).children('.option').length) * $(this).children('.option').height()) * (adjust) + 40 + 'px');
  
  $(this).animate({'height':(($(this).children('.option').length) * $(this).children('.option').height()) * (adjust) + 40 + 'px'},100);
  $(this).toggleClass('collapsed');
});

$(document).on('click','.option',function(){
  var val = $(this).text();
  $(this).parent().find('.shown').text(val);
  selectid = -1;
});

 window.sr = new scrollReveal();     

});










