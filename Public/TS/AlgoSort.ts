import { Canvas } from "./Canvas.js";
import { SortingUtils } from "./SortingUtils.js";

var canvas = new Canvas();
var util = new SortingUtils();

export class AlgoSort {
  constructor() {}
  start() {
    canvas.setup();
    // this.quickSort(
    //   canvas.array,
    //   canvas.array[0],
    //   canvas.array[canvas.array.length - 1]
    // );
  }
  clear() {
    canvas.clear();
  }

  async quickSort() {
    console.log("Quick Sort method called");
    let array = canvas.array;
    //for some reason this is being returned as "not a function..."
    //this.quickSortRecursion(array, array[0], array.length - 1);
  }
  async quickSortRecursion(array: Array<number>, start: number, end: number) {
    //this was started but not finished in order to fix bubble sort into what it should be.
    // if (start >= end) return;
    // let index = await util.partition(array, start, end);
    // await Promise.all([
    //   this.quickSort(array, start, index - 1),
    //   this.quickSort(array, index + 1, end),
    // ]);
  }

  async bubbleSort() {
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
        }
      }
      counter++;
    }
    console.log("This is the array after the sort: " + array);
    await util.sleep(500);
    canvas.drawGraph(array); // this should be displaying a proper graph however it is not and Canvas may need to be reworked.

    // for (let i = 0; i < array.length; i++) {
    //   for (let j = 0; j < array.length; j++) {
    //     await util.sleep(5);
    //     canvas.clear();
    //     if (array[j] > array[j + 1]) {
    //       util.swap(i, i + 1, array);
    //     }
    //     canvas.drawGraph(array);
    //   }
    // }
    // return array;
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
    let array = canvas.array;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        await util.sleep(5);
        canvas.clear();
        if (array[j] > array[j + 1]) {
          util.swap(j, j + 1,array);
        }
        canvas.drawGraph(array);
      }
  }
}
