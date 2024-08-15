const checkbox = document.querySelector('.my-form input[type="checkbox"]');
	const btns = document.querySelectorAll(".my-form button");

	checkbox.addEventListener("change", function () {
		const checked = this.checked;
		for (const btn of btns) {
			checked ? (btn.disabled = false) : (btn.disabled = true);
		}
	});

	let url = "https://script.google.com/macros/s/AKfycby7EsCSaPkPGiXlLVq6SJ5YWiQBF0JPUHklt3Uxl0l5wpX8s6zfRlnMA09Rvnc-GXbpbA/exec";
	
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
		alert("YOUR REGESTRATION SUCCESSFUL");
		// window.open("./index.html");
	})