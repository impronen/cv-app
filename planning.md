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

### 12/07/2023
