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
