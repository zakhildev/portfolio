import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Page } from '../Components/Navbar/Page';

export function NotFound() {
	return (
		<div className='flex flex-col'>
			<Navbar selected={Page.NotFound}/>
			<h1 className=''>Home</h1>
		</div>
	);
}
