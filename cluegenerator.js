function generateClue(binaryString){
	var counter = 0,
		clueArray = [],
		width = binaryString.length,
		index = 0;
		
	while (index < width) {
		var color = binaryString[index];
		if (color == "0" || color == "2") {
			index ++;
			if (counter > 0) {
				clueArray.push(counter);
				counter = 0
			}
		} else {
			index ++;
			counter ++;
			if (index == width) {clueArray.push(counter)}
		}
	}
	return clueArray
}

function generateClueArray(group){
	var groupArray = [];
	
	for (var i = 0; i < group.length; i++){
		groupArray.push(generateClue(group[i]))
	}
	
	return groupArray
}

function generatePuzzleArray(puzzleID){
	var height = $("#" + puzzleID + " tr").length;
	var columns = $("#" + puzzleID + " tr").first().children();
	var width = columns.length;
	var puzzleArray = [];
	
	puzzleArray.push(generateClueArray(createBinaryStringArrayColumns(puzzleID)));
	puzzleArray.push(generateClueArray(createBinaryStringArray(puzzleID)));
	
	return {
		"clueArray": puzzleArray,
		"width": puzzleArray[0].length,
		"height": puzzleArray[1].length
	}	
}