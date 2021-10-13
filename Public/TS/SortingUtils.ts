import { Canvas } from "./Canvas";

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
    //Get the next split index to decide where to recursivly run the function next time.
    //Split the array by the index and call recusive function on both halfs
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
    //Determine a pivot point and the index, this can be done in a few ways, however, the easiest is to just assign the last in the array.
    //Create a for loop over all numbers from the start to end of the passed pointers
    //check for values and put the larger to the right of the pivot and leave the ones to the left.
    //after swaping clear and draw the canvas.
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
