import { useEffect } from 'react';
import * as d3 from 'd3';
import { Button, Card, Text, Grid, Container } from '@nextui-org/react';
import { LineSegments } from 'phosphor-react';

export default function PageTwo() {
	// Hard coded fib values for plotting
	const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

	useEffect(() => {
		const margin = { top: 50, right: 50, bottom: 50, left: 50 },
			width = 600 - margin.left - margin.right,
			height = 600 - margin.top - margin.bottom;

		const svg = d3
			.select('#fibgraph')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);

		// Use set of provided Color Scheme
		const myColor = d3.scaleOrdinal().range(d3.schemeSet2);

		// Set X axis
		const xMinValue = d3.minIndex(fib, (d) => d);
		const xMaxValue = d3.maxIndex(fib, (d) => d);
		const x = d3.scaleLinear().domain([xMinValue, xMaxValue]).range([0, width]);
		svg
			.append('g')
			.attr('transform', `translate(0, ${height})`)
			.call(d3.axisBottom(x));

		// Set Y axis
		const yMaxValue = d3.max(fib, (d) => d);
		const y = d3.scaleLinear().domain([0, yMaxValue]).range([height, 0]);
		svg.append('g').call(d3.axisLeft(y));

		// Add grid lines
		svg
			.append('g')
			.attr('class', 'grid')
			.attr('transform', `translate(0,${height})`)
			.call(d3.axisBottom(x).tickSize(-height).tickFormat(''));
		svg
			.append('g')
			.attr('class', 'grid')
			.call(d3.axisLeft(y).tickSize(-width).tickFormat(''));

		// Set path styling
		const line = svg
			.append('g')
			.append('path')
			.style('stroke-width', 4)
			.style('fill', 'none');

		// A function to plot graph by binding data to fib values
		function plotGraph(selectedColor) {
			line
				.datum(fib)
				.transition()
				.duration(1000)
				.attr(
					'd',
					d3
						.line()
						.x((d, i) => x(i))
						.y((d) => y(d))
				)
				.attr('stroke', function () {
					return myColor(selectedColor);
				});
		}

		d3.select('#selectButton').on('click', function () {
			plotGraph('primary');
		});
	}, []);
	return (
		<Container md display="flex" justify="center">
			<Card css={{ p: '$6', mt: '$2xl', mw: '750px', mh: '800px' }}>
				<Card.Header>
					<Card.Body css={{ py: '$2' }}>
						<Text
							h4
							size={30}
							css={{
								textGradient: '45deg, $blue600 -20%, $pink600 50%',
							}}
						>
							Plot the Fib Sequence where n=10
						</Text>
						<div id="fibgraph"></div>
					</Card.Body>
				</Card.Header>
				<Card.Footer>
					<Grid.Container justify="center">
						<Button
							id="selectButton"
							bordered
							borderWeight={'extrabold'}
							color="gradient"
							size="lg"
							icon={<LineSegments size={32} />}
							ghost
						>
							Draw
						</Button>
					</Grid.Container>
				</Card.Footer>
			</Card>
		</Container>
	);
}
