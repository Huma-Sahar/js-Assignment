//    Array

//  1. Declare an empty array using JS literal notation to store student names in future. 


// var student = ["Huma","Hafsa","Hina"];


//--------------------------------------------------------------------------------------------

// 2. Declare an empty array using JS object notation to store student names in future.

// var student = new Array('Rahil','Shoaib');
// document.write(student);



//--------------------------------------------------------------------------------------------

// 3. Declare and initialize a strings array. 

// var fruits = ["banana", "mango", "melon"];
// console.log(fruits);


//------------------------------------------------------------------------------

// 4. Declare and initialize a numbers array. 

// var number = [34, 45, 87, 23];
// console.log(number);

//---------------------------------------------------------------------------------------------

// 5. Declare and initialize a boolean array. 

// var bol = [true,false]
// console.log(bol);

//----------------------------------------------------------------------------------------------

// 6. Declare and initialize a mixed array. 

// var mixed =["Salma", 23,true];
// console.log(mixed);

//-----------------------------------------------------------------------------------------------

// 7. Declare and Initialize an array and store available  education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS,  BS, BCOM, MS, M. Phil., PhD). Show the listed  qualifications in your
//  browser like:
// document.write("<h1>qualifications </h1>");

// var qualifications = ["<ol>"+ "<li>"+"SSC"+"</li>"+ "<li>"+"HSC"+"</li>"+ "<li>"+"BCS"+"</li>"+ "<li>"+"BCOM"+"</li> "+"<li>"+"SSC"+"</li>"+"</ol>"];
//  document.write(qualifications );

//---------------------------------------------------------------------------------------------

// 8. Write a program to store 3 student names in an array.Take another array to store score of
//  these three students.  Assume that total marks are 500 for each student, display  the scores & 
//  #percentages of students like: 

// var students = ["Rahila","Sonia", "Mehnaz"];
// var score = [400,486,300];
// var persent1 = score[0]/500*100
// var persent2 = score[1]/500*100
// var persent3 = score[2]/500*100
// document.write("score of =  "+students[0]+" is "+score[0]+ " " +". percentage : "+persent1+ ""+"%")
// document.write("<br>")
// document.write("score of =  "+students[1]+" is "+score[1]+ " " +". percentage : "+persent2+ ""+"%")
// document.write("<br>")
// document.write("score of =  "+students[2]+" is "+score[2]+ " " +". percentage : "+persent3+ ""+"%")

//---------------------------------------------------------------------------------------------

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var my_color = ["red", "green", "yellow", "black"];
// var your_color = prompt("Enter your color begining of the array");
// my_color.unshift(your_color);
// document.write(my_color);

//=============================================
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var my_color = ["red", "green", "yellow", "black"];
// var your_color = prompt("Enter your color end of the array");
// my_color.push(your_color);
// document.write(my_color);

//===============================================

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// var my_color = ["red", "green", "yellow", "black"];
// my_color.unshift("gray","purple");
// document.write(my_color);

//==================================================

// d. Delete the first color in the array. Display the updated
// array in your browser.

// var my_color = ["red", "green", "yellow", "black"];
// my_color.shift();
// document.write(my_color);

//====================================================

// e. Delete the last color in the array. Display the updated
// array in your browser.


//  var my_color = ["red", "green", "yellow", "black"];
//  my_color.pop();
//  document.write(my_color);





//===================================================

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// var my_color = ["red", "green", "yellow", "black"];
// var chose_index = +prompt("chose your index");
// var chose_color =  prompt("chose your color");
//  my_color.splice(chose_index,0, chose_color);
//  document.write(my_color);

//====================================================

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var my_color = ["red", "green", "yellow", "black"];
// var chose_delete = +prompt("chose your index");
// var color_quantity =  +prompt("how many colours");
//  my_color.splice( chose_delete, color_quantity);
//  document.write(my_color);

//-----------------------------------------------------------------------------------------

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var score = [80,65,78,43,69];
// document.write("score of Students =  " + score)
// score.sort();
// document.write("<br>")
// document.write("<br>")
// document.write("ordered score of students = " + score)

//-------------------------------------------------------------------------------------------

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selected Cities arrays

// var cities = ["karachi", "peshawer", "hyderabad", "lahore", "Quetta"];
// document.write("<h4> City lists: </h4> "+ cities);
// cities.splice(2,2);
// document.write("<h4> selected Cities are : </h4> "+ cities);

//-------------------------------------------------------------------------------------

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This" , "is" , "my", "cat"];
// document.write("Arrays <br>" + arr);

// var arre = arr.join(" ") ;
// document.write("<br>")
// document.write("String <br>" + arre);

//------------------------------------------------------------------------------------

// 13. Create a new array. Store values one by one in such a way that you can access 
// the values in the order in which they were stored. (FIFO-First In First Out)

// var fruits = [];
// fruits.unshift('Banana');
// fruits.unshift('Orange')
// fruits.unshift('Apple')
// fruits.unshift('Grapes')
// document.write("<h4>Fruits</h4>")
// document.write(fruits);
// fruits.pop()
// document.write("<h4>First OUT</h4>")
// document.write(fruits);
// fruits.pop()
// document.write("<h4>Second OUT</h4>")
// document.write(fruits);

//---------------------------------------------------------------------------------------

// 14. Create a new array. Store values one by one in such a way that you can access the values
//  in reverse order. (Last In-First Out)

// var month = [];
// month.push('jan');
// month.push('Fab');
// month.push('Mar');
// month.push('Apr');
// month.push('May');
// month.push('jun');
// document.write('<h4> Months </h4>');
// document.write(month);
// month.pop();
// document.write('<h4>Last in First Out</h4>');
// document.write(month);

//-------------------------------------------------------------------------------------------

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier)
//  in an array. Display the following dropdown/select menu in your browser using 
//  document.write() method:

// var phone = ['Apple','Samsung', 'Motrola','Nokia','Sony','Haier'];

// document.write('<select> <option>'
// +phone[0]+ '</option><option>'
// +phone[1]+ '</option> <option>'
// +phone[2]+ '</option> <option>'
// +phone[3]+ '</option> <option>'
// +phone[4]+ '</option><option>'
// +phone[5]+ '</option></select>')