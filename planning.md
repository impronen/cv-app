## Planning for CV App

### Components

What we need(not in order):

1. Education section
2. Experience
3. General information
4. Skills

Each of these need to have state with all the properties that I want them to contain + similar editing flag that is false/true based on whether we are editing or not. Similar methods of changing things as with any class based thing, just with setState.

We'll start with just making stuff that does the thing - renders them components etc. Think after that if you want to go with something like Tailwind or MUI

Tailwind: https://tailwindcss.com/docs/installation
MUI https://mui.com/material-ui/getting-started/overview/

If you end up implementing the PDF thing, look into https://github.com/parallax/jsPDF

#### After some work on General.js

Most of the components will be effectively identical, just the properties will vary.
Think of the UI a bit at some point, do we want something that will render the result to the side in real time or something that has a "switch" to change from edit mode to render mode.

### 29/6

Further worked on Experience. Spread syntax is needed, when a object inside the constructor / state is updated. There is no render yet for this component, that needs to be worked on later. Education basically follows the same idea, so it's just setting up similar things on a different file.

### 2/7/23

I have the React classes set for the components. Now I need to think of the rendering structure and how to combine them in a reasonable way.

I will make it so that there is a preview button that triggers a new class for rendering, where the values added by the user will be rendered to the screen without editing options. Add a material ui toggle for this.

First: add all relevant editing fields for the input classes, then add a shell for the render of the elements to the page inside some kind of an container structure.

## Questions about CSS with react

I have been attempting to make my CV app form labels dissapear with a transform when they are selected. I have them inside the form input and then I want to have a transform for them to disappear move out of the way when the user selects the element. The full code is here https://replit.com/@anterotienaho/cv-app.

I have set up the form elements with a class .formElement and then attempt to use a selector combination of .formElement input:focus + label, .formElement input:valid + label and I have also tried this syntax .formElement :is(input:focus, input:valid) to apply the transform (either a opacity change or some fancier animation).

These would a) make the label go away from the input field when it is in focus + keep them away after a value has been entered.

But my code just isn't working, the transitions on the labels won't run when I select the form input. I cannot seem to seem to understand why not. Similar syntax works in this universe.io form element https://uiverse.io/Maximinodotpy/thin-sheep-13, which I used as an inspiration.

I haven't been able to find anything that would override the selectors. Any ideas where to head to with this?

^ no answer received, left that idea and did something different.

## Question about conditionals in form validation

So guys, give me some hints...

I'm doing form valuation for my CV app and want it to work so, that when the user tries to press submit, and some of the fields are empty, they get an error.

I want to do something like this but I also want to avoid a great big if / else block:

    if(name.trim()==="" || email.trim() ==""){
      alert("required both field");
    }

I could loop over all the values with .map() or something but I also have a possibility to have either an ongoing status or end date for employment / education, so I anyway need to group those two somehow.

Any ideas or should i just swallow my distaste for using if else and go with that?

Damon — Today at 1:02 PM
idk about nice solutions, but could you concatenate the values of the groupable inputs, and then just test the array of values you now have for any empties
Damon — Today at 1:03 PM
if(name.trim()==="" || (ongoing+endDate).trim() ==""){
or something like that
