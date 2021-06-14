let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let val='';
for(i of buttons){
    i.addEventListener('click',(e)=>{
        x=e.target.innerText;
        if(x=='X')
        {
            x='*';
            val+=x;
            screen.value=val;
        }
        else if(x=='AC')
        {
            val="";
            screen.value=val;
        }
        else if(x=='=')
        {
            screen.value=eval(val);
            val=screen.value;
        }
        else
        {
            val+=x;
            screen.value=val;
        }
    })
}
