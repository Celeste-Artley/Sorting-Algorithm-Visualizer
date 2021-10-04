var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Canvas } from "./Canvas.js";
var canvas = new Canvas();
export class AlgoSort {
    constructor() {
        this.sleep = (milliseconds) => {
            return new Promise((resolve) => setTimeout(resolve, milliseconds));
        };
    }
    setup() {
        canvas.setup();
        // this.quickSort(
        //   canvas.array,
        //   canvas.array[0],
        //   canvas.array[canvas.array.length - 1]
        // );
        this.bubbleSort(canvas.array);
    }
    // async quickSort(array: Array<number>, start: number, end: number) {
    //   //canvas.drawGraph(array); Not where this needs to go.
    //   if (start >= end) return;
    //   let index = await this.partition(array, start, end);
    //   await Promise.all([
    //     this.quickSort(array, start, index - 1),
    //     this.quickSort(array, index + 1, end),
    //   ]);
    // }
    bubbleSort(array) {
        return __awaiter(this, void 0, void 0, function* () {
            let isSorted = false;
            let counter = 0;
            console.log(array);
            while (!isSorted) {
                isSorted = true;
                for (let i = 0; i < array.length - 1 - counter; i++) {
                    if (array[i] > array[i + 1]) {
                        this.swap(i, i + 1, array);
                        isSorted = false;
                    }
                }
                counter++;
            }
            canvas.drawGraph(array);
            console.log("This is the array after the sort: " + array);
            // for (let i = 0; i < array.length; i++) {
            //   for (let j = 0; j < array.length; j++) {
            //     await this.sleep(5);
            //     canvas.clear();
            //     if (array[j] > array[j + 1]) {
            //       this.swap(i, i + 1, array);
            //     }
            //     canvas.drawGraph(array);
            //   }
            // }
            // return array;
        });
    }
    mergeSort(array) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    insertionSort(array) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    heapSort(array) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    bucketSort(array) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    swap(leftIndex, rightIndex, items) {
        this.sleep(25);
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    partition(array, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            var pivotIndex = start;
            var pivotValue = array[end];
            for (let i = start; i < end; i++) {
                if (array[i] < pivotValue) {
                    this.swap(i, pivotIndex, array);
                    pivotIndex++;
                }
                this.swap(i, pivotIndex, array);
            }
            return pivotIndex;
        });
    }
}
