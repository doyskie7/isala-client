import  {Button, Form,Tab ,Tabs} from 'react-bootstrap'
import { useEffect,useState } from 'react'
import {axios} from 'axios'

export const LoginComponent = () =>{
    const [Load, SetLoad] = useState(true);
    const [UserName,SetUserName] = useState('');
    const [Password,SetPassword] = useState('');
    useEffect(()=>{
        if(Load){
            
        }
        SetLoad(false)
    },[])

    return (
        <>
            <Form style={{marginTop:"20px",padding:"25px", marginLeft:"10px"}}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h3>Login</h3>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}