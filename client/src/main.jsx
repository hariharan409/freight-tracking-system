import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EntryPoint from '@/layout/EntryPoint';
import { Provider } from 'react-redux';
import {store} from '@/store/store';
import '@/index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_SUBURL}>
            <Provider store={store}>
                <EntryPoint />
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
