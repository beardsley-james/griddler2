function puzzlePrinter(tableId, puzzle) {
	var table = document.getElementById(tableId).tBodies[0];
	
	var width=puzzle.width;
	var height=puzzle.height;
	var binaryArray=puzzle.binaryArray;
	
	for (i = 1; i <= height; i++){
		var row = table.rows[i];
		var rowString = binaryArray[i - 1];
		
		for (j = 1; j<= width; j++){
			var cell = row.cells[j];
			var color = rowString[j - 1];
			
			
			if (color == "1"){
				cell.addClassName('black')
			} else if (color == "2"){
				cell.addClassName('flag')
			}
		}
	}
}


/* Margot's first code
	p?447,+93

	"}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}{ bbz00000000000000002
*/