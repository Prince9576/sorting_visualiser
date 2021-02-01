function mergeSort()
{
    currentDelay=0;
    merge_partition(0,barHeights.length-1);
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;
    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=barHeights[q++];
            updateBars(barContainers[q-1],barHeights[q-1],customRed);
        }
        else if(q>end)
        {
            Arr[k++]=barHeights[p++];
            updateBars(barContainers[p-1],barHeights[p-1],customRed);
        }
        else if(barHeights[p]<barHeights[q])
        {
            Arr[k++]=barHeights[p++];
            updateBars(barContainers[p-1],barHeights[p-1],customRed);
        }
        else
        {
            Arr[k++]=barHeights[q++];
            updateBars(barContainers[q-1],barHeights[q-1],customRed);
        }
    }

    for(var t=0;t<k;t++)
    {
        barHeights[start++]=Arr[t];
        updateBars(barContainers[start-1],barHeights[start-1],"green");
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        updateBars(barContainers[mid],barHeights[mid],"yellow");

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
