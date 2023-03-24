import { Canvas } from "../models/models";
import { Experience } from "./Experience";
import { Sizes } from "./Utils/Sizes";
import {
  CineonToneMapping,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  sRGBEncoding,
  WebGLRenderer,
} from "three";

export class Renderer {
  experience: Experience;
  canvas: Canvas;
  sizes: Sizes;
  instance: WebGLRenderer & { useLegacyLights?: boolean };
  camera: PerspectiveCamera;
  scene: Scene;

  constructor() {
    this.experience = new Experience();
    this.sizes = new Sizes();
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera.instance;
    this.scene = this.experience.scene;

    this.setInstance();
  }

  setInstance() {
    this.instance = new WebGLRenderer({
      canvas: this.canvas as HTMLElement,
      antialias: true,
      preserveDrawingBuffer: true,
    });

    this.instance.useLegacyLights = true;
    this.instance.outputEncoding = sRGBEncoding;
    this.instance.toneMapping = CineonToneMapping;
    this.instance.toneMappingExposure = 1.1;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = PCFSoftShadowMap;
    this.instance.setClearColor(0x223843);
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
  }

  update() {
    this.experience.world.floor.mesh.position.z += 0.001;
    this.experience.world.floor.mesh.position.z %= 0.2;

    this.instance.render(this.scene, this.camera);
  }
}
