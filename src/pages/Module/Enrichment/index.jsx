
import { useState,useEffect } from "react"
import { FilesSenior,LiveUrl } from "../data";
import {Modal,Button,Row,Col} from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import duplicateArray from 'remove-array-duplicates'


export const EnrichmentClass = () =>{

    const [showModal,SetshowModal] = useState(false);
    
    const [GradeLevel,SetGradeLevel] = useState(["Journalism","Speech and Drama","Science","Math","Performing Arts"])
    const [CurrentCategory, SetCurrentCategory] = useState('Journalism');

    const [FinalPath,SetFinalPath] = useState([]);
    const [FilePath, SetFilePath]= useState(FilesSenior)

    const [GetSem,SetGetSem] = useState(true);
    const [SelectedSem,SetSelectedSem] = useState("");
    const [Semister,SetSemister] = useState([]);


    const [LastFolder,SetLastFolder] = useState(false);
    const [CurrentFolderList,SetCurrentFolderList] = useState([]);
    const [CurrentFolder,SetCurrentFolder] = useState(0);
    const [Search,SetSearch] = useState(false);





    const [Subjects,SetSubjects] = useState(['AP','English','Filipino','MAPEH','Mathematics','TLE','Values'])
    const [Quarter,SetQuarter] = useState(['Quarter 1','Quarter 2','Quarter 3','Quarter 4'])
    const [Weeks,SetWeeks] = useState([])


    const [SelectedSubject,SetSelectedSubject] = useState('')
    const [SelectedQuarter,SetSelectedQuarter] = useState('')
    const [SelectedWeek,SetSelectedWeek] = useState('');



    const [StartSearch,SetStartSearch] = useState(false);

    const [GetSubject,SetGetSubject] = useState(true);
    const [GetQuarter,SetGetQuarter] = useState(true);
    const [GetWeeks,SetGetWeeks] = useState(true);


    const [ViewPDF,SetViewPDF] = useState(false)
    const [FileSelected,SetFileSelected] = useState(false)


    const [SubDescription,SetSubDescription] = useState('Grade 7 to Grade 10');

    const SetSelectedFile = (path) => {
        console.log(process.env.live_url)
        if(path !== ""){
            SetFileSelected(path)
            SetViewPDF(true)
            SetshowModal(false);
        }
    }


    useEffect(()=>{
        if(GetSem){
            let Files = [];
            let Semis = [];
            for(var item in FilePath){
                if(FilePath[item].toLocaleLowerCase().includes(CurrentCategory.toLocaleLowerCase())){
                    Files.push(FilePath[item]);
                    if(!Semis.includes(FilePath[item].split("/")[4])){
                        Semis.push(FilePath[item].split("/")[4])
                    }
                }
            }
            console.log("Files===>",Files)
            console.log("Semis===>",Semis)
            SetCurrentFolder(4)
            SetSemister(Semis)
            SetFinalPath(Files)
            SetGetSem(false);
        }
        if(Search){
            try {
                let Current = [];
                let ForFinalFolder = [];
                let LastDIR= false
                for(var item in FilePath){
                    if(FilePath[item].toLocaleLowerCase().includes(SelectedSem.toLocaleLowerCase())){
                        if(!Current.includes(FilePath[item].split("/")[CurrentFolder+1])){
                            if(FilePath[item].split("/")[CurrentFolder+1].includes(".pdf")){
                                LastDIR = true
                                if(FinalPath.length !== 0 ){
                                    SetshowModal(true)
                                }else{
                                    toast("No files found!")
                                }
                            }else{
                                Current.push(FilePath[item].split("/")[CurrentFolder+1])
                            }
                            ForFinalFolder.push(FilePath[item])
                        }
                    }
                }
                if(LastDIR === false){
                    SetSemister(Current)
                    SetCurrentFolder(CurrentFolder+1)
                    SetFinalPath(ForFinalFolder)
                }else{
                    
                    SetLastFolder(LastDIR);
                    SetshowModal(true)
                }
                
            } catch (error) {
                
                toast("Something wrong accessing this file!")
            }
            

            SetSearch(false);
        }
    },[GetSem,Search])


    const SetDesc = (data) => {
        if(data==="Journalism"){
            SetSubDescription("Grade 7 to Grade 10")
        }
        if(data==="Speech and Drama"){
            SetSubDescription("Grade 7 to Grade 10")
        }
        if(data==="Science"){
            SetSubDescription("Astronomy, Earth Science, Environmental Science, Science Investigatory Projects")
        }
        if(data==="Math"){
            SetSubDescription("Intro to Statistic, Intro to Calculus, Intro to Analytical Geometry, Intro to Trigonometry")
        }
        if(data==="Performing Arts"){
            SetSubDescription("Painting, Dance, Choir, Instrumental Music")
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
                        <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>Enrichment Class</strong></h1>
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
                        <h2 className="align-center pb-3 mbr-fonts-style display-2">Enrichment Class for 2nd Sem</h2>
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
                            {GradeLevel.map((data,index)=>{
                                return (
                                    <li className="mbr-gallery-filter-all" key={index}>
                                        <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === data ? "active" : "")}  
                                        onClick={(e)=>{
                                            SetCurrentCategory(data)
                                            SetDesc(data)
                                            // SetGetSem(true)
                                        }}>{data}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* Gallery */}
                    <div className="mbr-gallery-row">
                        <div className="mbr-gallery-layout-default">
                        <div>
                            <div>

                               
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <div className="card separline pb-4">
                                        <div className="step-text-content align-center ">
                                                <div class="btn btn-md btn-primary">
                                                    <div className="pb-3 mbr-fonts-style display-2">{SubDescription}
                                                </div> 
                                            </div>
                                        </div>
                                </div>
                                




                                {/* {
                                    //SelectedSem === "" ?
                                        Semister.map((data,index)=>{
                                            return (
                                            <>
                                                <div className="mbr-gallery-item mbr-gallery-item--p2" 
                                                    data-video-url="false" 
                                                    data-tags="Grade 7" 
                                                    key={index} 
                                                    onClick={(e)=>{
                                                            SetSelectedSem(data)
                                                            SetSearch(true)
                                                            }
                                                        }>
                                                    <div>
                                                        <img src="assets/images/isala/folder-icon.png" alt="" />
                                                        <h6>{data}</h6>
                                                    </div>
                                                </div>
                                            </>)
                                        })
                                } */}
                               
                            
                            </div>
                        </div>
                        <div className="clearfix" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <Modal 
                show={showModal} 
                onHide={()=>{
                    SetshowModal(false)
                    SetFilePath(FilesSenior)
                }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>Files Found!</Modal.Title>
                </Modal.Header>
                    <Modal.Body  style={{ overflow:"scroll"}}>
                        {FinalPath.map((data,index)=>{
                            return (
                                <>
                                    <Button variant="light" onClick={()=>{
                                        SetSelectedFile(data)
                                        SetFilePath(FilesSenior)
                                        }}>
                                        {data.split("/")[CurrentFolder+1]}
                                    </Button>
                                    <br/>
                                </>
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
