import { Canvas } from "Canvas";
import { SortingUtils } from "SortingUtils";

export class AlgoSort {
  canvas: Canvas;
  util: SortingUtils;
  constructor(size: number) {
    var size: number = size;
    this.canvas = new Canvas(size);
    this.util = new SortingUtils(this.canvas);
  }
  start() {
    this.canvas.setup();
  }
  newArray() {
    this.canvas.clear();
    this.canvas.setup();
  }
  clear() {
    this.canvas.clear();
  }
  reset() {
    this.canvas.resetGraph();
  }

  async quickSort() {
    //for some reason this is being returned as "not a function..." needed to abstract to utils function for recursion
    let array = this.canvas.array;
    this.util.quickSortRecursion(array, 0, array.length - 1);
  }

  async bubbleSort() {
    //While the array is not sorted
    //Run through the array once for the size of the array minus the counter
    //Check the current item vs the item to the left. Swap based on size.
    let array = this.canvas.array;
    let isSorted = false;
    let counter = 0;
    console.log(array);
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i + 1]) {
          this.util.swap(i, i + 1, array);
          isSorted = false;
          await this.util.sleep();
          this.canvas.clear();
          this.canvas.drawGraph(array);
        }
      }
      counter++;
    }
  }
  async mergeSort() {
    let array = this.canvas.array;
    array = await this.util.mergeSortRecursion(array);

    console.log(array);
  }
  async insertionSort() {
    let array = this.canvas.array;
    console.log("Insertion Sort method called");
  }
  async heapSort() {
    let array = this.canvas.array;
    console.log("Heap Sort method called");
  }
  async bucketSort() {
    let array = this.canvas.array;
    console.log("Bucket Sort method called");
  }
  async functioningSortTestAlgo() {
    //Most simplistic approach a double for loop which checks each element for each element to check it's possision
    //then provides a swap and displays it to the canvas.
    let array = this.canvas.array;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        await this.util.sleep();
        this.canvas.clear();
        if (array[j] > array[j + 1]) {
          this.util.swap(j, j + 1, array);
        }
        this.canvas.drawGraph(array);
      }
    }
  }
}
