import { Quaternion, Vector3 } from "@babylonjs/core";

import { SceneData } from "./interface";

let octahedronAngle: number = 1;
let octahedronSpeed: number = 0.01;

export default function createRunScene(runScene: SceneData) {
  runScene.scene.onAfterRenderObservable.add(() => {
  const axis: Vector3 = new Vector3(0, 0, 1).normalize();
    const quat: Quaternion = Quaternion.RotationAxis(
      axis,
      octahedronAngle * 1 * Math.PI
    );
    runScene.octahedron!.rotationQuaternion = quat;
    octahedronAngle += octahedronSpeed;
    octahedronAngle %= 1;
  });
}


