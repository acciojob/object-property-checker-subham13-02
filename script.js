const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  for(let x of sampleObject){
	  if(x=== key)
		  return true;
  }
 else 
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
