import { Canvas } from "./Canvas.js";

var canvas = new Canvas();

export class AlgoSort {
  constructor() {}
  setup() {
    canvas.setup();
    // this.quickSort(
    //   canvas.array,
    //   canvas.array[0],
    //   canvas.array[canvas.array.length - 1]
    // );
    this.bubbleSort(canvas.array);
  }

  // async quickSort(array: Array<number>, start: number, end: number) {
  //   //canvas.drawGraph(array); Not where this needs to go.
  //   if (start >= end) return;
  //   let index = await this.partition(array, start, end);
  //   await Promise.all([
  //     this.quickSort(array, start, index - 1),
  //     this.quickSort(array, index + 1, end),
  //   ]);
  // }

  async bubbleSort(array: Array<number>) {
    let isSorted = false;
    let counter = 0;
    console.log(array);
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i + 1]) {
          this.swap(i, i + 1, array);
          isSorted = false;
        }
      }
      counter++;
    }
    canvas.drawGraph(array);
    console.log("This is the array after the sort: " + array);
    // for (let i = 0; i < array.length; i++) {
    //   for (let j = 0; j < array.length; j++) {
    //     await this.sleep(5);
    //     canvas.clear();
    //     if (array[j] > array[j + 1]) {
    //       this.swap(i, i + 1, array);
    //     }
    //     canvas.drawGraph(array);
    //   }
    // }
    // return array;
  }
  async mergeSort(array: Array<number>) {}
  async insertionSort(array: Array<number>) {}
  async heapSort(array: Array<number>) {}
  async bucketSort(array: Array<number>) {}

  sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  swap(leftIndex: number, rightIndex: number, items: Array<number>) {
    this.sleep(25);
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  async partition(array: Array<number>, start: number, end: number) {
    var pivotIndex: number = start;
    var pivotValue: number = array[end];
    for (let i: number = start; i < end; i++) {
      if (array[i] < pivotValue) {
        this.swap(i, pivotIndex, array);
        pivotIndex++;
      }
      this.swap(i, pivotIndex, array);
    }
    return pivotIndex;
  }
}
