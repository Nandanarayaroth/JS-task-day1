
function Inverter(obj) {
    let result = []
    let values = []
    for(let i in obj){
        values.push(i)
        result.push(obj[i])
    }
    let make = []
    for(let i=0; i<result.length; i++) {
        make.push(result[i])
        make.push(values[i])
    }
    console.log(make)
  
}

Inverter({a: 1, b: 2}) 