import Map from "./map";
import MyMap from "./mymap";
import Myinfo from "./myinfo";
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from "./pages/login/login";
import Register from "./pages/Register/register";
import ForgetPwd from "./pages/ForgetPwd/ForgetPwd";
import AdminMain from "./adminpages/AdminMain"
import Page from "./mychart";

function App() {
  return ( 
    <div>
        <Switch>
            <Route path='/mymap' component={MyMap}/>
            <Route path='/myinfo' component={Myinfo}/>
            <Route path='/test' component={Page}/>
            <Route path='/map' component={Map}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgetPwd" component={ForgetPwd} />
            <Route path="/admininfo" component={AdminMain} />
            <Redirect to= "/map" />
            {/* <Route path="/" exact render={() => <Redirect to="/map" />}/> */}
        </Switch> 
    </div> 
  );
}

export default App;
