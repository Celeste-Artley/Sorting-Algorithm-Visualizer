import { Canvas } from "./Canvas.js";
import { SortingUtils } from "./SortingUtils.js";

var canvas = new Canvas();
var util = new SortingUtils();

//Algosort is the key object in this program that contains the algorithms for sorting arrays.
export class AlgoSort {
  constructor() {}
  start() {
    canvas.setup();
  }
  newArray() {
    canvas.clear();
    canvas.setup();
  }
  clear() {
    canvas.clear();
  }
  reset() {
    canvas.resetGraph();
  }

  async quickSort() {
    //for some reason this is being returned as "not a function..." needed to abstract to utils function for recursion
    let array = canvas.array;
    util.quickSortRecursion(array, 0, array.length - 1, canvas);
  }

  async bubbleSort() {
    //While the array is not sorted
    //Run through the array once for the size of the array minus the counter
    //Check the current item vs the item to the left. Swap based on size.
    let array = canvas.array;
    let isSorted = false;
    let counter = 0;
    console.log(array);
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i + 1]) {
          util.swap(i, i + 1, array);
          isSorted = false;
          await util.sleep();
          canvas.clear();
          canvas.drawGraph(array);
        }
      }
      counter++;
    }
  }
  async mergeSort() {
    let array = canvas.array;
    console.log("Merge Sort method called");
  }
  async insertionSort() {
    let array = canvas.array;
    console.log("Insertion Sort method called");
  }
  async heapSort() {
    let array = canvas.array;
    console.log("Heap Sort method called");
  }
  async bucketSort() {
    let array = canvas.array;
    console.log("Bucket Sort method called");
  }
  async functioningSortTestAlgo() {
    //Most simplistic approach a double for loop which checks each element for each element to check it's possision
    //then provides a swap and displays it to the canvas.
    let array = canvas.array;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        await util.sleep();
        canvas.clear();
        if (array[j] > array[j + 1]) {
          util.swap(j, j + 1, array);
        }
        canvas.drawGraph(array);
      }
    }
  }
}
