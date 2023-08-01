When the user selects a word length and clicks Play!, the game starts:

1 - I need to choose a random word of the chosen length from the userInput variable from the words in the anagrams object found in the anagrams.js data file.
2 - The anagrams.js data file is an array of arrays. Provided above for reference.
3 - I need to select a random array from the outer array. Be sure to only choose from arrays that contain words with the specified number of letters. For example, if the user selects 5 in the userInput field then I might end up with this type of array: ["arrest", "rarest", "raster", "raters", "starer"]
4 - Then the function should select a random word from that array which again matches the userInput number. Then it should display that word in the currentWord variable along with the number of anagrams its has within that array in the currentAnagrams.length variable.
5 - When the user types in an anagram that matches one of the of items in the currentAnagrams array and presses Enter, their answer needs to be evaulated and correct answers should automatically increment in the score variable by 1, and the number of anagram items remaining should decrement by 1, for example, take the example array wrote in step 3 above, lets say arrest was the inital word displayed in the currentWord variable then the user enters the word rarest and presses Enter, then that array would now only have 4 items remaining to guess and the score goes up by 1 and the currentAnagrams length decrements by 1.
6 - As soon as the user guesses all of the possible anagrams in the current array of words, another random array with words of the same length should be pulled from the anagrams.js data file and displayed in the same anagram variable from the v-for loop.
7 - The Time left is functioning correctly so far, so I don't think I need to make any changes there.
8 - The game ends when the timer reaches 0 or when the user has completed guessing all of the words of the selected word length chosen from the AnagramConfig screen form the userInput variable.

9 - Lastly, from the AnagramGameOver.vue file, the play again button needs to restart the game over with the same userInput number that was Entered initially, and the Back to Start Screen button with the @click="backToConfig" event handler needs to return the user back to the AnagramConfig screen.

Here's the list of things I still need to fix:

1 - When the user clicks on this link <a href="#!" class="text-white-50 fw-bold">Register</a> at the bottom of the LoginForm component, which I will be refactoring to a router-link I just haven't gotten to it yet, then the app should stop rendering the LoginForm instance and switch to render the RegistrationForm component.

2 - with my Ajax.js error messages from the old project where displayed in a tag like this <output id="error-messages"></output>, does axios use a similar method to display error messages?

3 - I need the #login-email and #reg-email input's to be validated as email address, if not then I need an error msg

4 - I need the #login-password and #reg-passwords to be validated as at least 3 characters to pass

5 - I need the checkbox on the RegistrationForm component to be validated that it's checked

6 - If all login or registration form inut fields pass validation then the user needs to be routed to the AnagramHuntView.vue page.

Your role is my programming mentor and tutor, I'm a novice programmer and I have learned html, css, vanilla javascript, basic vue3 using options api, and basic bootstrap 5. I have learned all of this since this last January 2023, so about 7 months and I'm in a bootcamp that moves fast and I've been struggling to keep up. I'm working on a project titled Play2Learn, I used Vue Cli build tools, my dependencies are bootstrap 5, core-js, vue, and vue-router, I'm using Vue Cli development server via npm run serve, my file structure is as follows:

Play2Learn/
node_modules/
public/
|-- index.html
src/
|-- assets/
|-- components/
| |--anagram-hunt/
| |--layout/
| |--login-register-forms/
| |-- LoginForm.vue
| |-- RegistrationForm.vue
| |-- math-facts-practice/
|-- data/  
| |-- anagrams.js  
|-- router/
| |-- index.js
|-- views/
| |-- AboutView.vue
| |-- AnagramHuntView.vue
| |-- HomeView.vue
| |-- LoginRegisterView.vue
| |-- MathFactsView.vue
|-- App.vue
|-- main.js
|-- ...

Today we are focusing on the LoginRegisterView.vue page, and the LoginForm.vue and RegistrationForm.vue components. Below is the code that I have so far for each component.

The code above was inspired by an earlier project I completed. In that earlier project, I had similar login and registration forms, however, in this project I'm using bootstrap 5 so I didn't end up placing my login and registration inputs nor the buttons within a form tag, as you can inspect from the LoginForm.vue and RegistrationForm.vue files above.

What I need your help with today is to take the old validation code I used in that earlier project and apply it to this project. To be clear, in my earlier project since I didn't use a build tool I had to create a simple server using express and then to validate the form I used express validator. However, from a prior conversation thread we had today, you have recommended that I use Vuelidator instead. I have never used the Vuelidator library, so I need your help in creating the same validation rules that can be referenced from the file below:
