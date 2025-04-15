var inputArraySize=document.getElementById('arraySize'),array_size=inputArraySize.value;
var inputGenerate=document.getElementById("arrayGenerate");
var inputArraySpeed=document.getElementById("arraySpeed");

//This will return all elements that matches a CSS selector ".algos button" in index.html
var algoButton=document.querySelectorAll(".algos button");

var div_sizes=[]; //This will save the Heights.
var divs=[]; //This will help to create array Bars.
var margin_size;
var cont=document.getElementById("array_container"); //Content (cont) inside the container.
cont.style="flex-direction:row";


//Event Listener for generating and updating the array.
inputGenerate.addEventListener("click",generate_array);
inputArraySize.addEventListener("input",update_array_size);

//Generating array.
function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inputArraySize.max - inputArraySize.min) ) + 10; //Height
        divs[i]=document.createElement("div"); //Bars
        cont.appendChild(divs[i]); //Adding Bars
        margin_size=0.1; //Setting Margins

        //Creating Bars by setting heights and margin using Styles
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#4177cd; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

//Updating array
function update_array_size()
{
    array_size=inputArraySize.value;
    generate_array();
}

//For every new loading of page, new array will be generated.
window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<algoButton.length;i++)
{
    algoButton[i].addEventListener("click",runalgo);
}

//While running the Algo, all buttons will be disabled.
function disable_buttons()
{
    for(var i=0;i<algoButton.length;i++)
    {
        algoButton[i].classList=[];
        algoButton[i].classList.add("butt_locked");

        algoButton[i].disabled=true;
        inputArraySize.disabled=true;
        inputGenerate.disabled=true;
        inputArraySpeed.disabled=true;
    }
}

//Running appropiate algo function
function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}