// Chapter 4 MATH EXPRESSIONS
///////==================================

//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

//var num1 = 3;
//var num2 = 5;
//var sum = num1 + num2;
//document.write("Sum of " + num1 + " and " + num2 + " is " + sum);



//2. Repeat task1 for subtraction, multiplication, division &
//modulus.

//var num1 = 10;
//var num2 = 4;

// Perform subtraction
//var difference = num1 - num2;

// Perform multiplication
//var product = num1 * num2;

// Perform division
//var quotient = num1 / num2;

// Perform modulus
//var remainder = num1 % num2;

// Display the results in the browser
//document.write("Subtraction of " + num1 + " and " + num2 + " is " + difference + "<br>");
//document.write("Multiplication of " + num1 + " and " + num2 + " is " + product + "<br>");
//document.write("Division of " + num1 + " by " + num2 + " is " + quotient + "<br>");
//document.write("Modulus of " + num1 + " and " + num2 + " is " + remainder);



//3. Do the following using JS Mathematic Expressions

//a. Declare a variable.
//var myVariable;

//b. Show the value of variable in your browser like “Value
  //var myVariable;
  //document.write("Value after variable declaration is: " + myVariable);

  //c. Initialize the variable with some number.
  //var myVariable = 10;
  //document.write("Value after variable initialization is: " + myVariable);

  //d. Show the value of variable in your browser like “Initial
//value: 5”.
  //var myVariable = 5;
  //document.write("Initial value: " + myVariable);

  //e. Increment the variable.
  //var myVariable = 5;
  //myVariable++;
  //document.write("Value after increment: " + myVariable);

  //f. Show the value of variable in your browser like “Value
//after increment is: 6”.
//var myVariable = 5;
//myVariable++;
//document.write("Value after increment is: " + myVariable);

//g. Add 7 to the variable.
//var myVariable = 6;
//myVariable = myVariable + 7;
//document.write("Value after adding 7 is: " + myVariable);

//h. Show the value of variable in your browser like “Value
//after addition is: 13”.
//var myVariable = 6;
//myVariable = myVariable + 7;
//document.write("Value after addition is: " + myVariable);

//i. Decrement the variable.
//var myVariable = 13;
//myVariable--;
//document.write("Value after decrement: " + myVariable);

//j. Show the value of variable in your browser like “Value
//after decrement is: 12”.
//var myVariable = 13;
//myVariable--;
//document.write("Value after decrement is: " + myVariable);

//k. Show the remainder after dividing the variable’s value
//by 3.
//var myVariable = 12;
//var remainder = myVariable % 3;
//document.write("Remainder after dividing by 3 is: " + remainder);

//l. Output : “The remainder is : 0”.
//var myVariable = 12;
//var remainder = myVariable % 3;
//document.write("The remainder is: " + remainder);


//4. Cost of one movie ticket is 600 PKR. Write a script to
//store
//ticket price in a variable & calculate the cost of buying 5
//tickets
//to a movie. Example output:
//var ticketPrice = 600;
//var numberOfTickets = 5;
//var totalCost = ticketPrice * numberOfTickets;
//document.write("Cost of one movie ticket is: " + ticketPrice + " PKR<br>");
//document.write("Cost of buying " + numberOfTickets + " tickets to a movie is: " + totalCost + " PKR");

//Cost of one movie ticket is: 600 PKR
//Cost of buying 5 tickets to a movie is: 3000 PKR


//5. Write a script to display multiplication table of any
//number in your browser. E.g












//6. The Temperature Converter: It’s hot out! Let’s make a
//converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//var celsiusTemperature = 25;
//console.log("Celsius temperature: " + celsiusTemperature);
//var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
//console.log("Fahrenheit temperature: " + fahrenheitTemperature);


//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//var celsiusTemperature = 25;
//var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
//console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F.");


//c. Now store a Fahrenheit temperature into a variable.
//var fahrenheitTemperature = 77;
//var celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
//console.log(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C.");


//d. Convert it to Celsius & output “NNoF is NNoC”.
//var fahrenheitTemperature = 77;
//var celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
//console.log(fahrenheitTemperature + "°F is " + celsiusTemperature.toFixed(2) + "°C.");




