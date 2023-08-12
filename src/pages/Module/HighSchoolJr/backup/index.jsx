
import { useState,useEffect } from "react"
import { Files,LiveUrl  } from "../data";
import {Modal,Button,Card} from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const HighSchoolJrModule = () =>{

    const [showModal,SetshowModal] = useState(false);
    
    const [CurrentCategory, SetCurrentCategory] = useState('Grade 7');
    const [Subjects,SetSubjects] = useState(['AP','English','Filipino','MAPEH','Mathematics','Science','TLE','Values'])
    const [Quarter,SetQuarter] = useState(['Quarter 1','Quarter 2','Quarter 3','Quarter 4'])

    const [SelectedSubject,SetSelectedSubject] = useState('')
    const [SelectedQuarter,SetSelectedQuarter] = useState('')

    const [FilePath, SetFilePath]= useState([])

    const [StartSearch,SetStartSearch] = useState(false);
    const SearchFile = (Quarter) => {
        SetSelectedQuarter(Quarter)
        SetStartSearch(true);
    }



    useEffect(()=>{
        if(StartSearch){
            let path = `assets/module/JuniorHighSchool/${CurrentCategory}/${SelectedSubject}/${SelectedQuarter}`
            let FoundPath = [];
            for(var item = 0 ; item < Files.length; item++){
                if(Files[item].toLocaleLowerCase().includes(path.toLocaleLowerCase())){
                    FoundPath.push(Files[item])
                }
            }
            if(FoundPath.length !== 0 ){
                SetFilePath(FoundPath)
                SetshowModal(true)
            }else{
                toast("No files found!")
            }
            SetStartSearch(false)
            console.log("path===>",path)
        }
    },[StartSearch])



    const [ViewPDF,SetViewPDF] = useState(false)
    const [FileSelected,SetFileSelected] = useState(false)

    const SetSelectedFile = (path) => {
        console.log(process.env.live_url)
        if(path !== ""){
            SetFileSelected(path)
            SetViewPDF(true)
            SetshowModal(false);
        }
    }


    return (
        <>
            <section className="header3 cid-scIv9HSdvA mbr-fullscreen mbr-parallax-background" id="header3-1a">
                <div className="mbr-overlay" style={{opacity: '0.7', backgroundColor: 'rgb(193, 193, 193)'}}>
                </div>
                <div className="container">
                    <div className="media-container-row">
                    <div className="mbr-figure" style={{width: '85%'}}>
                        <img src="assets/images/slide1-2-480x384.png" alt="Mobirise" />
                    </div>
                    <div className="media-content">
                        <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>Junior Highschool</strong></h1>
                        <div className="mbr-section-text mbr-white pb-3 ">
                        </div>
                        <div className="mbr-section-btn"><a className="btn btn-md btn-primary display-4" href="page1.html#content4-24">Check Learning Modules</a></div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="mbr-section content4 cid-scKWzpDBLR" id="content4-24">
                <div className="container">
                    <div className="media-container-row">
                    <div className="title col-12 col-md-8">
                        <h2 className="align-center pb-3 mbr-fonts-style display-2">Junior Highschool Learning Module</h2>
                    </div>
                    </div>
                </div>
            </section>
            <section className="mbr-gallery mbr-slider-carousel cid-scKWwJgKMG" id="gallery2-23">
                <div className="container">
                    <div>
                    {/* Filter */}
                    <div className="mbr-gallery-filter container gallery-filter-active">
                        <ul buttons="0">
                            <li className="mbr-gallery-filter-all">
                              <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "Grade 7" ? "active" : "")}  
                                onClick={(e)=>{
                                    SetCurrentCategory('Grade 7')
                                    SetSelectedSubject('')
                                    SetSelectedQuarter('')
                                }}>Grade 7</a>
                            </li>

                            <li className="mbr-gallery-filter-all">
                              <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "Grade 8" ? "active" : "")}  
                                onClick={(e)=>{
                                    SetCurrentCategory('Grade 8')
                                    SetSelectedSubject('')
                                    SetSelectedQuarter('')
                                }}>Grade 8</a>
                            </li>

                            <li className="mbr-gallery-filter-all">
                              <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "Grade 9" ? "active" : "")}  
                                onClick={(e)=>{
                                    SetCurrentCategory('Grade 9')
                                    SetSelectedSubject('')
                                    SetSelectedQuarter('')
                                }}>Grade 9</a>
                            </li>

                            <li className="mbr-gallery-filter-all">
                              <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "Grade 10" ? "active" : "")} 
                               onClick={(e)=>{
                                    SetCurrentCategory('Grade 10')
                                    SetSelectedSubject('')
                                    SetSelectedQuarter('')
                               }}>Grade 10</a>
                            </li>
                        </ul>
                    </div>
                    {/* Gallery */}
                    <div className="mbr-gallery-row">
                        <div className="mbr-gallery-layout-default">
                        <div>
                            <div>
                                {
                                    SelectedSubject === "" ?
                                        Subjects.map((data,index)=>{
                                            return (
                                            <>
                                                <div className="mbr-gallery-item mbr-gallery-item--p2" 
                                                    data-video-url="false" 
                                                    data-tags="Grade 7" 
                                                    key={index} 
                                                    onClick={(e)=>{SetSelectedSubject(data)}}>
                                                    <div>
                                                        <img src="assets/images/isala/folder-icon.png" alt="" />
                                                        <h6>{data}</h6>
                                                    </div>
                                                </div>
                                            </>)
                                        })
                                : 
                                    Quarter.map((data,index)=>{
                                        return (
                                        <>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" 
                                                data-video-url="false" 
                                                data-tags="Grade 7" 
                                                key={index} 
                                                onClick={(e)=>{SearchFile(data)}}>
                                                <div>
                                                    <img src="assets/images/isala/folder-icon.png" alt="" />
                                                    <h6>{data}</h6>
                                                </div>
                                            </div>
                                        </>)
                                    })
                                }
                               
                            
                            </div>
                        </div>
                        <div className="clearfix" />
                        </div>
                    </div>
                    <div data-app-prevent-settings className="mbr-slider modal fade carousel slide" tabIndex={-1} data-keyboard="true" data-interval="false" id="lb-gallery2-23">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/A.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/B.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/C.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/D.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/E.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/F.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/G.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/H.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/A.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/B.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/C.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/D.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/E.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/F.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/G.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/H.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/I.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/A.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/B.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/C.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/D.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/E.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/F.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/G.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/H.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/I.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/A.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/B.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/C.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/D.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/E.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/F.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/G.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/H.jpg" alt="" />
                                </div>
                                <div className="carousel-item">
                                <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/I.jpg" alt="" />
                                </div>
                            </div>
                            <a className="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#lb-gallery2-23"><span className="mbri-left mbr-iconfont" aria-hidden="true" /><span className="sr-only">Previous</span></a>
                            <a className="carousel-control carousel-control-next" role="button" data-slide="next" href="#lb-gallery2-23"><span className="mbri-right mbr-iconfont" aria-hidden="true" /><span className="sr-only">Next</span></a>
                            <a className="close" href="#" role="button" data-dismiss="modal"><span className="sr-only">Close</span></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <Modal 
                show={showModal} 
                onHide={()=>{SetshowModal(false)}}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>Files Found!</Modal.Title>
                </Modal.Header>
                    <Modal.Body style={{ overflow:"scroll"}}>
                        {FilePath.map((data,index)=>{
                            return (
                                <Button variant="light" onClick={()=>{SetSelectedFile(data)}}>
                                    {data}
                                </Button>
                            )
                        })}     
                    </Modal.Body>
                <Button variant="primary" onClick={()=>{SetshowModal(false)}}>
                    Close
                </Button>
            </Modal>
          
            <Modal 
                show={ViewPDF} 
                onHide={()=>{SetViewPDF(false)}}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                        
                        <iframe src={LiveUrl+FileSelected} width="100%" height="850px"></iframe>
                    
                <Button variant="success" onClick={()=>{SetViewPDF(false)}}>
                    Close PDF
                </Button>
            </Modal>


              
        <ToastContainer />
        </>
    )
}
