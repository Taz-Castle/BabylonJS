import { SceneData } from "./interface";

import {
  Scene,
  ArcRotateCamera,
  Vector3,
  MeshBuilder,
  Mesh,
  StandardMaterial,
  HemisphericLight,
  Color3,
  Engine,
  Texture,
} from "@babylonjs/core";

function createGround(scene: Scene) {
  let ground = MeshBuilder.CreateGround(
    "ground",
    { width: 3, height: 3 },
    scene
  );
  var groundMaterial = new StandardMaterial("groundMaterial", scene);
  groundMaterial.backFaceCulling = false;
  ground.material = groundMaterial;
  groundMaterial.diffuseColor = new Color3(1, 1, 0.5);
  return ground;
}


function createSphere(scene: Scene) {
  let sphere = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 1, segments: 32 },
    scene
  );
  sphere.position.y = 1;
  var texture = new StandardMaterial("grass1", scene);
  texture.emissiveTexture = new Texture("./assets/lavatile.jpg", scene);
  sphere.material = texture;
  return sphere;
}

function createCone4(scene: Scene) {
  let cone = MeshBuilder.CreateCylinder(
    "cone",
    { height: 1, diameterBottom: 0.7, diameterTop: 0 },
    scene
  );
  cone.position.x = -1;
  cone.position.y = 0.5;
  cone.position.z = 1;

  var groundMaterial = new StandardMaterial("groundMaterial", scene);
  groundMaterial.backFaceCulling = false;
  cone.material = groundMaterial;
  groundMaterial.diffuseColor = new Color3(0.3, 0.3, 0.8);
  return cone;
}

function createCone3(scene: Scene) {
  let cone = MeshBuilder.CreateCylinder(
    "cone",
    { height: 1, diameterBottom: 0.7, diameterTop: 0 },
    scene
  );
  cone.position.x = 1;
  cone.position.y = 0.5;
  cone.position.z = 1;

  var groundMaterial = new StandardMaterial("groundMaterial", scene);
  groundMaterial.backFaceCulling = false;
  cone.material = groundMaterial;
  groundMaterial.diffuseColor = new Color3(0.3, 0.3, 0.8);
  return cone;
}

function createCone(scene: Scene) {
  let cone = MeshBuilder.CreateCylinder(
    "cone",
    { height: 1, diameterBottom: 0.7, diameterTop: 0 },
    scene
  );
  cone.position.x = 1;
  cone.position.y = 0.5;
  cone.position.z = -1;

  var groundMaterial = new StandardMaterial("groundMaterial", scene);
  groundMaterial.backFaceCulling = false;
  cone.material = groundMaterial;
  groundMaterial.diffuseColor = new Color3(0.3, 0.3, 0.8);
  return cone;
}

function createCone2(scene: Scene) {
  let cone = MeshBuilder.CreateCylinder(
    "cone",
    { height: 1, diameterBottom: 0.7, diameterTop: 0 },
    scene
  );
  cone.position.x = -1;
  cone.position.y = 0.5;
  cone.position.z = -1;

  var groundMaterial = new StandardMaterial("groundMaterial", scene);
  groundMaterial.backFaceCulling = false;
  cone.material = groundMaterial;
  groundMaterial.diffuseColor = new Color3(0.3, 0.3, 0.8);
  return cone;
}


function createOctahedron(scene: Scene) {
  let octahedron = MeshBuilder.CreatePolyhedron(
    "oct",
    { type: 1, size: 0.35 },
    scene
  );
  octahedron.position.x = 0;
  octahedron.position.y = 2.5;
  octahedron.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  octahedron.material = texture;
  return octahedron;
}

function createLight(scene: Scene) {
  const light = new HemisphericLight(
    "light",
    new Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;
  light.diffuse = new Color3(1, 0.6 , 0.6);
  light.specular = new Color3(0, 1, 0.4);
  light.groundColor = new Color3(0, 0.2, 0.7);
  return light;
}

function createArcRotateCamera(scene: Scene) {
  let camAlpha = -Math.PI / 2,
    camBeta = Math.PI / 2.5,
    camDist = 15,
    camTarget = new Vector3(0, 0, 0);
  let camera = new ArcRotateCamera(
    "camera1",
    camAlpha,
    camBeta,
    camDist,
    camTarget,
    scene
  );
  camera.attachControl(true);
  return camera;
}

export default function createStartScene(engine: Engine) {

  let scene = new Scene(engine);
  scene.ambientColor = new Color3(1, 1, 1);

  let ground = createGround(scene);
  let sphere = createSphere(scene);
  let cone4 = createCone4(scene);
  let cone3 = createCone3(scene);
  let cone = createCone(scene);
  let cone2 = createCone2(scene);
  let octahedron = createOctahedron(scene);
  let lightHemispheric = createLight(scene);
  let camera =createArcRotateCamera(scene);

  let that: SceneData = {
    scene,
    ground,
    sphere,
    cone4,
    cone3,
    cone,
    cone2,
    octahedron,
    lightHemispheric,
    camera
  };
  return that;
}


