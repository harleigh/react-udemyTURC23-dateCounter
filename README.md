project in the udemy course: The ultimate React Course 2023 by Jonas Schmedtmann.

Two versions of the date counter:
* Version 1: basic addition and subtraction buttons to modify the current date
* Version 2: A text input field to enter the number of days forward/backward, and the step-amount is replaced by a slider (fun!).

## Modifications on Version 2:
* Big one: Negative dates can be put into the text input field (and the date is correctly calculated)


## Modifications on version 1
* App modifies the date based on a multiplier and an amount

Alterations:
* App broken into Components (which are reused): The step and counter amount are the same component with different props
* Step (offset amount to the counter that jumps the date) is not allowed to go negative.
* Minor CSS

## Screenshots version 1:

![image](https://github.com/harleigh/react-udemyTURC23-dateCounter/assets/4912070/a37fc4d4-04d7-4f7f-97eb-c05e53a1be1e)

![image](https://github.com/harleigh/react-udemyTURC23-dateCounter/assets/4912070/1c0b6039-7d01-490b-981c-0d08c4940619)

![image](https://github.com/harleigh/react-udemyTURC23-dateCounter/assets/4912070/a4f76cde-7a16-4812-9a15-a200540d4d70)

