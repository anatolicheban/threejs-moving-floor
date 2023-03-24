import { Mesh, MeshStandardMaterial, PlaneGeometry, RepeatWrapping } from "three";
import { Experience } from "../Experience";
import { MyCanvasTexture } from "./MyCanvasTexture";

export class Floor {
  experience: Experience;
  mesh: Mesh<PlaneGeometry, MeshStandardMaterial>;
  material: MeshStandardMaterial;
  geometry: PlaneGeometry;

  constructor() {
    this.experience = new Experience();

    this.material = new MeshStandardMaterial({ color: 0xffffff });

    let canvasTexture = new MyCanvasTexture().texture;
    canvasTexture.repeat.set(5, 5);
    canvasTexture.wrapS = canvasTexture.wrapT = RepeatWrapping;

    this.material.map = canvasTexture;

    this.geometry = new PlaneGeometry(4, 4);

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.rotateX(-Math.PI / 2);

    this.experience.scene.add(this.mesh);
  }
}
