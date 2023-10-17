import * as GaussianSplat3D from '../../../lib/gaussian-splat-3d.module.js';

export class Scene {

    constructor() {
    }

    load() {
        const viewer = new GaussianSplat3D.Viewer(null, [0, -1, -.17], [-4, 0, 0], [1, 1, 0], null, 10);
        viewer.init();
        viewer.loadFile('assets/data/forest-trip/forest-trip.splat', true)
        .then(() => {
            viewer.start();
        });
    }
}
