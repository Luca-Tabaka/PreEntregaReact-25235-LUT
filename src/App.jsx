import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Footer, Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#000' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
