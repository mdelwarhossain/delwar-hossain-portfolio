import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
      />
    </div>
  );
}

export default App;
