/*
// This function does validation of the user's input
*/
function validateInput(principal) {
    // Make sure they entered a positive number
    if (principal <= 0) {
        alert("Please enter a positive number.");
        document.getElementById("principal").focus();
        exit;
}

}

/*
// This function takes the user's input and calculates the interest as
// well as calculating the year in which they will reveive the interest.
*/
function compute()
{
    // Get the user's input values and store them in variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Validate the user input to make sure it meets our requirements
    validateInput(principal);

    // Calcualte the interest using the user's input
    var interest = Math.round(principal * years * rate) / 100;

    // Calcualte the year in which the user will receive the interest
    var year = new Date().getFullYear() + parseInt(years);

    // Store variables in copy for display to user
    document.getElementById("principalcopy").innerText = principal;
    document.getElementById("ratecopy").innerText = rate + "%";
    document.getElementById("interestcopy").innerText = interest;
    document.getElementById("yearcopy").innerText = year;

    // Make result copy visible to user
    document.getElementById("resultcopy").style.display = "block";
}

/*
// This function updates the display of the interest rate
// as the user adjusts the interest rate slider.
*/
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = " " + rateval;
}
