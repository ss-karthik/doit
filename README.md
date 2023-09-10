# Do It!

#### Video Demo:  Coming Soon<URL HERE>
#### Link to Web App : <https://doitfocus.netlify.app/>

#### Description:

Do It! is a web app, intended to be used as a productivity tool. It combines 3 main features into one app that can help you stay focused, track your tasks and get them done.

The web app is written in Javascript and the frontend is HTML and CSS. No frameworks used.

Let's go over each of the features and their implementations.

#### Pomodoro Timer:
The Pomodoro technique is a popular tool that many people use to be productive, especially when you are not able to focus on something for a long period of time, but still have to get it done. You can read more about the Pomodoro technique [here](https://en.wikipedia.org/wiki/Pomodoro_Technique).

I have implemented the Timer in JS using the setInterval function. I set an interval for every second, and counted down every second. Once I had reached 00:00, I reset the duration and stopped the timer. I have a variable that decides the duration. That value changes based on the selection of Pomodoro, Short Break or Long Break


#### To Do List:
The To Do list is imlpemented by calling a function that creates a new list item, based on the input in the field. The entire list item, and the delete button are all created in JS.

I have also added event listeners to the list items that change its class when clicked to identify them as Done. And when the Delete button is clicked, the element is removed from the DOM completely.

There are also two more functions, namely save (which saves the list items in the browser's Local storage) and load (which loads the list items from the browser's Local storage). Thus, with the use of Local storage, the web app remembers your tasks, without the need for storing things in a database.


#### Audio Player
I have also included some Nature sounds + Pink and White noise audio that will help you focus, especially in a noisy place. All these audios are taken from the Blanket app's repo. Refer [here](SOUNDS_LICENSING.md).

The entire audio is handled on the JS side, except for the buttons and the selectors. I create a new Audio object and make it loop until stopped. Then I access the selection list, and based on the index of the option, I change the src attribute of the audio.


### Miscellaneous
The Responsiveness of the entire site is mostly Flexbox, with a couple of media querries for changing font size and button sizes a bit.

Note: Please feel free to reach out to me with any suggestions/improvements. Visit the [Do It!](https://doitfocus.netlify.app/) website. You can reach my Socials or My Github from there. I will continue to work on this project and improve it.

## Let's Do It!
