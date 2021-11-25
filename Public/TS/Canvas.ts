export class Canvas {
  num: number = 120;
  canvas: HTMLElement | null;
  ctx: CanvasRenderingContext2D | null;
  array: Array<number> = [];
  previousArray: Array<number> = new Array();
  height: number;
  constructor(numValue: number, s: string, height: number) {
    this.canvas = document.getElementById(s);
    this.ctx = (this.canvas as HTMLCanvasElement).getContext("2d");
    this.num = numValue;
    this.height = height;
    //console.log("The canvas constructor ran with: ");
    //console.log(`${this.canvas} ${this.ctx} ${this.num}`);
    this.setup();
  }

  setup() {
    this.array = [];
    this.array = this.createRandomArray(this.num);
    this.drawGraph(this.array);
  }

  drawLine(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: string
  ) {
    this.ctx!.save();
    this.ctx!.strokeStyle = color;
    this.ctx!.lineWidth = 4;
    this.ctx!.beginPath();
    this.ctx!.moveTo(startX, startY);
    this.ctx!.lineTo(endX, endY);
    this.ctx!.stroke();
    this.ctx!.restore();
  }

  createRandomArray(num: number) {
    var array: Array<number> = [];
    for (var i: number = 0; i < num; i++) {
      array[i] = Math.floor(Math.random() * this.height) + 1;
    }
    this.previousArray = array;
    return array;
  }

  clear() {
    this.ctx!.save();
    this.ctx!.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx!.clearRect(
      0,
      0,
      (this.canvas as HTMLCanvasElement).width,
      (this.canvas as HTMLCanvasElement).height
    );
    this.ctx!.restore();
  }

  resetGraph() {
    if (this.previousArray) {
      this.clear();
      this.array = this.previousArray;
      this.setup();
    }
  }

  drawGraph(lines: Array<number>) {
    for (var i: number = 0; lines.length > i; i++) {
      this.drawLine(
        i * 15 + 5,
        (this.canvas as HTMLCanvasElement).height,
        i * 15 + 5,
        (this.canvas as HTMLCanvasElement).height - lines[i],
        "White"
      );
    }
  }
}
