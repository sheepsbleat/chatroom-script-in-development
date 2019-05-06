//Replace this with your own channel ID
	// If you use this channel ID your app will stop working eventually
	const CLIENT_ID = '2BQI1Uc8yaEAnupY';

	
	const drone = new ScaleDrone(CLIENT_ID, {
	  data: { // Will be sent out as clientData via events
	    name: getRandomName(),
	    color: getRandomColor(),
	  },
	  //url: 'ws://localhost:9000/websocket'
	});
	
	let members = [];
