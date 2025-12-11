import {
  Scene,
  Mesh,
  HemisphericLight,
  Camera,
} from "@babylonjs/core";

export interface SceneData {
  scene: Scene,
  ground: Mesh,
  sphere: Mesh,
  cone4: Mesh,
  cone3: Mesh,
  cone: Mesh,
  cone2: Mesh,
  octahedron: Mesh,
  lightHemispheric: HemisphericLight,
  camera: Camera
}
