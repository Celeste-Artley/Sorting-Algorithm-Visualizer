import { Canvas } from "./Canvas.js";

var canvas = new Canvas();

export class AlgoSort {
  constructor() {}
  setup() {
    canvas.setup();
    this.quickSort(
      canvas.array,
      canvas.array[0],
      canvas.array[canvas.array.length - 1]
    );
    //this.bubbleSort(canvas.array);
  }

  async quickSort(array: Array<number>, start: number, end: number) {
    if (start >= end) return;
    let index = await this.partition(array, start, end);
    await Promise.all([
      this.quickSort(array, start, index - 1),
      this.quickSort(array, index + 1, end),
    ]);
  }

  async bubbleSort(array: Array<number>) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        await this.sleep(5);
        canvas.clear();
        if (array[j] > array[j + 1]) {
          this.swap(array, j, j + 1);
          console.log("a swap happened");
          canvas.drawGraph(array);
        }
        //canvas.drawGraph(array);
      }
    }

    return array;
  }
  mergeSort(array: Array<number>) {}
  insertionSort(array: Array<number>) {}
  heapSort(array: Array<number>) {}
  bucketSort(array: Array<number>) {}

  sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  swap(items: Array<number>, leftIndex: number, rightIndex: number) {
    this.sleep(25);
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    //canvas.drawGraph(items);
  }
  async partition(array: Array<number>, start: number, end: number) {
    var pivotIndex: number = start;
    var pivotValue: number = array[end];
    for (let i: number = start; i < end; i++) {
      if (array[i] < pivotValue) {
        this.swap(array, i, pivotIndex);
        pivotIndex++;
      }
    }
    this.swap(array, pivotIndex, end);
    return pivotIndex;
  }
}
