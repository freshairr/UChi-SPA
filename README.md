# Univeristy of Chicago Exercise

This project is a web application with 3 pages and each performing a different function.

## Description

- First page renders a button with an onClick function
- Second page uses D3.js to plot a line graph of a fib function
- Third page embeds a calculator from an external project

### Features

- Feedback if submission was successful or failed
- Disabled submit button if all inputs not completed
- Occupation and State options returned by a GET request endpoint
- Lightly styled with Chakra Ui

## Built With

- React
- React-Router
- NextUI
- D3.js
- Phospher React
- React Calculator by Andrew H Farmer @ahfarmer

## Screenshots
<img src="https://user-images.githubusercontent.com/16641038/202554727-6fa931d0-aa15-40b1-9a34-1a5903c51df4.gif"  width=50% height=50%> 

## Install

### `yarn` or `yarn install`

Install dependencies for the application

## Usage

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Reflection

This exercise was to develop a multipage web application with different requirements on page.

For most of the requirements I didn't have too many issues implementing the requested features. The only one that took extra debugging time was the D3 graph implementation due to my cursory familiarity with the JavaScript library.

D3 is very feature rich with a very verbose set of documentation. I had to familiarize myself with new terminology to understand what I needed to do to in order to achieve the desired outcome. This is the fun part of programming and what continues to drive me to learn tools to be a better programmer.

I approached the issues by breaking it down into smaller components and tackling it one at time, such as simply rendering an X and Y axis, and then combining them for the final result.

I decided to use the React framework as it is what I am most comfortable with and allows me to easily manage state and hooks. Utilizing the `create-react-app` boilerplate allowed me minimize setup and quickly start development. React Router allows for quickly defining routes and NextUI + Phospher React for quickly styling (my weakness!) components.
