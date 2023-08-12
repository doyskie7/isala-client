
import { useState } from "react"



export const HighSchoolSr = () =>{
    
    const [CurrentCategory, SetCurrentCategory] = useState('');

    const [ButtonLabel,SetButtonLabel] = useState([
       "Grade 11 1st Semister Core",
       "Grade 11 1st Semister Major",
       "Grade 11 2nd Semister Core",
       "Grade 11 2nd Semister Major",
       "Grade 12 1st Semister Major",
       "Grade 12 2nd Semister Core",
       "Grade 12 2nd Semister Major",
       "Grade 12 1st Semister Core",
    ])
    const [IndexFetcher,SetIndexFetcher] = useState([0,1,2,3,4,5,6,7,8,9,10])
    
    const [IndexFetcher2,SetIndexFetcher2] = useState([1,2,3,4,5,6,7,8,9,10])

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
                        <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>Senior Highschool</strong></h1>
                        <div className="mbr-section-text mbr-white pb-3 ">
                        </div>
                        <div className="mbr-section-btn"><a className="btn btn-md btn-primary display-4" href="page1.html#content4-24">Check Curriculum Maps</a></div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="mbr-section content4 cid-scKWzpDBLR" id="content4-24">
                <div className="container">
                    <div className="media-container-row">
                    <div className="title col-12 col-md-8">
                        <h2 className="align-center pb-3 mbr-fonts-style display-2">Senior Highschool Curriculum Map</h2>
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
                              <a className={"btn btn-md btn-primary-outline display-7 active"} href="" onClick={(e)=>{SetCurrentCategory('')}}>All</a>
                            </li>


                            {ButtonLabel.map((data,index)=>{
                                return(
                                    <li className="mbr-gallery-filter-all">
                                        <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === {data} ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory(data)}}>{data}</a>
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

                                { CurrentCategory === "" || CurrentCategory === "Grade 11 1st Semister Core"
                                    ?
                                        IndexFetcher.map((data,index)=>{
                                            if(index <= 4){
                                                return(<>
                                                    <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 11 1st Semister Core">
                                                        <div href="#lb-gallery2-23" data-slide-to={data} data-toggle="modal">
                                                            <img src={`assets/images/isala/curriculum/SeniorHS/Grade 11/1st Sem/core/a (${data}).jpg`} alt="" title="" />
                                                            <span class="icon-focus"></span>
                                                        </div>
                                                    </div>
                                                </>)
                                            }
                                            return "";
                                        })
                                    : ""
                                }


                                { CurrentCategory === "" || CurrentCategory === "Grade 11 1st Semister Major"
                                    ?
                                        IndexFetcher.map((data,index)=>{
                                            if(data <= 2){
                                                return(<>
                                                    <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 11 1st Semister Major">
                                                        <div href="#lb-gallery2-23" data-slide-to={data+4} data-toggle="modal">
                                                            <img src={`assets/images/isala/curriculum/SeniorHS/Grade 11/1st Sem/major/A (${data}).jpg`} alt="" title="" />
                                                            <span class="icon-focus"></span>
                                                        </div>
                                                    </div>
                                                </>)
                                            }
                                            return "";
                                        })
                                    : ""
                                }


                                { CurrentCategory === "" || CurrentCategory === "Grade 11 2nd Semister Core"
                                    ?
                                        IndexFetcher2.map((data,index)=>{
                                            if(data <= 4){
                                                return(<>
                                                     <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 11 2nd Semister Core">
                                                        <div href="#lb-gallery2-23" data-slide-to={data+7} data-toggle="modal">
                                                            <img src={`assets/images/isala/curriculum/SeniorHS/Grade 11/2nd Sem/core/a (${data}).jpg`} alt="" title="" />
                                                            <span class="icon-focus"></span>
                                                        </div>
                                                    </div>
                                                </>)
                                            }
                                            return "";
                                        })
                                    : ""
                                }

                                { CurrentCategory === "" || CurrentCategory === "Grade 11 2nd Semister Major"
                                    ?
                                        IndexFetcher2.map((data,index)=>{
                                            if(data <= 3){
                                                return(<>
                                                     <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 11 2nd Semister Major">
                                                        <div href="#lb-gallery2-23" data-slide-to={data+11} data-toggle="modal">
                                                            <img src={`assets/images/isala/curriculum/SeniorHS/Grade 11/2nd Sem/major/a (${data}).jpg`} alt="" title="" />
                                                            <span class="icon-focus"></span>
                                                        </div>
                                                    </div>
                                                </>)
                                            }
                                            return "";
                                        })
                                    : ""
                                }


                                { CurrentCategory === "" || CurrentCategory === "Grade 12 1st Semister Major"
                                    ?
                                        IndexFetcher2.map((data,index)=>{
                                            if(data <= 2){
                                                return(<>
                                                    <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 12 1st Semister Major">
                                                        <div href="#lb-gallery2-23" data-slide-to={data+14} data-toggle="modal">
                                                            <img src={`assets/images/isala/curriculum/SeniorHS/Grade 12/1st Semester/major/a (${data}).jpg`} alt="" title="" />
                                                            <span class="icon-focus"></span>
                                                        </div>
                                                    </div>
                                                </>)
                                            }
                                            return "";
                                        })
                                    : ""
                                }


                                { CurrentCategory === "" || CurrentCategory === "Grade 12 2nd Semister Core"
                                    ?
                                        IndexFetcher2.map((data,index)=>{
                                            if(data <= 2){
                                                return(<>
                                                    <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 12 2nd Semister Core">
                                                        <div href="#lb-gallery2-23" data-slide-to={data+16} data-toggle="modal">
                                                            <img src={`assets/images/isala/curriculum/SeniorHS/Grade 12/2nd Semester/core/A (${data}).jpg`} alt="" title="" />
                                                            <span class="icon-focus"></span>
                                                        </div>
                                                    </div>
                                                </>)
                                            }
                                            return "";
                                        })
                                    : ""
                                }


                                { CurrentCategory === "" || CurrentCategory === "Grade 12 2nd Semister Major"
                                    ?
                                        IndexFetcher2.map((data,index)=>{
                                            if(data <= 4){
                                                return(<>
                                                    <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 12 2nd Semister Major">
                                                        <div href="#lb-gallery2-23" data-slide-to={data+18} data-toggle="modal">
                                                            <img src={`assets/images/isala/curriculum/SeniorHS/Grade 12/2nd Semester/major/a (${data}).jpg`} alt="" title="" />
                                                            <span class="icon-focus"></span>
                                                        </div>
                                                    </div>
                                                </>)
                                            }
                                            return "";
                                        })
                                    : ""
                                }


                                <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 12 1st Semister Core">
                                    <div href="#lb-gallery2-23" data-slide-to="23" data-toggle="modal">
                                        <img src="assets/images/isala/curriculum/SeniorHS/Grade 12/1st Semester/core/A (1).jpg" alt="" title="" />
                                        <span class="icon-focus"></span>
                                    </div>
                                </div>

                                


                                


                            </div>
                        </div>
                        <div className="clearfix" />
                        </div>
                    </div>
                    {/* Lightbox */}
                    <div data-app-prevent-settings className="mbr-slider modal fade carousel slide" tabIndex={-1} data-keyboard="true" data-interval="false" id="lb-gallery2-23">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                            <div className="carousel-inner">


                                { 
                                    IndexFetcher.map((data,index)=>{
                                        if(index <= 4){
                                            return(<>
                                                <div class="carousel-item">
                                                    <img src={`assets/images/isala/curriculum/SeniorHS/Grade 11/1st Sem/core/a (${data}).jpg`} alt="" title="" />
                                                </div>
                                            </>)
                                        }
                                        return "";
                                    })
                                }


                                { 
                                    IndexFetcher.map((data,index)=>{
                                        if(data <= 2){
                                            return(<>
                                                <div class="carousel-item">
                                                    <img src={`assets/images/isala/curriculum/SeniorHS/Grade 11/1st Sem/major/A (${data}).jpg`} alt="" title="" />
                                                </div>
                                            </>)
                                        }
                                        return "";
                                    })
                                }


                                {
                                    IndexFetcher2.map((data,index)=>{
                                        if(data <= 4){
                                            return(<>
                                                <div class="carousel-item">
                                                    <img src={`assets/images/isala/curriculum/SeniorHS/Grade 11/2nd Sem/core/a (${data}).jpg`} alt="" title="" />
                                                </div>
                                            </>)
                                        }
                                        return "";
                                    })
                                }

                                { 
                                    IndexFetcher2.map((data,index)=>{
                                        if(data <= 3){
                                            return(<>
                                                <div class="carousel-item">
                                                    <img src={`assets/images/isala/curriculum/SeniorHS/Grade 11/2nd Sem/major/a (${data}).jpg`} alt="" title="" />
                                                </div>
                                            </>)
                                        }
                                        return "";
                                    })
                                }


                                { 
                                    IndexFetcher2.map((data,index)=>{
                                        if(data <= 2){
                                            return(<>
                                                <div class="carousel-item">
                                                    <img src={`assets/images/isala/curriculum/SeniorHS/Grade 12/1st Semester/major/a (${data}).jpg`} alt="" title="" />
                                                </div>
                                            </>)
                                        }
                                        return "";
                                    })
                                }


                                {
                                    IndexFetcher2.map((data,index)=>{
                                        if(data <= 2){
                                            return(<>
                                                <div class="carousel-item">
                                                    <img src={`assets/images/isala/curriculum/SeniorHS/Grade 12/2nd Semester/core/A (${data}).jpg`} alt="" title="" />
                                                </div>
                                            </>)
                                        }
                                        return "";
                                    })
                                }


                                { 
                                    IndexFetcher2.map((data,index)=>{
                                        if(data <= 4){
                                            return(<>
                                                <div class="carousel-item">
                                                    <img src={`assets/images/isala/curriculum/SeniorHS/Grade 12/2nd Semester/major/a (${data}).jpg`} alt="" title="" />
                                                </div>
                                            </>)
                                        }
                                        return "";
                                    })
                                }


                                <div class="carousel-item active">
                                    <img src="assets/images/isala/curriculum/SeniorHS/Grade 12/1st Semester/core/A (1).jpg" alt="" title="" />
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
        </>
    )
}
