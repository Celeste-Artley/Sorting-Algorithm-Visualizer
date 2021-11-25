import { Canvas } from "./Canvas.js";
import { SortingUtils } from "./SortingUtils.js";

export class AlgoSort {
  canvas: Canvas;
  util: SortingUtils;

  constructor(size: number, s: string, height: number) {
    var size: number = size;
    this.canvas = new Canvas(size, s, height);
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
  async insertionSort() {
    let array = this.canvas.array;
    let i, key, j;
    for (i = 1; i < array.length; i++) {
      key = array[i];
      j = i - 1;

      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      await this.util.sleep();
      this.canvas.clear();
      this.canvas.drawGraph(array);
      array[j + 1] = key;
    }
  }
  async heapSort() {
    let array = this.canvas.array;
    let n: number = array.length;
    for (let i = n / 2 - 1; i >= 0; i--) {
      this.maxHeap(array, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
      this.util.swap(0, i, array);

      await this.util.sleep();
      this.canvas.clear();
      this.canvas.drawGraph(array);

      this.maxHeap(array, i, 0);
    }
  }
  maxHeap(array: Array<number>, n: number, m: number) {
    let largest = m;
    let l = 2 * m + 1;
    let r = 2 * m + 2;

    if (l < n && array[l] > array[largest]) {
      largest = l;
    }

    if (r < n && array[r] > array[largest]) {
      largest = r;
    }

    if (largest != m) {
      this.util.swap(m, largest, array);

      this.maxHeap(array, n, largest);
    }
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
