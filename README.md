# uw-w2-password
Password Generator assignment, week 02

## Assignment Goal
We were provided with a starter HTML page and JS script with the code to write the password to the page. The purpose of the assignment was the write the password generation code.

Instructions were to actually have prompts pop up after clicking the "Generate Password" button, but since I have previous experience (and am way too impatient), I added a numbers input and 4 checkboxes for password criteria (uppercase, lowercase, numbers, special characters).

The initial password generation script was easy enough to put together, but after some testing I realized the setup I had didn't guarantee that at least 1 of each selected character type was present in the password.

After some research, I found a great answer on Stack Overflow (https://stackoverflow.com/a/61550284) for testing strings with regex. With a while loop checking the var `completed` and some if statements, the password gets regenerated until the requirements are met *before* it's actually printed to the screen.

I also included a check to make sure the password length doesn't actually change if the user enters an invalid number (less than 8 or greater than 128).

### View on GitPages
https://skelliebunnie.github.io/uw-w2-password/
