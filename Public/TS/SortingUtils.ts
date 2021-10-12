import { Canvas } from "./Canvas";
import { AlgoSort } from "./AlgoSort";

export class SortingUtils {
  static waitTime: number = 5;
  sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, SortingUtils.waitTime));
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
    if (start >= end) {
      return;
    }
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
    var pivotIndex: number = start;
    var pivotValue: number = array[end];
    for (let i = start; i < end; i++) {
      if (array[i] < pivotValue) {
        this.swap(i, pivotIndex, array);
        await this.sleep();
        canvas.clear();
        canvas.drawGraph(array);
        pivotIndex++;
      }
    }
    this.swap(pivotIndex, end, array);
    canvas.clear();
    canvas.drawGraph(array);
    return pivotIndex;
  }
}
