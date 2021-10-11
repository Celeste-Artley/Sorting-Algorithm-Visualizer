import { Canvas } from "./Canvas";

export class SortingUtils {
  sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  swap(leftIndex: number, rightIndex: number, items: Array<number>) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  async quickSortRecursion(
    array: Array<number>,
    start: number,
    end: number,
    canvas: Canvas
  ) {
    if (start >= end) return;
    console.log("This was a test");
    let index = await this.partition(array, start, end, canvas);
    await Promise.all([
      this.quickSortRecursion(array, start, index - 1, canvas),
      this.quickSortRecursion(array, index + 1, end, canvas),
    ]);
  }
  async partition(
    array: Array<number>,
    start: number,
    end: number,
    canvas: Canvas
  ) {
    //this method is still under work as it is a part of Quicksort.
    var pivotIndex: number = start;
    var pivotValue: number = array[end];
    for (let i: number = start; i < end; i++) {
      if (array[i] < pivotValue) {
        this.swap(i, pivotIndex, array);
        canvas.clear();
        canvas.drawGraph(array);
        pivotIndex++;
      }
      this.swap(i, pivotIndex, array);
      canvas.clear();
      canvas.drawGraph(array);
    }
    return pivotIndex;
  }
}
