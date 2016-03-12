function tableMaker(tableId, puzzle) {
	var table = document.getElementById(tableId);
	table.innerHTML = ("");
	var	tbody = document.createElement('tbody');
	
	var	width = puzzle.width;
	var	height = puzzle.height;
		
	table.appendChild(tbody);

	for (var i = 0; i <= height-1; i++) {
		tbody.insertRow(i);
		for (var j = 0; j <= width-1; j++) {
			tbody.rows[i].insertCell(j);
			tbody.rows[i].cells[j].addClassName("row" + i);
			tbody.rows[i].cells[j].addClassName("cell" + j);
		};
	}

	tbody.insertRow(0);
	for (var j = 0; j <= width-1; j++) {
		var th = document.createElement('th');
		th.addClassName("cell" + j)
		tbody.rows[0].appendChild(th);
	}

	tbody.rows[0].insertBefore(
		document.createElement('td'), tbody.rows[0].cells[0]
	).addClassName("empty");

	for (var i = 1; i <= height; i++) {
		var th = document.createElement('th');
		th.addClassName("row" + (i - 1))
		tbody.rows[i].insertBefore(th, tbody.rows[i].cells[0])
	}
	
	table.createCaption().innerHTML = puzzle.name;
	return true;
}