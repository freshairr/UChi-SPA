import '../App.css';
import { Card, Text, Container } from '@nextui-org/react';

export default function PageThree() {
	// iframe function to embed sandboxed Calculator component
	function iframe() {
		return {
			__html:
				'<iframe src="/build/index.html" width="700" height="500"></iframe>',
		};
	}

	return (
		<Container display="flex" justify="center">
			<Text
				h3
				size={60}
				css={{
					textGradient: '45deg, $yellow600 -20%, $red600 100%',
				}}
				weight="bold"
			>
				This is the calculator
			</Text>
			<Container>
				<div class="iframe-container" dangerouslySetInnerHTML={iframe()} />
			</Container>
		</Container>
	);
}
