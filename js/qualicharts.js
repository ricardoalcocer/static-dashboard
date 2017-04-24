var qualiCharts = function(){
  return {
    // receives array of objects holding the on-screen object name and the property name that holds the data
    //  [
    //      {'obj' : 'chart1', 'data' : 'traffic'},
    //      {'obj' : 'chart2', 'data' : 'questionsAsked'},
    //      {'obj' : 'chart3', 'data' : 'uniqueUsers'}
    //    ]
    //
    setCharts : function(args){
      var options = {
        width: '100%',
        height: 300,
        axisY: {
          onlyInteger: true
        },
        low: 0,
        showArea  : true,
        showLine  : true,
        showPoint : true,
        plugins: [
          Chartist.plugins.tooltip({
            appendToBody: true, // this fixes the positioning of the tooltip
            transformTooltipTextFnc : function(x){
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // transform to include commas in thousands
            }
          })
        ]
      };

      args.forEach(function(item){
        new Chartist.Line('#' + item.obj, {
          labels: dataSources.headers,
          series: [dataSources[item.data]]
        },options);
      })
    }
}}();
