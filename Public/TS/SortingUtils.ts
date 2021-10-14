import { Canvas } from "./Canvas";

//this class is to provide usefull utilities to the AlgoSort algorithm such as Swaping, Waiting, and Recursion.
export class SortingUtils {
  //used to set the delay between frames during sorting.
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
    //recursively call the partition based on the index collected.
    if (start >= end) {
      return;
    }
    let index = await this.quickSortPartition(array, start, end, canvas);
    await Promise.all([
      this.quickSortRecursion(array, start, index - 1, canvas),
      this.quickSortRecursion(array, index + 1, end, canvas),
    ]);
  }

  async quickSortPartition(
    array: Array<number>,
    start: number,
    end: number,
    canvas: Canvas
  ) {
    //Determine a pivot point and the index, this can be done in a few ways, however, the easiest is to just assign the last in the array.
    //Create a for loop over all numbers from the start to end of the passed pointers
    //check for values and put the larger to the right of the pivot and leave the ones to the left.
    //after swaping clear and draw the canvas.
    //then at the end of the for loop take the index and put it back in the array from the end.
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
