export class SortingUtils {
  sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  swap(leftIndex: number, rightIndex: number, items: Array<number>) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
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
