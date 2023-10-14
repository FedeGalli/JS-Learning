const operation = {
    ln: '',
    o: '',
    rn: ''
}

function composer(char){
    
    if (!isNaN(parseFloat(char)) || char === '.'){
    
        if (operation.o === ''){
            operation.ln += char
            document.querySelector('.screen').innerHTML = operation.ln
        }
        else{
            operation.rn += char
            document.querySelector('.screen').innerHTML = operation.rn
        }

        
    } else {

        if (operation.o === '')
            operation.o = char
        else {

            let result = 0
            if (operation.o === '+')
                result = parseFloat(operation.ln) + parseFloat(operation.rn)
            else if (operation.o === '-')
                result = parseFloat(operation.ln) - parseFloat(operation.rn)
            else if (operation.o === '*')
                result = parseFloat(operation.ln) * parseFloat(operation.rn)
            else
                result = parseFloat(operation.ln) / parseFloat(operation.rn)
            
            document.querySelector('.screen').innerHTML = result
            operation.ln = result
            if (char !== '=')
                operation.o = char
            else
                operation.o = ''
            operation.rn = ''
        }
    }
    
}