import Header from './Header';
import NavBar from './NavBar';
import Blogs from './Blogs';
function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar/>
        <div className='header-blog'>
          <Header/>
          <Blogs/>
        </div>
        
      </div>
      
        
      
      
    </div>
  );
}

export default App;
