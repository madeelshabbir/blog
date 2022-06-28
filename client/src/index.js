import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { App } from './App';

ReactDOMClient.createRoot(document.getElementById('root'))
              .render(<App />);
