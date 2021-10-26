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
    constructor() {
        this.sleep = () => {
            return new Promise((resolve) => setTimeout(resolve, SortingUtils.waitTime));
        };
    }
    swap(leftIndex, rightIndex, items) {
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    quickSortRecursion(array, start, end, canvas) {
        return __awaiter(this, void 0, void 0, function* () {
            //Get the next split index to decide where to recursivly run the function next time.
            //recursively call the partition based on the index collected.
            if (start >= end) {
                return;
            }
            let index = yield this.quickSortPartition(array, start, end, canvas);
            yield Promise.all([
                this.quickSortRecursion(array, start, index - 1, canvas),
                this.quickSortRecursion(array, index + 1, end, canvas),
            ]);
        });
    }
    quickSortPartition(array, start, end, canvas) {
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
                    canvas.clear();
                    canvas.drawGraph(array);
                    pivotIndex++;
                }
            }
            this.swap(pivotIndex, end, array);
            canvas.clear();
            canvas.drawGraph(array);
            return pivotIndex;
        });
    }
    mergeSortRecursion(array, canvas) {
        return __awaiter(this, void 0, void 0, function* () {
            if (array.length <= 1) {
                return array;
            }
            var split = array.length / 2;
            var left = array.splice(0, split);
            var right = array;
            return this.mergeSortMerge(yield this.mergeSortRecursion(left, canvas), yield this.mergeSortRecursion(right, canvas));
        });
    }
    mergeSortMerge(left, right) {
        return __awaiter(this, void 0, void 0, function* () {
            //Establish a pointer for each array, left, right, and the solution array and set them all to 0
            //while you have two arrays to compare compare the pointed elements and place it in the returnable array
            //after you have gone through the longer array place the remaining ones back in the array from left to right.
            //this assumes that you have two arrays that are both sorted smalles to largest.
            var L = 0, R = 0, mergedPointer = 0;
            var mergedArray;
            while (L < left.length && R < right.length) {
                if (left[L] < right[R]) {
                    mergedArray[mergedPointer] = left[L];
                    L++;
                }
                else {
                    mergedArray[mergedPointer] = left[R];
                    R++;
                }
            }
            while (L < left.length) {
                mergedArray[mergedPointer] = left[L];
                L++;
            }
            while (R < right.length) {
                mergedArray[mergedPointer] = left[R];
                R++;
            }
            return mergedArray;
        });
    }
}
//used to set the delay between frames during sorting.
SortingUtils.waitTime = 5;
