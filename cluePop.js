function clueInjector(tableId, puzzle) {
	var table = document.getElementById(tableId).tBodies[0];
	
	var width=puzzle.width;
	var height=puzzle.height;
	var xArray=puzzle.clueArray[0];
	var yArray=puzzle.clueArray[1];
	
	for (j = 1; j <= width; j++){
		var cellArray=xArray[j - 1];
		var cell=table.rows[0].cells[j];
		cell.innerHTML = "";
		for (var i = 0; i < cellArray.length; i++) {
			var span = document.createElement('span');
			span.addClassName("cell" + (j-1) + "Clue" + i);
			span.innerHTML = cellArray[i];
			cell.appendChild(span)
		}
	}
	
	for (i = 1; i <= height; i++){
		var cellArray=yArray[i - 1];
		var cell=table.rows[i].cells[0];
		cell.innerHTML = "";
		for (var j = 0; j < cellArray.length; j++) {
			var span = document.createElement('span');
			span.addClassName('row' + (i-1) + 'Clue' + j);
			span.innerHTML = cellArray[j] + ' ';
			cell.appendChild(span)
		}
	}
	
	return true
}