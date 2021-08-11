import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import PageNotFoune from './components/PageNotFoune';
import Projects from './components/Projects';
import ProtectedRoute from './ProtectedRoute';
import {useState} from 'react'


function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
      <div style={{padding:'10px'}}>
        <button style={{padding:'10px', margin:'5px'}} onClick={()=>setIsAuth(true)}>Login</button>
        <button style={{padding:'10px', margin:'5px'}} onClick={()=>setIsAuth(false)}>Logout</button>
      </div>
      <Router>
        <div style={{height:'100px',display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
          <Link to="/">HomePage</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projets</Link>
        </div>
        <div style={{fontSize:'50px',display:'flex',justifyContent:'center'}}>{isAuth?`Logged In`:`Logged Out`}</div>
        <Switch>
          <Route path="/" exact />
          <ProtectedRoute path="/home" exact component={Home} isAuth={isAuth} />
          <ProtectedRoute path='/about' exact component={About} isAuth={isAuth}/>
          <ProtectedRoute path='/projects' exact component={Projects} isAuth={isAuth} />
          <Route path="*" component={PageNotFoune} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
