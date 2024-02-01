function checkLeapYear() {
    var year = document.getElementById("yearInput").value;
    var resultDiv = document.getElementById("result");
  
    if (isLeapYear(year)) {
      resultDiv.textContent = "Year " + year + " is a leap year.";
      resultDiv.style.color = "green";
    } else {
      resultDiv.textContent = "Year " + year + " is not a leap year.";
      resultDiv.style.color = "red";
    }
  }
  
  function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  }
  
  