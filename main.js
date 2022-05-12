const anychart = require('anychart');
// use relative links for svg url's (such as clip-path)
anychart.graphics.useAbsoluteReferences(false);

var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-15",
    actualEnd: "2018-03-10",
  }
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
chart = anychart.ganttProject();
// set the data
chart.data(treeData);

chart.container('container');
chart.draw();
chart.fitAll();
