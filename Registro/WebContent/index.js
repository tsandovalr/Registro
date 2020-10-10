var a = 0;
var b = 0;


function registrar(){

	if(a == 1 && b == 1){
	    var json ={
	    		name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                
	    }
	    
	    
	    
	    let configs = {
	            method: 'post',
	            body: JSON.stringify(json),
	            withCredentials: true,
	            credentials: 'include',
	            headers: {
	                'Content-type': 'text'
	            }
	    }
	    
	    console.log(configs.body);
	    fetch('./Register', configs)
	        .then(res => res.json())
	        .then(data => {console.log(data)
	        	let userData = data.userData;
	            if(data.status == 200){
	            	alert("Register successful");
	            }
	            	else{
	            		console.log("Register not successful");
	            	}
	            	
	    });
	}
}

