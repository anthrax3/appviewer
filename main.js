var myDat;

$(document).ready(function() {
    myData = [
	["test"],
    ];
    var table = new Handsontable(
	document.getElementById('mainData'), {
	data: myData,
	minSpareRows: 1,
	colHeaders: true,
	contextMenu: true
    });
    var currentSelected = 2;
    
});

function buttonTest() {
    alert(myData[0][0]);
}
