const AIListener = () =>{

	var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()

	recognition.lang = 'en-US'
	recognition.interimResults = false
	recognition.continuous = true
	recognition.start()

	console.log("At this point, if you've granted microphone acces you should see the words being heard by the computer, logged")

	recognition.addEventListener("result", event =>{

		const last = event.results.length - 1
		let transcript = event.results[last][0].transcript
		transcript = transcript.toLowerCase()
		let heard_my_name = false
		let audio = transcript.split(" ")

		console.log(transcript) 

		recognition.addEventListener("end", recognition.start)
	})
}


AIListener()



