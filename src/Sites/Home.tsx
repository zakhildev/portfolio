import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Page } from '../Components/Navbar/Page';

export function Home() {
	return (
		<div className='flex flex-col'>
			<Navbar selected={Page.Home}/>
			<h1 className=''>Home</h1>
		</div>
	);
}
