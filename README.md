# Grade Tracking Application

## Description
A web-based application for tracking and analyzing student grades. Users can input grades for multiple students, with real-time calculation of individual and overall averages.

## Features
- Grade input validation (19-20 point range)
- Dynamic display of individual student grades
- Tracking of:
  - Total class average
  - Best student average
  - Best student number
- Interactive user interface with prompt-based input

## Technologies Used
- HTML
- CSS
- Vanilla JavaScript

## How It Works
1. Application prompts user to enter three grades for a student
2. Validates grades to ensure they are between 19 and 20
3. Calculates and displays:
   - Individual student average
   - Running total class average
   - Identifies student with highest average
4. Allows continuous grade entry until user chooses to exit

## Validation Rules
- Grades must be between 19 and 20
- Three grades required per student entry
- Invalid entries trigger an alert and request re-entry

## User Interface
- Responsive design
- Displays grades in a tabular format
- Shows key metrics:
  - Total Average
  - Best Average
  - Best Student Number

## Calculation Methods
- Average calculation: Sum of three grades divided by 3
- Best average tracked dynamically during input
- Total average calculated after all entries completed

## Potential Improvements
- Persistent data storage
- More robust input validation
- Additional statistical analysis
- Export/print functionality

## Setup
1. Download HTML, CSS, and JavaScript files
2. Open HTML file in a web browser
3. Follow prompts to enter student grades
4. Use 'y' to exit grade entry

## Customization
- Modify grade range in validation logic
- Adjust styling in CSS file
- Extend functionality as needed


## Author
Salman Hashemi
