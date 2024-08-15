

let url = "https://script.google.com/macros/s/AKfycby5hTwZlMEEwFfFGFnUX1dsHx5G7REbYxEdgArQXDhRHfDqg5Ow-a9MTu6TS_SuRsRK/exec";
	
	// let form = document.querySelector('#form');
	let form = document.getElementById('myform');
	myform.addEventListener("submit", (e)=>{
		let d = new FormData(form);
		fetch(url,{
			method:"POST",
			body:d
		}).then((res)=>res.text())
		.then((finalRes)=>console.log(finalRes))
		e.preventDefault();
		alert("! THANK YOU ! \n YOUR MESSAGE HAS BEEN SENT TO SHYAM.......");
		window.open("./index.html");
	})