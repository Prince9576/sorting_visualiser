let size = 20;
let arr = [];
let barHeights = [];
let barContainers = [];
let method;
let bars;
let customRed = "#EE4423";


const vCon = document.querySelector(".visulaiser");
const barWrapper = document.querySelector(".bar-wrapper");
const sortButtons = document.querySelectorAll(".sort");

const barsWrapperHeight = barWrapper.clientHeight || 550;


sortButtons.forEach((btn) => {
    btn.addEventListener("click", selectSortingMethod);
})

generateNewArray();

function onSizeChange(value) {
    arr = [];
    size = +value;
    generateNewArray();
}

function generateNewArray() {
    createRandomArray();
    createBars();
}

function createBars() {
    barWrapper.innerHTML = "";
    arr.forEach((el, index) => {
        var div = document.createElement("div");
        div.classList.add("bar");
        div.style.backgroundColor = "dodgerblue";
        div.style.width = (600 / (arr.length * 1.5))+"px";
        div.style.height = ((barsWrapperHeight / arr.length) * el) + "px";
        barHeights[index] = ((barsWrapperHeight / arr.length) * el);
        div.style.marginRight = "7px";
        barWrapper.appendChild(div);
        barContainers[index] = div;
    })
    bars = Array.from(document.querySelectorAll(".bar"));
}

function createRandomArray() {
    const min = 1;
    const max = size;
    for (let i = 0; i < size; i++) {
       arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}

function selectSortingMethod(event) {
    const id = event.target.id;
    sortButtons.forEach((btn) => {
        btn.classList.remove(["active"]);
    })
    const cur = document.getElementById(id);
    cur.classList.add(["active"]);
    method = id;
}

function sort() {
    switch(method) {
        case 'bubble':
            bubbleSort(arr);
            break;
        case 'selection':
            selectionSort(arr);
            break;
        case 'merge':
            mergeSort();
            break;
        case 'quick':
            quickSort();
            break;
        case 'heap':
            heapSort();
            break;
        case 'insertion':
            insertionSort();
            break;
    }
}

let speed = 10;
let delayTime=10000/(Math.floor(arr.length/10)*speed);
function onSpeedChange(value) {
    console.log(speed, value);
    speed = parseInt(value);
    delayTime=10000/(Math.floor(arr.length/10)*speed);
}

let currentDelay=0;

function updateBars( container, height, color ) {
    window.setTimeout(() => {
        container.style = `margin-right: 7px; width: ${(600 / (arr.length * 1.5))+"px"}; height: ${height}px; background-color: ${color}`;
    }, currentDelay += delayTime)
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}