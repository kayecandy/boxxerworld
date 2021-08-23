jQuery(function($){
	$('#cndce-gloves-container').cndce3DGloves({
		modelsDir: './assets/models/boxing-shorts2/',
		modelMapsDir: './assets/models/boxing-shorts2/maps/',

		snapshotsURL: './assets/models/boxing-shorts2/snapshots/',

        cameraFrustumMin: 0.5,

		cameraPosition: {x: -3.2507289097605647, y: 2.113407330749977, z: 7.150458284403176},


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
				'cameraPosition': {x: -0.23444198954370885, y: 2.840774678165404, z: 6.764986044437326},
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
				'cameraPosition': {x: 1.2785941132385734, y: 2.6018208505458116, z: -6.744310591547192},
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
				'cameraPosition': {x: 2.528267771245154, y: 0.9378160894480062, z: -7.6740566668917705},
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
				'cameraPosition': {x: -0.26385394772970683, y: 2.737276033621538, z: 4.400257324404013},
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
				'cameraPosition': {x: 1.0810446928810296, y: 1.8410473625387214, z: 3.5884689938071883},
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
				'cameraPosition': {x: -2.796247616321658, y: -0.4649124877850622, z: 4.260439734560896},
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
				'cameraPosition':  {x: 0.3799695157038623, y: -0.42334142285297194, z: 5.094821864537286},
				'addToEventGroup': true
			},
		]
	});
})