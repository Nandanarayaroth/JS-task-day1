
function Validity(str) {
    let splitted = str.split("")

    if(splitted.includes('@')&&splitted.includes('.')){
        return true
    }
    else{
        return false
    }
}

console.log(Validity("user@domain"));

// 