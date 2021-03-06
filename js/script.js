	// primero se carga todo, luego si el dispositivo esta ready, ejecuta la funcion "onDeviceReady"

    window.addEventListener('load', function(){
    	// Wait for PhoneGap to load
   		document.addEventListener("deviceready", arrancar, false);
    }, false);
    

    // PhoneGap is ready
    function arrancar() {
    	var startBtn = $('#startBtn');
    	
    	startBtn.click(function(){
    		sacarFoto();
    	});
    	
    }
    

    // llamar a la camara del celu
    function sacarFoto() {
    
    	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
	});

    }
    
    // onSuccess
function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}