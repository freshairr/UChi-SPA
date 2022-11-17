import { Navbar } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<Navbar isCompact>
			<Navbar.Content activeColor={'#0072F5'} variant={'underline'}>
				<Navbar.Link
					as={NavLink}
					style={({ isActive }) => ({
						borderBottom: isActive ? '#004799 solid 3px' : '',
						opacity: isActive ? 1 : '',
					})}
					to="/"
				>
					Home
				</Navbar.Link>
				<Navbar.Link
					as={NavLink}
					to="/d3"
					style={({ isActive }) => ({
						borderBottom: isActive ? '#004799 solid 3px' : '',
						opacity: isActive ? 1 : '',
					})}
				>
					D3
				</Navbar.Link>
				<Navbar.Link
					as={NavLink}
					to="/calculator"
					style={({ isActive }) => ({
						borderBottom: isActive ? '#004799 solid 3px' : '',
						opacity: isActive ? 1 : '',
					})}
				>
					Calculator
				</Navbar.Link>
			</Navbar.Content>
		</Navbar>
	);
}
