var canvas = document.getElementById("AlgoDisplay");
if (canvas) var ctx = (canvas as HTMLCanvasElement).getContext("2d");
var num: number = 120;

export class Canvas {
  constructor(numValue: number) {
    num = numValue;
  }
  array: Array<number> = this.createRandomArray(num);
  previousArray: Array<number> = new Array();

  setup() {
    if (this.array.length >= 1) {
      this.array = [];
      this.array = this.createRandomArray(num);
      this.drawGraph(this.array);
    }
    this.drawGraph(this.array);
  }

  drawLine(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: string
  ) {
    ctx!.save();
    ctx!.strokeStyle = color;
    ctx!.lineWidth = 4;
    ctx!.beginPath();
    ctx!.moveTo(startX, startY);
    ctx!.lineTo(endX, endY);
    ctx!.stroke();
    ctx!.restore();
  }

  createRandomArray(num: number) {
    var array: Array<number> = [];
    for (var i: number = 0; i < num; i++) {
      array[i] = Math.floor(Math.random() * 650) + 1;
    }
    console.log("The current array : " + array);
    this.previousArray = array;
    return array;
  }

  clear() {
    ctx!.save();
    ctx!.setTransform(1, 0, 0, 1, 0, 0);
    ctx!.clearRect(
      0,
      0,
      (canvas as HTMLCanvasElement).width,
      (canvas as HTMLCanvasElement).height
    );
    ctx!.restore();
  }

  resetGraph() {
    if (this.previousArray) {
      this.clear();
      console.log(this.previousArray);
      this.array = this.previousArray;
      this.setup();
    }
  }

  drawGraph(lines: Array<number>) {
    for (var i: number = 0; lines.length > i; i++) {
      this.drawLine(
        i * 15 + 5,
        (canvas as HTMLCanvasElement).height,
        i * 15 + 5,
        (canvas as HTMLCanvasElement).height - lines[i],
        "White"
      );
    }
  }
}
