import Header from './Header';
import NavBar from './NavBar';
import Blogs from './Blogs';
function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar/>
        <Header/>
        <div className="blog-contanier">
         <Blogs/>
        </div>
      </div>
      
        
      
      
    </div>
  );
}

export default App;
