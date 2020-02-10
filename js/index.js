// Your code goes here
/*   
	* [x] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`
*/

// number 1
// ****** Enlarges the fun-bus image when mouse hovers over it. ********

// Initializes funbus variable via ID and watches via browser until
// user hovers mouse. | After event happens the image is targeted via ID
// and the style.transitionProperty property is used with param's of
// width and height which have been declared inside mix-in.less file.
// I put the script tag at the bottom of the html page to make sure the 
// function was at least undefined instead of null. 

const sizeChange = document.getElementById("fun-bus").addEventListener("mouseover", () => {
    document.getElementById("fun-bus").style.transitionProperty = "width,height";
});

// number 2
// ****** When user attempts to copy and paste paragraphs  *********
// ****** the users selected text will instead be replaced *********
// ******            with PLAIGARISM IS WRONG!             *********

// copyright variable is declared and assigned all paragraphs in the form of a 
// nodelist. Since its a nodelist, I used the forEach method to add event listeners
// to each paragraph element. I watched via the "copy" property to see if the user
// would copy or paste any text. Then alerted them that plaigarism is wrong lol

function copyFunction (event) {
    event.preventDefault();
    alert("Hey PLAIGARISM IS WRONG!");
}
const copyright = document.querySelectorAll('p');
copyright.forEach((element) => {
    element.addEventListener("copy", copyFunction);
})

// number 3
// **** make the map picture rotate 180deg when you double click on it ***
// target adventure class and add listener with dblclick event and then target 
// adventure class again and change its style.transform to rotate 180 deg

document.getElementById("adventure").addEventListener("mousedown", () => {
    document.getElementById("adventure").style.transform = "rotate(180deg)";
})

// number 4
// Comes back up
document.getElementById("adventure").addEventListener("mouseup", () => {
    document.getElementById("adventure").style.transform = "rotate(180deg)";
})

// number 5
// ************** make nav background dark mode on scroll ************

document.getElementById("text-content").addEventListener("mouseenter", () => {
    document.getElementById("text-content").style.backgroundColor = "red";
    document.getElementById("bodysection").style.backgroundColor ="darkgrey";
})

// number 6
// ****************  make background pink upon leaving ***********

document.getElementById("text-content").addEventListener("mouseleave", () => {
    document.getElementById("text-content").style.backgroundColor = "black";
    document.getElementById("bodysection").style.backgroundColor ="pink";
})

// number 7
// *************** change nav bar header area to rebecca purple *********

document.getElementById("headerstuff").addEventListener("mouseleave", () => {
    document.getElementById("headerstuff").style.backgroundColor = "rebeccapurple";
})

// number 8

document.getElementById("one").addEventListener("mouseover", () => {
    document.getElementById("one").style.transform = "scale(3.3)";
})
// number 9

document.getElementById("two").addEventListener("mouseover", () => {
    event.stopPropagation();
    document.getElementById("two").style.transform = "scale(2.2)";
})
// number 10

document.getElementById("three").addEventListener("mouseover", () => {
    document.getElementById("three").style.transform = "scale(1.1)";
})