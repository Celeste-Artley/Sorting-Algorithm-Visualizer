var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//this class is to provide usefull utilities to the AlgoSort algorithm such as Swaping, Waiting, and Recursion.
export class SortingUtils {
    constructor(c) {
        this.sleep = () => {
            return new Promise((resolve) => setTimeout(resolve, SortingUtils.waitTime));
        };
        this.c = c;
    }
    swap(leftIndex, rightIndex, items) {
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    quickSortRecursion(array, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            //Get the next split index to decide where to recursivly run the function next time.
            //recursively call the partition based on the index collected.
            if (start >= end) {
                return;
            }
            let index = yield this.quickSortPartition(array, start, end);
            yield Promise.all([
                this.quickSortRecursion(array, start, index - 1),
                this.quickSortRecursion(array, index + 1, end),
            ]);
        });
    }
    quickSortPartition(array, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            //Determine a pivot point and the index, this can be done in a few ways, however, the easiest is to just assign the last in the array.
            //Create a for loop over all numbers from the start to end of the passed pointers
            //check for values and put the larger to the right of the pivot and leave the ones to the left.
            //after swaping clear and draw the canvas.
            //then at the end of the for loop take the index and put it back in the array from the end.
            var pivotIndex = start;
            var pivotValue = array[end];
            for (let i = start; i < end; i++) {
                if (array[i] < pivotValue) {
                    this.swap(i, pivotIndex, array);
                    yield this.sleep();
                    this.c.clear();
                    this.c.drawGraph(array);
                    pivotIndex++;
                }
            }
            this.swap(pivotIndex, end, array);
            this.c.clear();
            this.c.drawGraph(array);
            return pivotIndex;
        });
    }
}
//used to set the delay between frames during sorting.
SortingUtils.waitTime = 5;
