const ajax = (url, callback, method = "GET") => {
	if (!url) return console.error("Request Required");
	if (!callback) return console.error("Callback Required");
	const request = new XMLHttpRequest();
	request.addEventListener("readystatechange", (evt) => {
		let req = evt.target;
		if (req.readyState !== 4) return;
		if (req.status === 200) return callback(req.response);
		callback("");
	});
	request.open(method, url);
	request.send();
};

ajax("https://sdg-octodex.herokuapp.com", (results) => {
	resultsArray = JSON.parse(results);
	console.log(resultsArray);
});

ajax("test.txt", (resp) => {
	document.body.append(resp);
});
