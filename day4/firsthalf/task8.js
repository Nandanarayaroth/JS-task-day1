

function maxProduct(arr) {
    let sortted = arr.sort()
    console.log(sortted)
    let firstMax
    let secondMax
    let thirdMax
    let product
    if(sortted[0] > 0){
        firstMax = sortted[sortted.length-1]
        secondMax = sortted[sortted.length-2]
        thirdMax = sortted[sortted.length-3]
    }
    else{
        if(sortted.includes(0)){
            firstMax = sortted[sortted.length-1]
            secondMax = sortted[0]
            thirdMax = sortted[1]
        }
        else{
            firstMax = sortted[0]
            secondMax=sortted[1]
            thirdMax = sortted[2]
        }
    }
    console.log(firstMax, secondMax, thirdMax)
    product = firstMax*secondMax*thirdMax
    console.log(product)
}

maxProduct([-1, -2, -3, -4, -5]);

// 