import { CanvasTexture } from "three";

export class MyCanvasTexture {
  canvas: HTMLCanvasElement;
  texture: CanvasTexture;
  context: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement("canvas");

    this.canvas.style.width = this.canvas.style.width = "144";
    this.canvas.width = this.canvas.height = 288;

    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.context.fillStyle = "#fff";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.fillStyle = "#223843";

    this.texture = new CanvasTexture(this.canvas);

    this.setRectangles(1); // From 0 (min) to 1(max)
  }

  setRectangles(w: number) {
    let width = -(w * 12 - 6);

    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        this.context.fillRect(
          4 - width / 2 + (8 - width) * x + x * (64 + width),
          4 - width / 2 + (8 - width) * y + y * (64 + width),
          64 + width,
          64 + width
        );
      }
    }
  }
}
