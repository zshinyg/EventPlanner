# EventPlanner
EECS 448 - Project 1


MUST OPEN USER.HTML FOR APPLICATION TO RUN PROPERLY

yuidoc was used to create the documentation.

Look at dataIO.txt to find out about data management

Alejandro: userAvailability.html & .js
Herbert: add_event.html & js
Ethan: user.html & js
Shogun: AdminMode html & js, Attendee.js

KNOWN BUGS:

- Can add multiple users of same name to user list
- Can make an event that goes from 1:00 pm to 5:00 am (overnight)
- Event can only have one time slot
- Can create event even if no event data input
- 24 Hour times written as start time end time and not as one number.
- Can see list of attendees to any event, regardless of if you created it or not


NOT BUGS BUT TODO:

- Split up sign in screen
- Give confirmation of user created
- Add "edit event" area to admin mode
- Don't clear input when bad user input
- Add intermediate page between user.html and user_availability.html
