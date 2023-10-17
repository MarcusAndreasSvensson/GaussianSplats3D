import * as GaussianSplat3D from '../../../lib/gaussian-splat-3d.module.js';

const plyLoader = new GaussianSplat3D.PlyLoader();

const file = document.getElementById('fileinput');

file.addEventListener('change', (event) => {
    const file = event.target.files[0];

    file.arrayBuffer().then((buffer) => {
      plyLoader.loadFromArrayBuffer(buffer).then((splatBuffer) => {
        new GaussianSplat3D.SplatLoader(splatBuffer).saveToFile('converted_file.splat');
      });
    });
  });

