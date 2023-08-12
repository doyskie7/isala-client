
import { useState,useEffect } from "react"
import { FilesElementary,LiveUrl  } from "../data";
import {Modal,Button,Row,Col} from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data_files from '../Reader/flattened_data.json'
import { Folder } from "./folder";


export const HighSchoolJrModule = () =>{

    
    const [CurrentCategory, SetCurrentCategory] = useState('Grade 7');
    const [GradeLevel] = useState(["Grade 7","Grade 8","Grade 9","Grade 10"])
    const [SelectedPath,SetSelectedPath] = useState([])

    const [RenderFile,SetRenderFile] = useState([])

    
    const [FullPathSelected,SetFullPathSelected] = useState("")
    const [showPDF,setshowPDF] = useState(false)

    const HandlePathNavigator = (path)=>{

        console.log(SelectedPath)

        if(SelectedPath.length >= 1 && GradeLevel.includes(path)){

            SetSelectedPath([path])
            let keyword = path

            let files = [...data_files].filter((data) => {
                return data.includes(keyword+"/");
            }).map((filteredData) => {
                let file_selected = filteredData.split('/')[ 5]
                return file_selected;
            });

            let unique_folders = [...new Set(files)]
            SetRenderFile(unique_folders)

        }else{
            if(!SelectedPath.includes(path) && !path.includes(".pdf")){
                SetSelectedPath([
                    ...SelectedPath,
                    path
                ])
                let keyword = SelectedPath.toString().replace(/,/g,"/") + "/" + path
    
                let files = [...data_files].filter((data) => {
                    return data.includes(keyword+"/");
                }).map((filteredData) => {
                    let file_selected = filteredData.split('/')[ 5 + SelectedPath.length]
                    return file_selected;
                });
    
                let unique_folders = [...new Set(files)]
                SetRenderFile(unique_folders)
    
            }else if(SelectedPath.includes(path) && !path.includes(".pdf")){
                SetSelectedPath([path])
    
                let files = [...data_files].filter((data) => {
                    return data.includes(path+"/");
                }).map((filteredData) => {
                    
                    return filteredData.split('/')[5];
                });
    
                let unique_folders = [...new Set(files)]
                SetRenderFile(unique_folders)
            }else if(path.includes(".pdf")){
    
                let keyword = SelectedPath.toString().replace(/,/g,"/") + "/" + path
                let full_path = ""
    
                for(var item in data_files){
                    if(data_files[item].includes(keyword)){
                        full_path = data_files[item]
                    }
                }
    
                console.log("full===>",keyword)
                SetFullPathSelected(full_path)
                setshowPDF(true)
            }
        }

    }

    useEffect(()=>{
        SetSelectedPath([CurrentCategory])
        let keyword = CurrentCategory

        let files = [...data_files].filter((data) => {
            return data.includes(keyword+"/");
        }).map((filteredData) => {
            let file_selected = filteredData.split('/')[ 5]
            return file_selected;
        });

        let unique_folders = [...new Set(files)]
        SetRenderFile(unique_folders)
    },[])


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
                        <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>Elementary</strong></h1>
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
                        <h2 className="align-center pb-3 mbr-fonts-style display-2">Elementary Learning Module</h2>
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
                                            HandlePathNavigator(data)
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
                                    <Folder 
                                        RenderFile={RenderFile} 
                                        HandlePathNavigator={HandlePathNavigator} 
                                    />

                                    <Modal 
                                        show={showPDF} 
                                        onHide={()=>{setshowPDF(false)}}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        >    
                                            <iframe src={"http://localhost:3000/"+FullPathSelected} width="100%" height="850px"></iframe>
                                            
                                        <Button variant="success" onClick={()=>{setshowPDF(false)}}>
                                            Close PDF
                                        </Button>
                                    </Modal>
                            </div>
                        <div className="clearfix" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
              
        <ToastContainer />
        </>
    )
}
