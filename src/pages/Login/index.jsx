import  {Button, Form,Tab ,Tabs} from 'react-bootstrap'
import { LoginComponent } from './LoginComponent'



export const Login = () => {


    return(
        <>
            <section data-bs-version="5.1" className="form6 cid-texwxTz0bZ header3 cid-scIv9HSdvA mbr-fullscreen mbr-parallax-background" id="form6-l">
                <div  style={{marginTop:"10px",backgroundColor:"white", width:"30%", height:"50%", marginLeft:"700px"}}>
                    {/* <Tabs defaultActiveKey="faculty" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="faculty" title="Faculty">
                            <LoginComponent />
                        </Tab>
                        <Tab eventKey="student" title="Student">
                            Not active
                        </Tab>
                    </Tabs> */}
                    <LoginComponent />
                </div>
            </section>
        </>
    )
}