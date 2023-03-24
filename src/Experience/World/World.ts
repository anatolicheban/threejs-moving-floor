import { Experience } from "../Experience";
import { Cube } from "./Cube";
import { Floor } from "./Floor";
import { Lights } from "./Lights";

export class World {
  experience: Experience;
  lights: Lights;
  floor: Floor;
  cube: Cube;

  constructor() {
    this.experience = new Experience();

    this.lights = new Lights();
    this.floor = new Floor();
    this.cube = new Cube();
  }
}
