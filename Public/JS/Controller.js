import { AlgoSort } from "AlgoSort";
var algoSort = new AlgoSort(120);
var algoSortSmall = new AlgoSort(27);
//Series of event listeners for the buttons under the canvas
document.getElementById("reset").addEventListener("click", algoSort.reset);
document
    .getElementById("newArray")
    .addEventListener("click", algoSort.newArray);
document.getElementById("quick").addEventListener("click", algoSort.quickSort);
document
    .getElementById("bubble")
    .addEventListener("click", algoSort.bubbleSort);
document.getElementById("merge").addEventListener("click", algoSort.mergeSort);
document
    .getElementById("insertion")
    .addEventListener("click", algoSort.insertionSort);
document.getElementById("heap").addEventListener("click", algoSort.heapSort);
document
    .getElementById("bucket")
    .addEventListener("click", algoSort.bucketSort);
document
    .getElementById("test")
    .addEventListener("click", algoSort.functioningSortTestAlgo);
//end series of Event listeners for buttons under canvas.
//Series of event listeners for the buttons under the canvas
document
    .getElementById("sreset")
    .addEventListener("click", algoSortSmall.reset);
document
    .getElementById("snewArray")
    .addEventListener("click", algoSortSmall.newArray);
document
    .getElementById("squick")
    .addEventListener("click", algoSortSmall.quickSort);
document
    .getElementById("sbubble")
    .addEventListener("click", algoSortSmall.bubbleSort);
document
    .getElementById("merge")
    .addEventListener("click", algoSortSmall.mergeSort);
document
    .getElementById("sinsertion")
    .addEventListener("click", algoSortSmall.insertionSort);
document
    .getElementById("sheap")
    .addEventListener("click", algoSortSmall.heapSort);
document
    .getElementById("sbucket")
    .addEventListener("click", algoSortSmall.bucketSort);
document
    .getElementById("stest")
    .addEventListener("click", algoSortSmall.functioningSortTestAlgo);
//end series of Event listeners for buttons under canvas.
