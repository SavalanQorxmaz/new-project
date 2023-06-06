

const indexArray = []

for(let i=0;i<9;i++){
    indexArray[i] = []
}

for(let i=0;i<9;i++){
   for(let j=0; j<9; j++){
    indexArray[i][j] = [i+1, j+1, true]
   }
}



export {indexArray}