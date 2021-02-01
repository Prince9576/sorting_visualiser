const bubbleSort = (arr) => {
    currentDelay = 0;
    let i = 0, j = 0;
    for (i = 0; i < arr.length ; i++) {
       for (j = 0; j < arr.length - i - 1; j++) {
            updateBars(barContainers[j], barHeights[j], customRed);//Color update
            updateBars(barContainers[j+1], barHeights[j+1], customRed);//Color update
            if ( barHeights[j] > barHeights[j+1] ) {                
                swap(barHeights, j, j+1);
                updateBars(barContainers[j], barHeights[j], customRed);//Height update
                updateBars(barContainers[j+1], barHeights[j+1], customRed);//Height update
            }
            updateBars(barContainers[j], barHeights[j], "dodgerblue");//Color update
       }
       updateBars(barContainers[j], barHeights[j], "green");//Color update
    }
    console.log(barHeights);
} 
