let currentText = 'X'
let active = true;
function cellClick(args) {
   if(!active){
       return
   }
    let cell = args.target;
    if (getCellValueByCell(cell)!= EMPTY_CELL)
        return

        setCellByCell(cell,currentText);
        if(currentText == 'X')
            currentText ='O';
        else
            currentText ='X'
    

    let winner = checkWinner()// 'X', 'O', EMPTY_CELL
    
    if (winner != EMPTY_CELL) {
        active = false; 
            setStatus(winner + ' is the winner!!!!!');
        }
    else if(!hasEmptyCell()){
        setStatus("It's a tie!");
    }
}

function resetGame() {
    setBoard(EMPTY_CELL);
    setStatus("Play game")
    active = true
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            getCellElement(i,j).style.backgroundColor = 'white';
        }
    }
}




