import  {Button, Form,Col ,Row,Container} from 'react-bootstrap'
import { useState } from 'react';
export const ModuleInputs = () =>{

    const [Elementary,SetElementary] = useState(["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"])
    const [JuniorHigh,SetJuniorHigh] = useState(["Grade 7","Grade 8","Grade 9","Grade 10"])
    const [SeniorHigh,SetSeniorHigh] = useState(["Grade 11","Grade 12"])

    const [Subjects,SetSubjects] = useState(["AP","English","Filipino","MAPEH","Mathematics","Science","TLE","Values"])
    const [Quarter,SetQuarter] = useState(["Quarter 1","Quarter 2","Quarter 3","Quarter 4"])

    const [SelectedStage,SetSelectedStage] = useState('');
    const [SelectedLevel,SetSelectedLevel] = useState('');
    const [SelectedSubject,SetSelectedSubject] = useState('');
    const [SelectedQuarter,SetSelectedQuarter] = useState('');


    return (
        <section data-bs-version="5.1" className="form6 cid-texwxTz0bZ header3 cid-scIv9HSdvA mbr-fullscreen mbr-parallax-background" id="form6-l">
            <div  style={{marginTop:"-450px",backgroundColor:"white", width:"70%", height:"30%", marginLeft:"320px"}}>
                

                <Container>
                    <Form style={{marginTop:"0",padding:"25px"}}>
                        <Row>
                            <Col></Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="Label">
                                        <h3><strong>Modules Update</strong></h3>
                                    </Form.Group>
                                </Col>
                            <Col></Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <h3>Grade Stage</h3>
                                    <select class="form-select" aria-label="Default select example" onChange={(e)=>{SetSelectedStage(e.target.value)}}>
                                        <option value=""></option>
                                        <option value="Elementary">Elementary</option>
                                        <option value="Junior High School">Junior High School</option>
                                        <option value="Senior High School">Senior High School</option>
                                    </select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <h3>Grade Level</h3>

                                    <select class="form-select" aria-label="Default select example"  onChange={(e)=>{SetSelectedLevel(e.target.value)}}>
                                        <option value=""></option>
                                        {SelectedStage === "Elementary" ? 
                                            
                                                Elementary.map((data,index)=>{
                                                    return(<>
                                                        <option value={data} key={index}>{data}</option>
                                                    </>)
                                                })

                                            : SelectedStage === "Junior High School" ?

                                                JuniorHigh.map((data,index)=>{
                                                    return(<>
                                                        <option value={data} key={index}>{data}</option>
                                                    </>)
                                                })

                                            : SelectedStage === "Senior High School" ?

                                                SeniorHigh.map((data,index)=>{
                                                    return(<>
                                                        <option value={data} key={index}>{data}</option>
                                                    </>)
                                                })
                                            : ""
                                        }
                                    </select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <h3>Subject</h3>
                                    <select class="form-select" aria-label="Default select example" onChange={(e)=>{SetSelectedSubject(e.target.value)}}>
                                        <option value=""></option>
                                        {Subjects.map((data,index)=>{
                                            return(<>
                                                <option value={data}>{data}</option>
                                            </>)
                                        })}
                                    </select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <h3>Quarter</h3>
                                    <select class="form-select" aria-label="Default select example" onChange={(e)=>{SetSelectedQuarter(e.target.value)}}>
                                        <option value=""></option>
                                        {Quarter.map((data,index)=>{
                                            return(<>
                                                <option value={data}>{data}</option>
                                            </>)
                                        })}
                                    </select>
                                </Form.Group>
                            </Col>

                        </Row>


                        <Row>
                            <Col>
                                <div class="input-group">
                                    <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col></Col>
                                <Col>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" type="button">Upload</button>
                                    </div>
                                </Col>
                            <Col></Col>
                        </Row>
                    
                    </Form>

                </Container>
            </div>
        </section>
    );
}
