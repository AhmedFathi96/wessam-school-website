import * as React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from '../Home';
import HighlightsPage from '../Highlights';
import BlogPage from '../Blog';
import ContactPage from '../Contact';
import Courses from '../Courses';
import Students from '../StudentSigningForm/students';

// import About from '../about';


const AuthenticationRoutes: React.FC = () =>{
    return(
        
        <Switch>
            {/* {/* <Route exact={true} path='/admins' component={Admins} /> */}
            <Route exact={true} path='/' component={HomePage} />
            <Route exact={true} path='/highlights' component={HighlightsPage} />
            <Route exact={true} path='/blog' component={BlogPage} />
            <Route exact={true} path='/contact-us' component={ContactPage} />
            <Route exact={true} path='/courses' component={Courses} />
            <Route exact={true} path='/enroll' component={Students} />
        </Switch>
    )
}

export default AuthenticationRoutes;