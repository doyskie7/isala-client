

import {Modal,Button,Card} from 'react-bootstrap'
import { useState,useEffect } from "react"
import { Animate } from 'react-simple-animate';
export const Body = () =>{

    
    const [showModal,SetshowModal] = useState(false); 

    return(
        <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <section className="header8 cid-scFOm2RuTo mbr-fullscreen mbr-parallax-background" id="header8-6">
            <div className="mbr-overlay" style={{opacity:'0.7', backgroundColor:"rgb(193, 193, 193)"}}></div>
                <div className="container align-center" onClick={()=>{SetshowModal(true)}}>
                    <div className="row justify-content-md-center">
                        <div className="mbr-white col-md-10">
                            <div className="mbr-media show-modal align-center py-2" data-modal=".modalWindow">
                                <span className="mbr-iconfont mbri-play" style={{color: "rgb(127, 25, 51)", fill: "rgb(127, 25, 51)"}}></span>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
                
            <Modal 
                show={showModal} 
                onHide={()=>{SetshowModal(false)}}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Body>
                        <iframe width="100%" height="100%" frameBorder="0" allowFullScreen="1" src="https://www.youtube.com/embed/Qiv5dSyCefo" title="test"></iframe>
                        {/* <iframe src="https://www.youtube.com/embed/Qiv5dSyCefo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    </Modal.Body>
            </Modal>
                
            </div>
        </section>
        </Animate>
    )
}