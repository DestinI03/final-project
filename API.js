const url = 'https://rapidmail.p.rapidapi.com/';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'rapidmail.p.rapidapi.com'
	},
	body: {
		ishtml: 'true',
		sendto: '<your email address>',
		name: 'Put Any Custom Name here',
		replyTo: 'your mail where users can send reply',
		title: 'Testing RapidMail Api',
		body: 'Put your Text body here, if you want to send html just set the ishtml: true in the request body'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}