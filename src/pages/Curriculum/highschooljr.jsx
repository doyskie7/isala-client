
import { useState } from "react"



export const HighSchoolJr = () =>{
    
    const [CurrentCategory, SetCurrentCategory] = useState('');

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
                        <div className="mbr-section-btn"><a className="btn btn-md btn-primary display-4" href="page1.html#content4-24">Check Curriculum Maps</a></div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="mbr-section content4 cid-scKWzpDBLR" id="content4-24">
                <div className="container">
                    <div className="media-container-row">
                    <div className="title col-12 col-md-8">
                        <h2 className="align-center pb-3 mbr-fonts-style display-2">Junior Highschool Curriculum Map</h2>
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

                            <li className="mbr-gallery-filter-all">
                              <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade7" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade7')}}>Grade 7</a>
                            </li>

                            <li className="mbr-gallery-filter-all">
                              <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade8" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade8')}}>Grade 8</a>
                            </li>

                            <li className="mbr-gallery-filter-all">
                              <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade9" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade9')}}>Grade 9</a>
                            </li>

                            <li className="mbr-gallery-filter-all">
                              <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade10" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade10')}}>Grade 10</a>
                            </li>
                        </ul>
                    </div>
                    {/* Gallery */}
                    <div className="mbr-gallery-row">
                        <div className="mbr-gallery-layout-default">
                        <div>
                            <div>

                                { CurrentCategory === "" || CurrentCategory === "grade7"
                                    ?
                                    <>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 7">
                                            <div href="#lb-gallery2-23" data-slide-to="0" data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/A.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 7">
                                            <div href="#lb-gallery2-23" data-slide-to="1" data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/B.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 7">
                                            <div href="#lb-gallery2-23" data-slide-to={2} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/C.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 7">
                                            <div href="#lb-gallery2-23" data-slide-to={3} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/D.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 7">
                                            <div href="#lb-gallery2-23" data-slide-to={4} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/E.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 7">
                                            <div href="#lb-gallery2-23" data-slide-to={5} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/F.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 7">
                                            <div href="#lb-gallery2-23" data-slide-to={6} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/G.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 7">
                                            <div href="#lb-gallery2-23" data-slide-to={7} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 7/H.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                    </>
                                      : ""
                                }


                                { CurrentCategory === "" || CurrentCategory === "grade8"
                                    ?
                                    <>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={8} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/A.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={9} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/B.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={10} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/C.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={11} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/D.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={12} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/E.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={13} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/F.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={14} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/G.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={15} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/H.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 8">
                                            <div href="#lb-gallery2-23" data-slide-to={16} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 8/I.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                    </>
                                      : ""
                                }


                                { CurrentCategory === "" || CurrentCategory === "grade9"
                                    ?
                                    <>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={17} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/A.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={18} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/B.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={19} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/C.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={20} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/D.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={21} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/E.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={22} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/F.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={23} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/G.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={24} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/H.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 9">
                                            <div href="#lb-gallery2-23" data-slide-to={25} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 9/I.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                    </>
                                      : ""
                                }


                                 { CurrentCategory === "" || CurrentCategory === "grade10"
                                    ?
                                    <>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={26} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/A.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={27} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/B.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={28} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/C.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={29} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/D.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={30} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/E.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={31} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/F.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={32} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/G.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={33} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/H.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>
                                        <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 10">
                                            <div href="#lb-gallery2-23" data-slide-to={34} data-toggle="modal">
                                            <img src="assets/images/isala/curriculum/JuniorHS/Grade 10/I.jpg" alt="" />
                                            <span className="icon-focus" />
                                            </div>
                                        </div>

                                    </>
                                      : ""
                                }


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
        </>
    )
}
