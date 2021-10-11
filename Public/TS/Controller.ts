import { AlgoSort } from "./AlgoSort.js";

var algoSort: AlgoSort = new AlgoSort();

document.getElementById("go").addEventListener("click", algoSort.start);
document.getElementById("quick").addEventListener("click", algoSort.clear);
document
  .getElementById("bubble")
  .addEventListener("click", algoSort.bubbleSort);
