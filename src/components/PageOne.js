import { useState } from 'react';
import { Button, Card, Text, Grid, Container } from '@nextui-org/react';
import { Eye } from 'phosphor-react';

export default function PageOne() {
	const [showText, setShowText] = useState(false);

	const handleChange = () => {
		setShowText(!showText);
	};

	return (
		<Container display="flex" justify="center">
			<Card
				css={{ p: '$6', mt: '$2xl', mw: '600px', mh: '800px' }}
				justify="center"
			>
				<Card.Header>
					<Card.Body css={{ py: '$2' }}>
						<Text
							h1
							size={60}
							css={{
								textGradient: '45deg, $blue600 -20%, $pink600 50%',
							}}
							weight="bold"
						>
							{showText ? `Hello World!` : null}
						</Text>
					</Card.Body>
				</Card.Header>
				<Card.Footer>
					<Grid.Container justify="center">
						<Button
							bordered
							borderWeight={'extrabold'}
							color="gradient"
							size="lg"
							icon={<Eye size={32} />}
							ghost
							onClick={handleChange}
							style={showText ? { display: 'none' } : null}
						>
							<b>Show hidden text</b>
						</Button>
					</Grid.Container>
				</Card.Footer>
			</Card>
		</Container>
	);
}
