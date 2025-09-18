   function convertTemp() {
      let temp = parseFloat(document.getElementById("tempInput").value);
      let from = document.getElementById("fromUnit").value;
      let to = document.getElementById("toUnit").value;
      let result = "";

      if (isNaN(temp)) {
        result = "Please enter a valid number!";
      } else if (from === to) {
        result = `Both units are same: ${temp} ${to}`;
      } else {
        let converted;
        
        // Convert input to Celsius first
        if (from === "C") converted = temp;
        if (from === "F") converted = (temp - 32) * 5/9;
        if (from === "K") converted = temp - 273.15;

        // Convert Celsius to target unit
        if (to === "C") result = `${converted.toFixed(2)} °C`;
        if (to === "F") result = `${(converted * 9/5 + 32).toFixed(2)} °F`;
        if (to === "K") result = `${(converted + 273.15).toFixed(2)} K`;
      }

      document.getElementById("result").innerText = result;
    }