let boxes = document.querySelectorAll(".box");
let resetbutton =document.querySelector("#restart");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-winner");
let msg = document.querySelector("#msg");

let turnO= true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
 
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
        console.log("box was cliclked");
        if(turnO){
            boxes.innerText="O";
            turnO=false;
        }else{
            boxes.innerText="X";
            turnO=true;
        }
        boxes.disabled = true;
        checkwinner();
        });
});
 const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
const showwinner=(winner)=>{
msg.innerText=`Congratulation,Winner is ${winner} `;
msgcontainer.classList.remove("hide");
disableboxes();
};
const checkwinner = () =>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log(" Winner",pos1);

                showwinner(pos1);
            }
        }
    }

};
newgamebtn.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);