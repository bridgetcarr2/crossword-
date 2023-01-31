//this function builds a 3 word crossword puzzle
function loadCrosswordPuzzle(){
        //this is the table on the html page
    var table = document.getElementById("puzzle");
    //an array that holds words for crossword puzzle
    var arrWords = new Array("JavaScript", "cascade", "html");
//this is the second row on the table
    var tr = table.rows[1];

    //this is for loop prints out first word in the array
    //on the second row of the table
    for(var i=0; i<arrWords[0].length; i++){
        var cell = tr.cells[i];
        cell.innerText = arrWords[0][i];
    }

    //this for loop prints out the second word in the array
    //on the second column of the table
    for(var i=0; i<arrWords[1].length; i++){
        var trow = table.rows[i];
        var cell = trow.cells[1];
        cell.innerText = arrWords[1][i];
    }

    //this for loop prints out the third word in array 
    //on the 10th column of the table
    for(var i=0; i<arrWords[2].length; i++){
        var trow = table.rows[i];
        var cell = trow.cells[9];
        cell.innerText = arrWords[2][i];
    }
}