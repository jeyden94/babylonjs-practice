// Engine + Canvas

const canvas = document.createElement('canvas');
canvas.id = 'renderCanvas';
document.body.appendChild(canvas);
const engine = new BABYLON.Engine(canvas, true);


// Scene + Camera + Light

const scene = new BABYLON.Scene(engine);
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);
const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

//



const boxOne = BABYLON.MeshBuilder.CreateBox("box", {})
const boxTwo = BABYLON.MeshBuilder.CreateBox("box", {})

const boxOneWrapper = new BABYLON.StandardMaterial("boxOneWrapper")
boxOneWrapper.diffuseColor = new BABYLON.Color3(0 ,1 ,0)
boxOne.material = boxOneWrapper;

boxOne.scaling = new BABYLON.Vector3(1, 1, 1);
boxOne.position = new BABYLON.Vector3(1, 1, 1);

const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

boxOne.position.y = 0.5;

async function initAudio() {
    const audioEngine = await BABYLON.CreateAudioEngineAsync();
    await audioEngine.unlockAsync();

    // Audio engine is ready to play sounds ...

    // Track: "No" by Soulsonic
    // License: CC BY-ND 3.0
    BABYLON.CreateStreamingSoundAsync("backgroundMusic", "https://amf-ms.github.io/AudioAssets/cc-music/electronic/Soulsonic--No.mp3", { autoplay: true, loop: true }, audioEngine);
}

initAudio();




// Render everything in the browser

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', () => {
    engine.resize();
});