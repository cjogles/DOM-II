// Your code goes here
/*   
	* [ ] `mouseover`
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

const funBus = document.getElementById("fun-bus").addEventListener(
    "mouseover", function() {
        document.getElementById("fun-bus").style.transitionProperty = "width,height";
    }
)

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
// **** make the map picture wiggle when you click on it ***
//

document.getElementById("adventure").addEventListener("click", () => {
    
})
