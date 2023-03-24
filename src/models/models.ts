import { CubeTexture, Group, Texture } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type Canvas = HTMLCanvasElement | null;

export type ResourceType = "fbxModel" | "texture" | "objModel" | "gltfModel";
export type ResourceItem =
  | { name: string; type: ResourceType; path: string }
  | { name: string; type: "cubeTexture"; path: string[] };
export type LoadedResource = { [key in string]: Texture | CubeTexture | Group | GLTF };
