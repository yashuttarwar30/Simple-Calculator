


let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e) => {
        buttonText =e.target.innerText;
        
        if(buttonText=='x'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
            
        }
        else if(buttonText=='='){
            if(screen.value=='1+'){
                var x = document.getElementById("download.png").src;
                document.getElementById("demo").innerHTML = x;

            }
            else{
                screen.value=eval(screenValue);

            }
            

        }
        else if(buttonText=='C'){
            screenValue="";
            screen.value=screenValue;
            
        }
        else if(buttonText=='<'){
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }

    })
}