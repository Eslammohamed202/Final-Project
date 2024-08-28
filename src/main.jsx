
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-toastify/dist/ReactToastify.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CounterContextProvider from './Context/CounterContext.jsx';
import AuthContextProvider from './Context/AuthContext.jsx';
import { QueryClient,  QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';



const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <CounterContextProvider>
  <ReactQueryDevtools initialIsOpen={false} />
  <AuthContextProvider>
    <ToastContainer autoClose={500} />
      <App />
    </AuthContextProvider>,
  </CounterContextProvider>
  </QueryClientProvider>
)
