import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Page } from '../Components/Navbar/Page';

export function Projects() {
	return (
		<div className='flex'>
			<Navbar selected={Page.Projects}/>
			<h1>Projects</h1>
		</div>
	);
}
