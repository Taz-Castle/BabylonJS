import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    PointLight,
    SpotLight,
    DirectionalLight,
    MeshBuilder,
    Mesh,
    Light,
    Camera,
    Engine,
    BabylonFileLoaderConfiguration,
    meshUVSpaceRendererFinaliserPixelShader,
    StandardMaterial,
    Color3,
    ShadowGenerator,
    Texture,
  } from "@babylonjs/core";

export interface SceneData {
  scene: Scene;
    box?: Mesh;
    light?:Light;
    spot?: SpotLight;
    hemi?: HemisphericLight;
    point?: PointLight;
    dlight?: DirectionalLight;
    sphere?: Mesh;
    cylinder?: Mesh;
    cone?: Mesh;
    triangle?: Mesh;
    capsule?: Mesh;
    ground?: Mesh;
    camera?: Camera;
}