jQuery(function($){
	$('#cndce-gloves-container').cndce3DGloves({
		modelsDir: './assets/models/boxing-shorts2/',
		modelMapsDir: './assets/models/boxing-shorts2/maps/',

		snapshotsURL: './assets/models/boxing-shorts2/snapshots/',

        cameraFrustumMin: 0.5,

		cameraPosition: {x: -9.212505533929168, y: 13.235142739270826, z: 30.161358386608363},


		models: [
			{
				'id': 'body-fr',
				'name': 'Body Front',
				'url': 'body-fr.buffergeometry.json',
				// 'inputBox': '.cndce-woo-color-garter-1',
				'material': {
					'color': '#eeeeee',
					'normalScale': new THREE.Vector2(-.25,.25),
					'roughness': 0.6,
					'metalness': 0,
					'transparent': false
				},
				// 'map': 'map-garter-2.png',
				// 'normalMap': 'normal-garter-2.png',
				'snapshot': 'short.png',
				'cameraPosition': {x: -0.050320338851984975, y: 0.6097403655618208, z: 1.4520282426692555},
				'addToEventGroup': true
			},
            {
				'id': 'back-top',
				'name': 'Back Top',
				'url': 'back-top.buffergeometry.json',
				// 'inputBox': '.cndce-woo-color-garter-1',
				'material': {
					'color': '#eeeeee',
					'normalScale': new THREE.Vector2(-.25,.25),
					'roughness': 0.6,
					'metalness': 0,
					'transparent': false
				},
				// 'map': 'map-garter-2.png',
				// 'normalMap': 'normal-garter-2.png',
				'snapshot': 'short.png',
				'cameraPosition': {x: 0.11521005351373222, y: 0.5584516113621157, z: -1.468863475188625},
				'addToEventGroup': true
			},
            {
				'id': 'back-bottom',
				'name': 'Back Bottom',
				'url': 'back-bottom.buffergeometry.json',
				// 'inputBox': '.cndce-woo-color-garter-1',
				'material': {
					'color': '#eeeeee',
					'normalScale': new THREE.Vector2(-.25,.25),
					'roughness': 0.6,
					'metalness': 0,
					'transparent': false
				},
				// 'map': 'map-garter-2.png',
				// 'normalMap': 'normal-garter-2.png',
				'snapshot': 'short.png',
				'cameraPosition': {x: 0.020036876839888362, y: 0.20393668983205057, z: -1.562277125709026},
				'addToEventGroup': true
			},
            {
				'id': 'garter',
				'name': 'Garter',
				'url': 'garter.buffergeometry.json',
				// 'inputBox': '.cndce-woo-color-garter-1',
				'material': {
					'color': '#eeeeee',
					'normalScale': new THREE.Vector2(-.25,.25),
					'roughness': 0.6,
					'metalness': 0,
					'transparent': false
				},
				// 'map': 'map-garter-2.png',
				// 'normalMap': 'normal-garter-2.png',
				'snapshot': 'short.png',
				'cameraPosition': {x: -0.14337140378029392, y: 0.6511864206882947, z: 1.4276212219969378},
				'addToEventGroup': true
			},
            {
				'id': 'stitching',
				'name': 'Stitching',
				'url': 'stitching.buffergeometry.json',
				// 'inputBox': '.cndce-woo-color-garter-1',
				'material': {
					'color': '#eeeeee',
					'normalScale': new THREE.Vector2(-.25,.25),
					'roughness': 0.6,
					'metalness': 0,
					'transparent': false
				},
				// 'map': 'map-garter-2.png',
				// 'normalMap': 'normal-garter-2.png',
				'snapshot': 'short.png',
				'cameraPosition': {x: -0.5714877677800174, y: 0.5467250490172341, z: 1.0107266348147317},
				'addToEventGroup': true
			},

            {
				'id': 'stitching-bottom',
				'name': 'Stitching Bottom',
				'url': 'stitching-bottom.buffergeometry.json',
				// 'inputBox': '.cndce-woo-color-garter-1',
				'material': {
					'color': '#eeeeee',
					'normalScale': new THREE.Vector2(-.25,.25),
					'roughness': 0.6,
					'metalness': 0,
					'transparent': false
				},
				// 'map': 'map-garter-2.png',
				// 'normalMap': 'normal-garter-2.png',
				'snapshot': 'short.png',
				'cameraPosition': {x: -0.17385998227915547, y: -0.144173843441934, z: 1.731211341036707},
				'addToEventGroup': true
			},

            {
				'id': 'tassles',
				'name': 'Tassles',
				'url': 'tassles.buffergeometry.json',
				// 'inputBox': '.cndce-woo-color-garter-1',
				'material': {
					'color': '#eeeeee',
					'normalScale': new THREE.Vector2(-.25,.25),
					'roughness': 0.6,
					'metalness': 0,
					'transparent': false
				},
				// 'map': 'map-garter-2.png',
				// 'normalMap': 'normal-garter-2.png',
				'snapshot': 'short.png',
				'cameraPosition':  {x: 0.33468746782890063, y: 0.5948555687969319, z: 1.606934114721134},
				'addToEventGroup': true
			},
		]
	});
})