const canvas = document.createElement('canvas');
canvas.id = 'renderCanvas';
document.body.appendChild(canvas);


const engine = new BABYLON.Engine(canvas, true); // Now BABYLON is defined
const scene = new BABYLON.Scene(engine);

const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", 
    {diameter: 2, segments: 32}, 
    scene);
// Move sphere upward 1/2 its height
sphere.position.y = 1;
// Built-in 'ground' shape.
const ground = BABYLON.MeshBuilder.CreateGround("ground", 
    {width: 6, height: 6}, 
    scene);

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', () => {
    engine.resize();
});