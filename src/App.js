import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Content from './components/Content';
import Content1 from './components/Content1';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Content />
      <Content1 />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
