    // JavaScript code for form validation
	var inputValue = document.forms['myForm'].elements['inputField'].value;

      var inputElement = document.getElementById('inputField')
      var getValue = inputElement.value

      // Regular expression pattern for alphanumeric input
      if (getValue.matches("^[a-zA-Z0-9]+$")) {
        console.log("True");
        return true;
      } else {
        console.log("Error")
        return false;
      }

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message