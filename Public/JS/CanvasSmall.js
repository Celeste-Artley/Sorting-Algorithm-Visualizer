var canvas = document.getElementById("sAlgoDisplay");
if (canvas)
    var ctx = canvas.getContext("2d");
export class CanvasSmall {
    constructor() {
        this.array = this.createRandomArray(27);
    }
    setup() {
        if (this.array.length >= 1) {
            this.array = [];
            this.array = this.createRandomArray(27);
            this.drawGraph(this.array);
        }
        this.drawGraph(this.array);
    }
    drawLine(startX, startY, endX, endY, color) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
    }
    createRandomArray(num) {
        var array = [];
        for (var i = 0; i < num; i++) {
            array[i] = Math.floor(Math.random() * 200) + 1;
        }
        console.log("The current array : " + array);
        this.previousArray = array;
        return array;
    }
    clear() {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    }
    resetGraph() {
        if (this.previousArray) {
            this.clear();
            console.log(this.previousArray);
            this.array = this.previousArray;
            this.setup();
        }
    }
    drawGraph(lines) {
        for (var i = 0; lines.length > i; i++) {
            this.drawLine(i * 15 + 5, canvas.height, i * 15 + 5, canvas.height - lines[i], "White");
        }
    }
}
