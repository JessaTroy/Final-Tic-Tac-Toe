const EMPTY_CELL = '';

//
// Cell Manipulation
//
function getCellElement(row, col) {
    let id = 'cell_' + row + '_' + col;
    return document.getElementById(id)
}

function getCellValue(row, col) {
    let cell = getCellElement(row, col)
    return cell.innerText;
}


function getCellValueByCell(cell) {
    return cell.innerText;
}

function setCell(row, col, text) {
    let cell = getCellElement(row, col)
    cell.innerText = text;
}

function setCellByCell(cell, text) {
    cell.innerText = text;
}

//
// Setting the Status
//
function setStatus(text) {
    let statusButton = document.getElementById('status');
    statusButton.innerText = text;
}

// checkRows
//
// Checks for winner on each row.
// Returns: 'X' or 'O' or EMPTY_CELL if no row winners
//
function checkRows() {
    for (let i=0; i < 3; i++) {
       let diagcells = [];
        if (getCellValue(i,0) == getCellValue(i,1) &&
            getCellValue(i,1) == getCellValue(i,2) &&
            getCellValue(i,0) != EMPTY_CELL){
                diagcells[0] = getCellElement(i,0);
                diagcells[1] = getCellElement(i,1);
                diagcells[2] = getCellElement(i,2);
                colorCellsBackground(diagcells, 'lavender');
                return getCellValue(i,0);
            }
    }

    return EMPTY_CELL;
}

// checkColumns
//
// Checks for winner on each column
// Returns: 'X' or 'O' or EMPTY_CELL if no column winners
//

function checkColumns() {
    for (let j=0; j < 3; j++) {
       let diagcells = [];
        if (getCellValue(0,j) == getCellValue(1,j) &&
            getCellValue(1,j) == getCellValue(2,j) &&
            getCellValue(0,j) != EMPTY_CELL){
                diagcells[0] = getCellElement(0,j);
                diagcells[1] = getCellElement(1,j);
                diagcells[2] = getCellElement(2,j);
                colorCellsBackground(diagcells, 'lavender');
                return getCellValue(0,j);
            }
    }
    return EMPTY_CELL;
}

// checkForwardDiagonal
//
// Checks for winner on forward diagonal / where 2,0 is first cell to check
// Returns: 'X' or 'O' or EMPTY_CELL if no forward diagonal winners
//
function checkForwardDiagonal() {
    if (getCellValue(0,2) == getCellValue(1,1) &&
        getCellValue(1,1) == getCellValue(2,0) &&
        getCellValue(0,2) != EMPTY_CELL){
        let fdiagcells = [];
            fdiagcells[0] = getCellElement(0,2);
            fdiagcells[1] = getCellElement(1,1);
            fdiagcells[2] = getCellElement(2,0);
            colorCellsBackground(fdiagcells, 'lavender')
        return getCellValue(0,2);
        }
    return EMPTY_CELL;
}

// checkBackwardDiagonal
//C:\Users\BCP\Desktop\camp-codea-2019-master\lessons\day4\index.html
// Checks for winner on forward diagonal \ where 0,0 is first cell to check
// Returns: 'X' or 'O' or EMPTY_CELL if no forward diagonal winners
//
function checkBackwardDiagonal() {

    if (getCellValue(0,0) == getCellValue(1,1) &&
        getCellValue(1,1) == getCellValue(2,2) &&
        getCellValue(0,0) != EMPTY_CELL){
            let diagcells = [];
            diagcells[0] = getCellElement(0,0);
            diagcells[1] = getCellElement(1,1);
            diagcells[2] = getCellElement(2,2);
            colorCellsBackground(diagcells, 'lavender')
            return getCellValue(0,0);
        }

    return EMPTY_CELL;
}

function checkWinner() {

    let r = checkRows();
    let c = checkColumns();
    let f = checkForwardDiagonal();
    let b = checkBackwardDiagonal();

    if (r != EMPTY_CELL)
        return r;

    if (c != EMPTY_CELL)
        return c;

    if (f != EMPTY_CELL)
        return f;

    if (b != EMPTY_CELL)
        return b;

    return EMPTY_CELL;
}


//
// Utility Functions
//
function setBoard(text) {
    for (i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            setCell(i,j,text);
        }
    }

}

function dumpBoard() {
    for (i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            console.log(getCellValue(i,j));
        }
        console.log("---");
    }

}

function hasEmptyCell(){
    for(let i=0; i<3; i++)
        for(let j=0; j<3; j++)
            if(getCellValue(i,j)== EMPTY_CELL)
                return true;
    return false;
}

//color the background a collection of cells
//
function colorCellsBackground(cells, color){
    for(let i=0; i<cells.length ; i++)
    {
        cells[i].style.backgroundColor = color
    }
}