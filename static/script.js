const dispaly = document.querySelector('#dispalyData')
const fetchButton = document.querySelector('#fetchData')


fetchButton.addEventListener('click', async event => {
	//console.log("Hello World");	

	try {
		//skickar ett request från frontend till backend och backend svarar med ett response 
		// och vi lägger in datan på webbsidan 

	//fetch är en asyncron function
	const response = await fetch('/hamsterwars')
	// gör aom till json
	const json = await response.json()

	// gör om json obejctet till en stäng så man kan ser/läsa på hemsidan
	let text = JSON.stringify(json) 
	dispaly.innerHTML = text

	} catch {
		console.log('opps something went wrong');
	}
	
	
})
