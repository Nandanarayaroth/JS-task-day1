function Spiral(n) {

    let sample = []

    let val = 1
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++) {
            
            if(i < n) {  
                // console.log(val); 
                if(val <= n)
                sample.push(val)
                val++;
            }
          
        }
        // return val        
    }
    return sample
}

console.log(Spiral(3))