export class SortingUtils {
  sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  swap(leftIndex: number, rightIndex: number, items: Array<number>) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
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
  async partition(array: Array<number>, start: number, end: number) {
    //this method is still under work as it is a part of Quicksort.
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
