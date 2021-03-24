function compute()
{
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var today = new Date().getFullYear()
    var year = document.getElementById("years").value;
    var total = amount*rate*0.01*year;
    var result = document.getElementById("result");
    if(amount <= 0){
        alert("Please enter a positive number");
        getfocus("principal");
    }
    else if(amount === '' || amount.length == 0 || isNaN(amount)){
        result.className = "error"
        result.innerHTML = "Assign a number value for the amount and it should not be zero.";
        alert("Please enter a positive number");
        getfocus("principal");
    }
    else{
        result.className = "normal"
        var newText = document.createTextNode(
            "<br>If you deposit <mark>" + amount + "</mark>, <br>" + 
            "at an interest rate of <mark>" + rate + "%</mark>.<br>" + 
            "You will receive an amount of <mark>" + total + "</mark>,<br>" +
            "in the year <mark>" + (today+parseInt(year) + "</mark>")
        );
        result.innerHTML = newText.textContent;
    }
}

function displayChange(){
    var display = document.getElementById("rateN");
    var rate = document.getElementById("rate").value;
    display.innerHTML = rate + "%";
}

function getfocus(string) {
    document.getElementById(string).focus();
  }