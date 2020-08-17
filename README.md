# 04-Code-Quiz

## Links:
```
Live Site: 
     https://edenkhaos.github.io/04-Code-Quiz/
   
Code Repo: 
     https://github.com/EdenKhaos/04-Code-Quiz
  
Issues & Explanation:
     https://github.com/EdenKhaos/04-Code-Quiz/blob/master/README.md

```
## Narrative to try to accomplish:
1. Create a code quiz with 10 questions total (found free questions to use).
2. Once started with the start button a timer starts with the first question.
3. If a question is answered correctly then another question shows up.
4. If a question is answered incorrectly then some time is subtracted from the timer.
5. If the timer runs out to 0 or all questions are answered the game is over.
6. When the game is over the user initials and score can be saved.
7. all questions and answers are originally stored here https://github.com/EdenKhaos/wk4-code-quiz/blob/master/Quiz%20Questions.txt

## Issues Found
```
Getting the array of questions, choices and answer correct. I'm glad I had 10 questions to choose my 5 questions from. Some of the answers to certain questions were either too long or the syntax inside the question/choices caused a an "unspecified" to show up. I has to debug the questions and modify the loop at the end to even get the script to work correctly. This I thought was going to be the easiest part of the entire script, which turned out not to be that easy after all. 

My loop through questions variable at first did not work due to each choice was a number choice verses a string of possible choices.

Boat loads of google-foo, used parts of our in-class activities to help with the countdown local storage and loop, basically Frankenstein the JS to work correctly\. 

I tried to keep this code as simple or vanilla as possible.
```
## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

```

## Pseudo code for html
1.  view scores link on the top left of nav bar
2.  countdown timer on the top right of nav bar
3.  main body of quiz
```


```
## Pseudo code for css
1. nav bar 
2. main section

```

```
## Pseudo code for js
1.  array list of the quiz questions, choices and correct answer
2.  create variable for the functions of the timer and scores
3.  start countdown timer once 'start' button is pressed
4.  set pacing of timer to be 1000 millisecond per interval change
5.  stop the timer to end the game
6.  create message body within java for game over screen
7.  store the scores on local storage
8.  clear score name and value in the local storage if the user selects 'clear score'
9.  reset the game 
10. create message body within java
11. deduct 15 seconds from the timer if user chooses an incorrect answer
12. increases the score by 20 pts if the user chooses the correct answer
13. loops through the questions 

```
