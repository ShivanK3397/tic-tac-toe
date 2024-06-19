const gameboard = function(){
    let board =[null,null,null,null,null,null,null,null,null];
    function pushToBoard(symbol,index){
        board[index]=symbol;
    }

    function getSymbolAt(index){
        return board[index];
    }

    function resetBoard(){
        board=[null,null,null,null,null,null,null,null,null];
    }

    

    function checkWin(symbol){
        if (board[0]===symbol&&board[1]===symbol&&board[2]===symbol){
        
            return true;
        }
        else if(board[3]===symbol&&board[4]===symbol&&board[5]===symbol){
           
            return true;
        }
        else if(board[6]===symbol&&board[7]===symbol&&board[8]===symbol){
           
            return true;
        }
        else if(board[0]===symbol&&board[4]===symbol&&board[8]===symbol){
            
            return true;
        }
        else if(board[2]===symbol&&board[4]===symbol&&board[6]===symbol){
            
            return true;
        }
        else if(board[0]===symbol&&board[3]===symbol&&board[6]===symbol){
           
            return true;
        }
        else if(board[1]===symbol&&board[4]===symbol&&board[7]===symbol){
          
            return true;
        }
        else if(board[2]===symbol&&board[5]===symbol&&board[8]===symbol){
            
            return true;
        }
        else{
            return false
        }
    }


    return {pushToBoard,getSymbolAt,checkWin,resetBoard};
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
const getPlayerNames = function(){

    let playerX;
    let playerO;

    const dialog = document.querySelector("dialog");
    dialog.showModal();

    const submit = document.querySelector(".submit");
    submit.addEventListener("click",(event)=>{
        event.preventDefault();
        if (player1.value===""||player2.value===""){
            alert("Please Complete Form");
        }
        else{
            console.log(player1.value);
            dialog.close();
        }
    
        

    });
    dialog.addEventListener("cancel",(event)=>{
        event.preventDefault();
    })


    function player1Name(){
       
        return player1.value;
    }

    function player2Name(){
        return player2.value;
    }

    return {player1Name,player2Name};
}

const displayControl = function(){
    let symbol="X";
    let playerX;
    let playerO;
    const dialog = document.querySelector("dialog");

    dialog.showModal();

    const submit = document.querySelector(".submit");
    submit.addEventListener("click",(event)=>{
        event.preventDefault();
        if (player1.value===""||player2.value===""){
           
        }
        else{
            
            dialog.close();

        }
    
        

    });
    dialog.addEventListener("cancel",(event)=>{
        event.preventDefault();
    })

    dialog.addEventListener("close",()=>{
        playerX=player(player1.value,"X");
        playerO=player(player2.value,"O");
    })

    
    const winMessage = document.querySelector(".win-message")
    let win=false;
    let numOfTurns =0;



    const board = document.querySelectorAll(".grid");
    board.forEach((index)=>{
        index.addEventListener("click",()=>{
            if (index.textContent===""&&!win){
                index.textContent=symbol;
            }

            if(symbol==="X"&&!win){
                
                playerX.add(index.dataset.index-1);
                win = gameboard.checkWin(symbol);
                numOfTurns++;
                symbol="O";
                
            }
            else if(symbol==="O"&&!win){
                
                playerO.add(index.dataset.index-1);
                win = gameboard.checkWin(symbol);
                numOfTurns++;
                symbol="X";
            }

            if (win===true&&symbol==="O"){
                winMessage.textContent=`${playerX.getPlayerName()} is the winner!`;
                
            }
            else if (win===true &&symbol==="X"){
                winMessage.textContent=`${playerO.getPlayerName()} is the winner!`;

            }
            else if (numOfTurns===9){
                winMessage.textContent="Oh No, It's a tie!"
            }
        })
    })
    
    const restart = document.querySelector(".restart");
    restart.addEventListener("click",()=>{
        board.forEach((index)=>{
            index.textContent="";
            win=false;
            numOfTurns=0;
            symbol="X";
            gameboard.resetBoard();

        });
    });


    
}();





