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
import { SortingUtils } from "./SortingUtils.js";
var canvas = new Canvas();
var util = new SortingUtils();
export class AlgoSort {
    constructor() { }
    start() {
        canvas.setup();
    }
    clear() {
        canvas.clear();
    }
    quickSort() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Quick Sort method called");
            let array = canvas.array;
            //for some reason this is being returned as "not a function..."
            util.quickSortRecursion(array, array[0], array.length - 1);
        });
    }
    bubbleSort() {
        return __awaiter(this, void 0, void 0, function* () {
            let array = canvas.array;
            let isSorted = false;
            let counter = 0;
            console.log(array);
            while (!isSorted) {
                isSorted = true;
                for (let i = 0; i < array.length - 1 - counter; i++) {
                    if (array[i] > array[i + 1]) {
                        util.swap(i, i + 1, array);
                        isSorted = false;
                        yield util.sleep(5);
                        canvas.clear();
                        canvas.drawGraph(array);
                    }
                }
                counter++;
            }
            console.log("This is the array after the sort: " + array);
            //await util.sleep(500);
            //canvas.drawGraph(array); // this should be displaying a proper graph however it is not and Canvas may need to be reworked.
        });
    }
    mergeSort() {
        return __awaiter(this, void 0, void 0, function* () {
            let array = canvas.array;
            console.log("Merge Sort method called");
        });
    }
    insertionSort() {
        return __awaiter(this, void 0, void 0, function* () {
            let array = canvas.array;
            console.log("Insertion Sort method called");
        });
    }
    heapSort() {
        return __awaiter(this, void 0, void 0, function* () {
            let array = canvas.array;
            console.log("Heap Sort method called");
        });
    }
    bucketSort() {
        return __awaiter(this, void 0, void 0, function* () {
            let array = canvas.array;
            console.log("Bucket Sort method called");
        });
    }
    functioningSortTestAlgo() {
        return __awaiter(this, void 0, void 0, function* () {
            let array = canvas.array;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    yield util.sleep(5);
                    canvas.clear();
                    if (array[j] > array[j + 1]) {
                        util.swap(j, j + 1, array);
                    }
                    canvas.drawGraph(array);
                }
            }
        });
    }
}
