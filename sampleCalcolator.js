let screen=document.querySelector(".screen") ; 
let buttons=document.querySelectorAll(".btn");
let equal=document.querySelector(".buttonGreen");
let clear=document.getElementById("buttonred");






buttons.forEach(function(button){

    button.addEventListener('click' , function(e){
        let value=e.target.dataset.num ; 
        screen.value +=value ;
    })
})


equal.addEventListener('click',function () {
    try{
        screen.value=eval(screen.value);
    }
    catch{
        screen.value= 0;
    }
    
    
})


clear.addEventListener('click' , function(){
    try{

        screen.value='' ;

    }
    catch{
        screen.value=0 ; 
    }
    
})
