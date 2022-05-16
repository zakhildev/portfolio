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
				<Route path='/portfolio/' element={<Sites.Home />} />
				<Route path='/portfolio/projects' element={<Sites.Projects />} />
				<Route path='/portfolio/contact' element={<Sites.Contact />} />
				<Route path='/portfolio/*' element={<Sites.NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
