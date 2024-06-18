const gameboard = function(){
    const board =[null,null,null,null,null,null,null,null,null];
    function pushToBoard(symbol,index){
        board[index]=symbol;
        console.log(board);
    }

    function getSymbolAt(index){
        return board[index];
    }

    function checkWin(symbol){
        if (board[0]===symbol&&board[1]===symbol&&board[2]===symbol){
            console.log("You won");
            return true;
        }
        else if(board[3]===symbol&&board[4]===symbol&&board[5]===symbol){
            console.log("1");
            return true;
        }
        else if(board[6]===symbol&&board[7]===symbol&&board[8]===symbol){
            console.log("2");
            return true;
        }
        else if(board[0]===symbol&&board[4]===symbol&&board[8]===symbol){
            console.log("3");
            return true;
        }
        else if(board[2]===symbol&&board[4]===symbol&&board[6]===symbol){
            console.log("4");
            return true;
        }
        else if(board[0]===symbol&&board[3]===symbol&&board[6]===symbol){
            console.log("5");
            return true;
        }
        else if(board[1]===symbol&&board[4]===symbol&&board[7]===symbol){
            console.log("6");
            return true;
        }
        else if(board[2]===symbol&&board[5]===symbol&&board[8]===symbol){
            console.log("7");
            return true;
        }
        else{
            return false
        }
    }


    return {pushToBoard,getSymbolAt,checkWin};
}();

function player(name,symbol){
    const playerName = name;
    const playerSymbol = symbol;

    function add(index){
        if (gameboard.getSymbolAt(index)!==null){

        }
        else{
            gameboard.pushToBoard(playerSymbol,index);
        }
    }

    return {add};

   
}

function playGame(){
    const player1 =player("Shivan","x");
    const player2 = player("Mike","o");
    let i =0;
    let symbol="x";
    let win=false;
    
    while(!win){
        let index = prompt("index");
        
        if(i%2===0){
            player1.add(index);
            win = gameboard.checkWin(symbol);
            symbol="o";
            
            
        }
        else{
            player2.add(index);
            win = gameboard.checkWin(symbol);
            symbol="x";
            
        }
        i++;
        
    }
}
playGame();




