import { AlgoSort } from "./AlgoSort.js";

var algoSort: AlgoSort = new AlgoSort();

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
