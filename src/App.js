import Navbar from './components/Navbar';
import About from './components/About';
import Workflow from './components/Workflow';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <About />
        <Workflow />
        <CaseStudies />
      </main>

      <Footer />
    </div>
  );
}

export default App;
