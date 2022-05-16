import React from 'react';
import { FaProjectDiagram, FaHome, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Page } from './Page';

interface NavbarProps {
	selected: Page;
}

const Navbar = (props:NavbarProps): JSX.Element => {
	switch(props.selected) {
	case Page.Home:
		return(	
			<nav className='fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-700 text-white shadow-lg'>
				<NavbarElement icon={<FaAddressCard size='20' />} text='Contact' desination='/contact' selected={false} />
				<NavbarElement icon={<FaHome size='20' />} text='Home' desination='/' selected={true} />
				<NavbarElement icon={<FaProjectDiagram size='20' />} text='Projects' desination='/projects' selected={false} />
			</nav>
		);
	case Page.Contact:
		return(	
			<nav className='fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-700 text-white shadow-lg'>
				<NavbarElement icon={<FaAddressCard size='20' />} text='Contact' desination='/contact' selected={true} />
				<NavbarElement icon={<FaHome size='20' />} text='Home' desination='/' selected={false} />
				<NavbarElement icon={<FaProjectDiagram size='20' />} text='Projects' desination='/projects' selected={false} />
			</nav>
		);
	case Page.Projects:
		return(	
			<nav className='fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-700 text-white shadow-lg'>
				<NavbarElement icon={<FaAddressCard size='20' />} text='Contact' desination='/contact' selected={false} />
				<NavbarElement icon={<FaHome size='20' />} text='Home' desination='/' selected={false} />
				<NavbarElement icon={<FaProjectDiagram size='20' />} text='Projects' desination='/projects' selected={true} />
			</nav>
		);
	default:
		return(	
			<nav className='fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-700 text-white shadow-lg'>
				<NavbarElement icon={<FaAddressCard size='20' />} text='Contact' desination='/contact' selected={false} />
				<NavbarElement icon={<FaHome size='20' />} text='Home' desination='/' selected={false} />
				<NavbarElement icon={<FaProjectDiagram size='20' />} text='Projects' desination='/projects' selected={false} />
			</nav>
		);
	}
};

interface NavbarElementProps {
	icon: JSX.Element;
	text: string;
	desination: string;
	selected: boolean;
}

const NavbarElement = (props:NavbarElementProps): JSX.Element => {
	if (props.selected) {
		return(
			<div className='navbar-element text-yellow-400'>
				{ props.icon } <Link to={props.desination}><p className='ml-1'>{props.text}</p></Link>
			</div>
		);
	} else {
		return(
			<div className='navbar-element'>
				{ props.icon } <Link to={props.desination}><p className='ml-1'>{props.text}</p></Link>
			</div>
		);
	}
};

export default Navbar;
