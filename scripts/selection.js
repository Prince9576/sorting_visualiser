function selectionSort(arr)
{
    var array_size = arr.length;
    currentDelay= 0;
    for(var i=0;i<array_size-1;i++)
    {
        updateBars(barContainers[i], barHeights[i], customRed);//Color updatee
        index_min=i;
        for(var j=i+1;j<array_size;j++)
        {
            if(barHeights[j]<barHeights[index_min])
            {
                if(index_min!=i)
                {
                    updateBars(barContainers[j], barHeights[j], "dodgerblue");//Color update
                }
                index_min=j;
                updateBars(barContainers[j], barHeights[j], customRed);//Color update
            }
            else
            {
                updateBars(barContainers[j], barHeights[j], "dodgerblue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=barHeights[index_min];
            barHeights[index_min]=barHeights[i];
            barHeights[i]=temp;

            updateBars(barContainers[index_min], barHeights[index_min], customRed);//Color update
            updateBars(barContainers[i], barHeights[i], customRed);//Color update
            updateBars(barContainers[index_min], barHeights[index_min], "dodgerblue");//Color update
        }
        updateBars(barContainers[i], barHeights[i], "green");//Color update
    }
    updateBars(barContainers[i], barHeights[i], "green");//Color update
}