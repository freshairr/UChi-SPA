/**
 * Create a simple ReactJS application with 3 pages.
 *
 * @description
 * The first page will show a button which disappear when clicked and the text “Hello World!” appears instead.
 * The button must be custom and include a glyphicon and a text that can change. It will display the text “Click” on it.
 * Only for this page the text in the button must be bolded.
 *
 * The second page will show a function on a graph using D3. The function to draw is Fibonacci in the x range of [0,10]
 * When loaded the page shows the X and Y axis, and a button, with the same style as the one on the first page, but with the text “Draw” on it.
 * After pressing a button, the function line is added to the graph.
 *
 * The third page will show a calculator that you will embed starting from this project: https://github.com/ahfarmer/calculator
 */

import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<PageOne />} />
				<Route path="d3" element={<PageTwo />} />
				<Route path="calculator" element={<PageThree />} />
			</Routes>
		</div>
	);
}

export default App;
