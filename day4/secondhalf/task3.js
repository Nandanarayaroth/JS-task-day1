
function getTranspose(mtx){

    let firsthalf = mtx[0]
    let seconfHalf = mtx[1]

    let row = mtx.length
    let column = firsthalf.length

    let rowItem = []
    let result = [];
    
    for(let i = 0; i < column; i++){
        for(let j = 0; j < row; j++) {
            // console.log(mtx[j][i])
            rowItem.push(mtx[j][i])
        }
        result.push(rowItem)
        console.log(result);
    }
   
    
  

}

getTranspose([
    [2, 9, 0], 
    [7, 1, 5]
])