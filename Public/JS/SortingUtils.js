var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
            if (start >= end) {
                return;
            }
            let index = yield this.partition(array, start, end, canvas);
            yield Promise.all([
                this.quickSortRecursion(array, start, index - 1, canvas),
                this.quickSortRecursion(array, index + 1, end, canvas),
            ]);
        });
    }
    partition(array, start, end, canvas) {
        return __awaiter(this, void 0, void 0, function* () {
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
}
SortingUtils.waitTime = 5;
