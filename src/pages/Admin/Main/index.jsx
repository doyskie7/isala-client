

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from 'awesome-react-icons'

import { ModuleInputs } from './Modules';
import {Nav} from 'react-bootstrap';

export const Admin = () =>{

return(
     <>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="assets/images/logo.png" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
                </a>
            </div>
        </nav>
        {/* <div className="w3-sidebar w3-bar-block w3-light-grey w3-card" style={{width:"160px", paddingTop:"100px"}}>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link>MODULES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>CURRICULUM</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>SCHOOL EVENTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>MODULES</Nav.Link>
                </Nav.Item>
            </Nav>
        </div> */}
        <ModuleInputs/>
    </>

    )

}