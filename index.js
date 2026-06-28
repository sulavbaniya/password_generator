const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let textEL1 = document.getElementById("text1")
let textEL2 = document.getElementById("text2")


function randomPassword(){
    textEL1.value = ""; 
    textEL2.value = "";
    for( let i=0; i<15; i++){
        textEL1.value += characters[Math.floor(Math.random() * characters.length)]

        textEL2.value += characters[Math.floor(Math.random() * characters.length)]
    }
}

randomPassword()