//7. Write a program to implement checkout process of a
//shopping cart system for an e-commerce website. Store
//the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges

//var priceOfItem1 = 650;
//var priceOfItem2 = 100;
//var shippingCharges = 100;
//var totalCostOfOrder = 2750;
//var orderedQuantityOfItem1 = Math.floor(totalCostOfOrder / priceOfItem1);
//var orderedQuantityOfItem2 = Math.floor((totalCostOfOrder - (orderedQuantityOfItem1 * priceOfItem1)) / priceOfItem2);
//var totalCostOfItems = (orderedQuantityOfItem1 * priceOfItem1) + (orderedQuantityOfItem2 * priceOfItem2;
//var totalCostWithShipping = totalCostOfItems + shippingCharges;
//console.log("Ordered quantity of item 1: " + orderedQuantityOfItem1);
//console.log("Ordered quantity of item 2: " + orderedQuantityOfItem2);
//console.log("Total cost of items (excluding shipping charges): $" + totalCostOfItems);
//console.log("Total cost of your order (including shipping charges): $" + totalCostWithShipping);



//8. Store total marks & marks obtained by a student in 2
//variables. Compute the percentage & show the result in
//your browser
 
 //var totalMarks = 980;
 //var marksObtained = 804;
 //var percentage = (marksObtained / totalMarks) * 100;
 //document.write("<h2>Percentage Calculation</h2>");
 //document.write("<p>Total Marks: " + totalMarks + "</p>");
 //document.write("<p>Marks Obtained: " + marksObtained + "</p>");
 //document.write("<p>Percentage: " + percentage.toFixed(4) + "%</p>");



 //9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
 //script to convert the total currency to Pakistani Rupees.
 //Perform all calculations in a single expression.
 //(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
 //and 1 Saudi Riyal = 28 Pakistani Rupee)

//var amountInUSD = 10;
//var amountInSAR = 25;
//var exchangeRateUSDToPKR = 104.80;
//var exchangeRateSARToPKR = 28;
//var totalAmountInPKR = (amountInUSD * exchangeRateUSDToPKR) + (amountInSAR * exchangeRateSARToPKR);
//console.log("Total currency in PKR: " + totalAmountInPKR);



//10. Write a program to initialize a variable with some
//number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

//var number = 10;
//var result = ((number + 5) * 10) / 2;
//console.log("Result: " + result);


//11. The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored
//values.

//Output them to the screen like so: “They are either NN or NN
//years old”.

//var currentYear = 2016;
//var birthYear = 1992;

//var age1 = currentYear - birthYear;
//var age2 = age1 - 1;
//console.log("Current year: " + currentYear);
//console.log("Birth year: " + birthYear);
//console.log("They are either " + age1 + " or " + age2 + " years old.");



//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
//output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

//var radius = 20;
//var circumference = 2 * Math.PI * radius;
//var area = Math.PI * Math.pow(radius, 2);
//console.log("Radius of the circle: " + radius);
//console.log("The circumference is: " + circumference.toFixed(2));
//console.log("The area is: " + area.toFixed(1));




///VARIABLE NAMES: LEGAL & ILLEGAL
////=====================================

//1. Declare 3 variables in one statement.
//var variable1, variable2, variable3;

//2. Declare 5 legal & 5 illegal variable names.

//Legal variable names:

  //  firstName
  //  myVariable
  //  num123
  //  _myVar
  //  camelCaseVariable

//Illegal variable names:

  //  123num (cannot start with a number)
  //  my-variable (cannot contain hyphens)
  //  my variable (cannot contain spaces)
   // var (reserved keyword)
   // !myVar (cannot contain special characters except underscores)


   //3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//<h1>Rules for naming JS variables</h1>


//b) Variable names can only contain ______, letters, digits, underscores______,
//______ and __dollar signs.____.


//c) Variables must begin with a ______, letter, underscore, or dollar sign______ or
_//____. For example $name, _name or name


//d) Variable names are case __case-sensitive_______


//e) Variable names should not be JS _____JavaScript keywords.____
