
let creuteClasses = document.querySelector('.crete_clases');
let show_titel = document.querySelector('.show_titel')


document.addEventListener('keydown',function(e){
    if(e.key === "Enter"){

        let AddClasses = document.querySelector('.addClasses').value;
        let array = AddClasses.split(" ");
        array.sort()
        
        if(!AddClasses ){
            show_titel.classList.remove('show_titel');
        }
        else  {
            show_titel.classList.add('show_titel');
            for(let i=0;i<array.length;i++){
                if(array[i] !== ""){
                    let NewEl = document.createElement("div")
                    let inNewEl = document.createTextNode(`${array[i]}`);
                    NewEl.appendChild(inNewEl);
                    NewEl.classList.add('element');
                    creuteClasses.appendChild(NewEl);
                }
            }
            
            AddClasses = document.querySelector('.addClasses').value = "";
        }
        
        
    }
})

document.addEventListener('keydown' , function(e){
        if(e.key === "Enter"){
            let RemovClasses =document.querySelector('.removclasses').value;
            let arrayrem = RemovClasses.split(" ");
            if(RemovClasses){
                show_titel.classList.add('show_titel');
                let elements = document.querySelectorAll('.element');
                for(let j=0; j<arrayrem.length ;j++){
                    for(let i=0; i< elements.length ; i++){
                        if( elements[i].textContent === arrayrem[j]){
                            elements[i].remove()
                        }
                    }
                    document.querySelector('.removclasses').value = ""
                } 
            }   
        }   
})
