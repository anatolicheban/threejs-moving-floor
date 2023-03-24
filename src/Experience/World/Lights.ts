import { AmbientLight, DirectionalLight } from "three";
import { Experience } from "../Experience";

export class Lights {
  experience: Experience;
  ambLight: AmbientLight;
  dirLight: DirectionalLight;

  constructor() {
    this.experience = new Experience();

    this.ambLight = new AmbientLight(0xffffff, 0.3);
    this.dirLight = new DirectionalLight(0xffffff, 0.5);

    this.dirLight.position.set(4, 5, 2);

    this.experience.scene.add(this.ambLight, this.dirLight);
  }
}
