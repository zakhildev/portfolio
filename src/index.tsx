import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as Sites from './Sites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Sites.Home />} />
				<Route path='/projects' element={<Sites.Projects />} />
				<Route path='/contact' element={<Sites.Contact />} />
				<Route path='/*' element={<Sites.NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
