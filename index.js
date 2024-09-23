// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

 
//Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName("main");
console.log(mainEl);
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl[0].style.backgroundColor = 'var(--main-bg)';
// 3.    Set the content of mainEl to <h1>DOM Manipulation</h1>. 
//There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
// 4.    Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl[0].classList.add("flex-ctr");
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById(`top-menu`);
console.log(topMenuEl);
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor= "var(--top-menu-bg)"
// 4.    Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//Part 3:
// 1.   Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link)=>{
    // 2.   Create an <a> element.
    let newLink = document.createElement('a')
    // 3.   On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute('href', link.href)
    // 4.   Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = link.text
    // 5.   Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink)
})
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl=document.getElementById("sub-menu");
console.log(subMenuEl);
//Set the height subMenuEl element to be "100%".
subMenuEl.style.height="100%"
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor= "var(--sub-menu-bg)"
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
// Part 4: Adding Menu Interaction
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = document.querySelectorAll("a");
//Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click",Event())
function Event(params) {
    //The first line of code of the event listener function should call the 
    //event object's preventDefault() method.
    Event.preventDefault();
    //The second line of code of the function should immediately 
    //return if the element clicked was not an <a> element.
if (Event.target.matches !==("a")) {
    return;
    //The event listener should add the active class to
    // the <a> element that was clicked, unless it was already active, 
    //in which case it should remove it
    }
}
    if (Event.target.classList.contains("active")) {
        //The event listener should remove the active class from each other <a> element in topMenuLinks - 
        //whether the active class exists or not.
        topMenuEl.target.classList.remove("active")
        }
        //If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), 
        //set the CSS top property of subMenuEl to 100%.
        for (const subLinks of menuLinks ) {
            menuLinks.style.top="100%";}
    //The submenu needs to be dynamic based on the clicked link.
    // To facilitate that, we will create a helper 
    //function called buildSubmenu that does the following:
function bulidsubmenu(subLinks){
    

    subLinks.forEach (link =>{


    //Clear the current contents of subMenuEl.
    subMenuEl.innerText="";
    //Create an <a> element.
    let alink=document.createElement("a");
    //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
    alink.setAttribute('href', slink.href);
    //Set the element's content to the value of the text property of the "link" object.
    alink.innerText=link.text;
    //Append the new element to the subMenuEl.
    subMenuEl.appendChild(alink);
    })
//Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener("click",help())
{ function help(params) {
    //The first line of code of the event listener function should call the event object's preventDefault() method.
    help.preventDefault();
    //The second line of code within the function should immediately 
    //return if the element clicked was not an <a> element.
    if (help.target.matches !==("a")) {
        return;




}
}
