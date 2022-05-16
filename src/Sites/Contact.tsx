import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Page } from '../Components/Navbar/Page';

export function Contact() {
	return (
		<div className='flex'>
			<Navbar selected={Page.Contact}/>
			<h1>Contact</h1>
		</div>
	);
}
