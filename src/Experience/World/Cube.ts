import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import { Experience } from "../Experience";

export class Cube {
  experience: Experience;
  mesh: Mesh<BoxGeometry, MeshStandardMaterial>;
  material: MeshStandardMaterial;
  geometry: BoxGeometry;

  constructor() {
    this.experience = new Experience();

    this.material = new MeshStandardMaterial({ color: 0xffffff });
    this.geometry = new BoxGeometry(1, 1, 1);

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.y = 0;

    this.experience.scene.add(this.mesh);
  }
}
