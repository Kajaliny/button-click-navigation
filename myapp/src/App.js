import Login from './components/Login';
import Dashboard from '.components/Dashboard';

function App(){
    return(
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/dash' element={<Dashboard/>}/>
                  

                </Routes>
            </Router>
        </div>
    );
}