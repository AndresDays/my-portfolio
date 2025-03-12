function addRecommendation() {
	// Get the message of the new recommendation
	let recommendation = document.getElementById("new_recommendation");
	// If the user has left a recommendation, display a pop-up
	if (recommendation.value != null && recommendation.value.trim() != "") {
		console.log("New recommendation added");
		//Call showPopup here
		showPopup(true);
		// Create a new 'recommendation' element and set it's value to the user's message
		var element = document.createElement("div");
		element.setAttribute("class", "recommendation");
		element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
		// Add this element to the end of the list of recommendations
		document.getElementById("all_recommendations").appendChild(element);

		// Reset the value of the textarea
		recommendation.value = "";
	}
}

function showPopup(bool) {
	if (bool) {
		document.getElementById('popup').style.visibility = 'visible'
	} else {
		document.getElementById('popup').style.visibility = 'hidden'
	}
}

let esNegro = false;

  document.getElementById("changeColor").addEventListener("click", function(event) {
    event.preventDefault(); 
    if (esNegro) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
	  document.getElementById('home').style.backgroundColor = '#308af1';
	  document.getElementById('changeColor').style.backgroundColor = '';
	  document.getElementById('darkTitle').style.color = 'black';
	  let anchors = document.querySelectorAll(".certification-title");
	anchors.forEach(function(anchor) {
		anchor.style.color = "black";
	  });
	let titles = document.querySelectorAll(".project-title");
	titles.forEach(function(title) {
		title.style.color = "black";
	  });
	let recommendations = document.querySelectorAll(".recommendation");
	recommendations.forEach(function(recommendation) {
		recommendation.style.color = "black";
		recommendation.style.backgroundColor = 'white';
	  });
    } else {
      document.body.style.backgroundColor = 'hsla(0, 0%, 10%)';
      document.body.style.color = "white";
	  document.getElementById('home').style.backgroundColor = 'hsla(0, 0%, 12%)';
	document.getElementById('changeColor').style.backgroundColor = 'hsla(0, 0%, 25%)';
	document.getElementById('darkTitle').style.color = 'white';
	let anchors = document.querySelectorAll(".certification-title");
	anchors.forEach(function(anchor) {
		anchor.style.color = "white";
	  });
	let titles = document.querySelectorAll(".project-title");
	titles.forEach(function(title) {
		title.style.color = "white";
	  });
	let recommendations = document.querySelectorAll(".recommendation");
	recommendations.forEach(function(recommendation) {
		recommendation.style.color = "white";
		recommendation.style.backgroundColor = 'hsla(0, 0%, 25%)';
	  });
    }
	
    esNegro = !esNegro;
  });
