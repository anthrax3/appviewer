var myData;
var currentSelected;

$(document).ready(function() {
    myData = [
	["PASTE DATA HERE"],
    ];
    var table = new Handsontable(
	document.getElementById('mainData'), {
	data: myData,
	minSpareRows: 1,
	colHeaders: true,
	contextMenu: true
    });
    
});

function buttonTest() {
    alert(myData[0][0]);
}


function updateData() {
    currentSelected = $("input#whichrow").val();
    currentSelected = parseInt(currentSelected)

    if (currentSelected === NaN) {
	alert("Please enter a valid row number.");
    } else {
	var titles = myData[0];
	var row = myData[currentSelected];
	console.log(titles);
	$("table#currentRow").html("");
	titles.forEach(function(element, index, _) {
	    $("table#currentRow").append("<tr><td><b>"+element+"</b></td><td class=\""+element+"\">"+row[index]+"</td></tr>");
	});
    }
}

function next(increment) {
    currentSelected = $("input#whichrow").val()
    currentSelected = parseInt(currentSelected)
    if (currentSelected === NaN) {
	alert("Please enter a valid row number.");
    } else {
	$("input#whichrow").val(""+(currentSelected+increment));
    }
    updateData();
}
