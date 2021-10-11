import { AlgoSort } from "./AlgoSort.js";
var algoSort = new AlgoSort();
document.getElementById("clear").addEventListener("click", algoSort.clear);
document.getElementById("newArray").addEventListener("click", algoSort.start);
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
