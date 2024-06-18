const gameboard = function(){
    const board =[null,null,null,null,null,null,null,null,null];
    function pushToBoard(symbol,index){
        board[index]=symbol;
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

    function getPlayerName(){
        return playerName;
    }
    function add(index){
        if (gameboard.getSymbolAt(index)!==null){

        }
        else{
            gameboard.pushToBoard(playerSymbol,index);
        }
    }

    return {add,getPlayerName};

   
}


const displayControl = function(){
    let symbol="X";
    const player1 =player("Shivan","X");
    const player2 = player("Mike","O");
    const winMessage = document.querySelector(".win-message")
    let win=false;
    let numOfTurns =0;

    document.querySelectorAll(".grid").forEach((index)=>{
        index.addEventListener("click",()=>{
            if (index.textContent===""&&!win){
                index.textContent=symbol;
            }

            if(symbol==="X"&&!win){
                
                player1.add(index.dataset.index-1);
                win = gameboard.checkWin(symbol);
                numOfTurns++;
                symbol="O";
                
            }
            else if(symbol==="O"&&!win){
                
                player2.add(index.dataset.index-1);
                win = gameboard.checkWin(symbol);
                numOfTurns++;
                symbol="X";
            }

            if (win===true&&symbol==="O"){
                winMessage.textContent=`${player1.getPlayerName()} is the winner!`;
            }
            else if (win===true &&symbol==="X"){
                winMessage.textContent=`${player2.getPlayerName()} is the winner!`;

            }
            else if (numOfTurns===9){
                winMessage.textContent="Oh No, It's a tie"
            }
        })
    })

    
}();




