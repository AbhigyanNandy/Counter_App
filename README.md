Project Title:- Counter_App
Objective:- 
The objective of this project is to develop a user-friendly and customizable counter application using HTML, CSS, and JavaScript that allows users to:
Set a starting value and increment/decrement by a chosen step size.
Define upper and lower bounds to prevent exceeding limits.
Enable or disable negative values as per requirement.
Provide visual feedback through color-coded counter values.
Retain the counter state across page reloads using localStorage.
This program aims to demonstrate practical implementation of DOM manipulation, event handling, responsive design, and state persistence in web applications.
Brief Description:-
A fully customizable counter application built with HTML, CSS, and JavaScript. It allows you to increment/decrement values with custom step sizes, define upper &amp; lower bounds, toggle negative numbers, and even persist state using local Storage so the  progress is never lost after a page reload.
GitHub Repository Link:-
Live Demo Link:-
[Counter App_Demo.zip](https://github.com/user-attachments/files/21810772/Counter.App_Demo.zip)
Technologies Used:-JavaScript, HTML, CSS
Run the App Locally:- Install vs studio and download the code and host this website locally in your device.
Challenges Faced & Solutions:-
Challenge: Initially, the counter value and settings (step size, bounds, negative toggle) were lost whenever the page was refreshed.
Solution: Implemented localStorage to save and restore state on page load. This ensured the counter always continued from where the user left off
Challenge: By default, the app allowed negative numbers even when the checkbox wasn’t clicked, leading to incorrect behavior.
Solution: Synced the checkbox’s initial state with the logic at page load, and updated the counter dynamically whenever the toggle was changed.
Challenge: The counter sometimes exceeded bounds when rapidly clicked.
Solution: Added conditional checks before increment/decrement and disabled buttons automatically when limits were reached.
Screenshots of the Application UI:-
<img width="1343" height="603" alt="Screenshot" src="https://github.com/user-attachments/assets/453c215b-8f4f-463e-8dca-4ce9089f1e42" />
Live Demo Link:-
[Counter App_Demo.zip](https://github.com/user-attachments/files/21810772/Counter.App_Demo.zip)
Bonus Features implemented:-
Upper & Lower Bound Control
Unlike a basic counter, this app lets users set strict limits so the value never goes above or below the defined range.
Negative Value Toggle
Users can choose whether negative numbers are allowed. This toggle adds flexibility and makes the app more customizable.
Persistent State with localStorage
Counter values, step size, bounds, and negative toggle are saved in localStorage, so the app remembers settings even after refreshing or reopening the page.
Dynamic Button Disabling
The “Increase” and “Decrease” buttons automatically disable when the counter reaches its upper or lower bound (or 0 when negatives are not allowed).
Color-Coded Feedback
Counter value changes color depending on its state:
 Green → Positive
 Red → Negative
 Black → Zero
Responsive UI with Background Image
The app is styled with a screen-responsive background image and a compact layout so all features are visible without scrolling.
Reset Page Button
In addition to a simple “Reset Counter”, the app includes a “Reset Page” button to reload everything from scratch if needed.
