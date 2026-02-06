import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
