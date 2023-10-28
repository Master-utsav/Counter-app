let letter = document.getElementById('countervalue');


const increment = () =>{

    let value = parseInt(letter.innerText);

    value = value + 1;
    
    letter.innerText = value;
    
}

const decrement = () =>{

    let value = parseInt(letter.innerText);

    value = value - 1;
    
    letter.innerText = value;
    
}