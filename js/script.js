document.addEventListener("DOMContentLoaded",
	function (event){
		// console.log("hello");
		var pass = document.querySelector("#password");
		var em = document.querySelector("#email");
		// var button = document.querySelector('button');
		// button.addEventListener('click', checkPassword);
		// console.log(em.value);
		pass.addEventListener('keyup', checkPassword);

		function checkPassword(e){
			var p = pass.value;
			// if(p.match(/\W/)){
			// 	console.log("hello")
			// }
			if(p.match(/./g).length >=8 && p.match(/./g).length <=20){
				if(p.match(/\d/)){
					if(p.match(/\W/)){
						document.getElementById('password-check').style.color = "green";
					}
					
				}
			}else{
				document.getElementById('password-check').style.color = "rgba(255,50,50,1)";
			}
		}
	}
);

