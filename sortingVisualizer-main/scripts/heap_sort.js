function Heap()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_sizes[i],"#ef3b3b");//Color update
    div_update(divs[j],div_sizes[j],"#ef3b3b");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"#ef3b3b");//Height update
    div_update(divs[j],div_sizes[j],"#ef3b3b");//Height update

    div_update(divs[i],div_sizes[i],"#4177cd");//Color update
    div_update(divs[j],div_sizes[j],"#4177cd");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"#4177cd");//Color update
        }

        largest=l;

        div_update(divs[largest],div_sizes[largest],"#ef3b3b");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"#4177cd");//Color update
        }

        largest=r;

        div_update(divs[largest],div_sizes[largest],"#ef3b3b");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"#3f9b1a");//Color update
        div_update(divs[i],div_sizes[i],"#f0f562");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"#4177cd");//Color update
        div_update(divs[i],div_sizes[i],"#3f9b1a");//Color update
    }
    div_update(divs[i],div_sizes[i],"#3f9b1a");//Color update
}