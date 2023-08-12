import { useState } from "react"
import { Animate } from "react-simple-animate";
export const Elementary = () => {

  const [CurrentCategory, SetCurrentCategory] = useState('');

    return(
        <>
            <Animate>
                <section className="header3 cid-scIv9HSdvA mbr-fullscreen mbr-parallax-background" id="header3-1a">
                    <div className="mbr-overlay" style={{opacity:"0.7", backgroundColor:"rgb(193, 193, 193)"}}></div>

                    <div className="container">
                        <div className="media-container-row">
                            <div className="mbr-figure" style={{width: "85%"}}>
                                <img src="assets/images/slide1-2-480x384.png" alt="Mobirise" title="" />
                            </div>

                            <div className="media-content">
                                <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>Elementary</strong></h1>

                                <div className="mbr-section-text mbr-white pb-3"></div>
                                <div className="mbr-section-btn"><a className="btn btn-md btn-primary display-4" href="page1.html#content4-24">Check Curriculum Maps</a></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mbr-section content4 cid-scKWzpDBLR" id="content4-24">
                    <div className="container">
                        <div className="media-container-row">
                            <div className="title col-12 col-md-8">
                                <h2 className="align-center pb-3 mbr-fonts-style display-2">Elementary Curriculum Map</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mbr-gallery mbr-slider-carousel cid-scKWwJgKMG" id="gallery2-23">
                    <div className="container">
                        <div>
                            {/* <!-- Filter --> */}
                            <div className="mbr-gallery-filter container gallery-filter-active">
                                <ul buttons="0">
                                    <li className="mbr-gallery-filter-all">
                                    <a className={"btn btn-md btn-primary-outline display-7 active"} href="" onClick={(e)=>{SetCurrentCategory('')}}>All</a>
                                    </li>
                                    
                                    <li className="mbr-gallery-filter-all">
                                    <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "kinder" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('kinder')}}>Kinder/Nursery</a>
                                    </li>

                                    <li className="mbr-gallery-filter-all">
                                    <a className={"btn btn-md btn-primary-outline display-7  " +(CurrentCategory === "grade1" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade1')}}>Grade 1</a>
                                    </li>
                                    
                                    <li className="mbr-gallery-filter-all">
                                    <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade2" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade2')}}>Grade 2</a>
                                    </li>

                                    <li className="mbr-gallery-filter-all">
                                    <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade3" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade3')}}>Grade 3</a>
                                    </li>

                                    <li className="mbr-gallery-filter-all">
                                    <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade4" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade4')}}>Grade 4</a>
                                    </li>

                                    <li className="mbr-gallery-filter-all">
                                    <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade5" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade5')}}>Grade 5</a>
                                    </li>

                                    <li className="mbr-gallery-filter-all">
                                    <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "grade6" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('grade6')}}>Grade 6</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Gallery --> */}
                            <div className="mbr-gallery-row">
                                <div className="mbr-gallery-layout-default">
                                    <div>
                                        <div>


                                    
                                        { CurrentCategory === "" || CurrentCategory === "kinder"
                                            ?
                                            <>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="0" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/ARALING PANLIPUNAN-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="1" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/ARTS-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="2" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/ENGLISH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="3" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/FILIPINO-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="4" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/HEALTH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="5" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/MATH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="6" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/MTB-MLE-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="7" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/MUSIC-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="8" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/PHYSICAL-EDUCATION-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Kinder/Nursery">
                                                <div href="#lb-gallery2-23" data-slide-to="9" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/SCIENCE-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            </>
                                            : ""
                                        }
                                            


                                            { CurrentCategory === "" || CurrentCategory === "grade1"
                                            ?
                                            <>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="10" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/ARALING PANLIPUNAN-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="11" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/ARTS-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="12" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/ENGLISH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="13" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/FILIPINO-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="14" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/HEALTH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="15" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/MATH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="16" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/MTB-MLE-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="17" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/MUSIC-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="18" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/PHYSICAL-EDUCATION-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="19" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/SCIENCE-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 1">
                                                <div href="#lb-gallery2-23" data-slide-to="20" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 1/VALUES-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            </>

                                            : ""
                                            }
                                            


                                            { CurrentCategory === "" || CurrentCategory === "grade2"
                                            ?
                                            <>  
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="21" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/ARALING PANLIPUNAN-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="22" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/ARTS-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="23" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/ENGLISH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="24" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/FILIPINO-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="25" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/HEALTH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="26" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/MATH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="27" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/MTB-MLE-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="28" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/MUSIC-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="29" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/PHYSICAL EDUCATION-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="30" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/SCIENCE-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 2">
                                                <div href="#lb-gallery2-23" data-slide-to="31" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 2/VALUES-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            
                                            </>
                                            : ""
                                            }

                                            { CurrentCategory === "" || CurrentCategory === "grade3"
                                            ?
                                            <>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 3">
                                                <div href="#lb-gallery2-23" data-slide-to="40" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 3/AralingPanlipunan.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 3">
                                                <div href="#lb-gallery2-23" data-slide-to="41" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 3/English.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 3">
                                                <div href="#lb-gallery2-23" data-slide-to="42" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 3/MAPEH-Arts.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 3">
                                                <div href="#lb-gallery2-23" data-slide-to="43" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 3/MAPEH-Music.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 3">
                                                <div href="#lb-gallery2-23" data-slide-to="44" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 3/Mathematics.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 3">
                                                <div href="#lb-gallery2-23" data-slide-to="45" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 3/Physical Education.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 3">
                                                <div href="#lb-gallery2-23" data-slide-to="46" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 3/Science.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 3">
                                                <div href="#lb-gallery2-23" data-slide-to="47" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 3/Values Education.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            </>
                                            : ""
                                            }


                                            { CurrentCategory === "" || CurrentCategory === "grade4"
                                            ?
                                            <>
                                            
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 4">
                                                <div href="#lb-gallery2-23" data-slide-to="48" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 4/Araling Panlipunan.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 4">
                                                <div href="#lb-gallery2-23" data-slide-to="49" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 4/English.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 4">
                                                <div href="#lb-gallery2-23" data-slide-to="50" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 4/MAPEH-Arts.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 4">
                                                <div href="#lb-gallery2-23" data-slide-to="51" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 4/MAPEH-Music.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 4">
                                                <div href="#lb-gallery2-23" data-slide-to="52" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 4/Mathematics.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 4">
                                                <div href="#lb-gallery2-23" data-slide-to="53" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 4/MAPEH-Physical Education.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 4">
                                                <div href="#lb-gallery2-23" data-slide-to="54" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 4/Science.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 4">
                                                <div href="#lb-gallery2-23" data-slide-to="55" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 4/Values Education.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            </>
                                            : ""
                                            }
                                            


                                            { CurrentCategory === "" || CurrentCategory === "grade5"
                                            ?
                                            <>
                                            
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 5">
                                                <div href="#lb-gallery2-23" data-slide-to="32" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 5/AP-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 5">
                                                <div href="#lb-gallery2-23" data-slide-to="33" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 5/English-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 5">
                                                <div href="#lb-gallery2-23" data-slide-to="34" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 5/ESP-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 5">
                                                <div href="#lb-gallery2-23" data-slide-to="35" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 5/Filipino-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 5">
                                                <div href="#lb-gallery2-23" data-slide-to="36" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 5/MAPEH-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 5">
                                                <div href="#lb-gallery2-23" data-slide-to="37" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 5/Math-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 5">
                                                <div href="#lb-gallery2-23" data-slide-to="38" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 5/Science-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 5">
                                                <div href="#lb-gallery2-23" data-slide-to="39" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 5/TLE-1.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            </>
                                            : ""
                                            }


                                            { CurrentCategory === "" || CurrentCategory === "grade6"
                                            ?
                                            <>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 6">
                                                <div href="#lb-gallery2-23" data-slide-to="57" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 6/AP.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 6">
                                                <div href="#lb-gallery2-23" data-slide-to="58" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 6/ENGLISH.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 6">
                                                <div href="#lb-gallery2-23" data-slide-to="59" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 6/FILIPINO.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 6">
                                                <div href="#lb-gallery2-23" data-slide-to="60" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 6/MAPEH.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 6">
                                                <div href="#lb-gallery2-23" data-slide-to="61" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 6/MATH.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 6">
                                                <div href="#lb-gallery2-23" data-slide-to="62" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 6/SCIENCE.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 6">
                                                <div href="#lb-gallery2-23" data-slide-to="63" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 6/TLE.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Grade 6">
                                                <div href="#lb-gallery2-23" data-slide-to="64" data-toggle="modal">
                                                    <img src="assets/images/isala/curriculum/Elementary/Grade 6/VALUES EDUCATION.jpg" alt="" title="" />
                                                    <span className="icon-focus"></span>
                                                </div>
                                            </div>
                                            </>
                                            : ""
                                            }
                                        
                                    

                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            {/* <!-- Lightbox --> */}
                            <div data-app-prevent-settings="" className="mbr-slider modal fade carousel slide" tabIndex="-1" data-keyboard="true" data-interval="false" id="lb-gallery2-23">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="carousel-inner">
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/ARALING PANLIPUNAN-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/ARTS-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/ENGLISH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/FILIPINO-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/HEALTH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/MATH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/MTB-MLE-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/MUSIC-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/PHYSICAL-EDUCATION-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Kinder-Nursery/SCIENCE-1.jpg" alt="" title="" /></div>

                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/ARALING PANLIPUNAN-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/ARTS-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/ENGLISH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/FILIPINO-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/HEALTH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/MATH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/MTB-MLE-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/MUSIC-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/PHYSICAL-EDUCATION-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/SCIENCE-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 1/VALUES-1.jpg" alt="" title="" /></div>

                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/ARALING PANLIPUNAN-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/ARTS-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/ENGLISH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/FILIPINO-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/HEALTH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/MATH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/MTB-MLE-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/MUSIC-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/PHYSICAL EDUCATION-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 2/SCIENCE-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item active"><img src="assets/images/isala/curriculum/Elementary/Grade 2/VALUES-1.jpg" alt="" title="" /></div>

                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 5/AP-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 5/English-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 5/ESP-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 5/Filipino-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 5/MAPEH-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 5/Math-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 5/Science-MLE-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 5/TLE-1.jpg" alt="" title="" /></div>

                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 3/AralingPanlipunan.jpg" alt="" title="" /></div>
                                                {/* <!--40--> */}
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 3/English.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 3/MAPEH-Arts.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 3/MAPEH-Music.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 3/Mathematics.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 3/Physical Education.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 3/Science.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 3/Values Education.jpg" alt="" title="" /></div>

                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/Araling Panlipunan.jpg" alt="" title="" /></div>
                                                {/* <!--48--> */}
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/English.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/MAPEH-Arts.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/MAPEH-Music.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/Mathematics.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/Physical Education.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/Science.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/MUSIC-1.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 4/Values Education.jpg" alt="" title="" /></div>

                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 6/AP.jpg" alt="" title="" /></div>
                                                {/* <!--47--> */}
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 6/ENGLISH.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 6/FILIPINO.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 6/MAPEH.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 6/MATH.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 6/SCIENCE.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 6/TLE.jpg" alt="" title="" /></div>
                                                <div className="carousel-item"><img src="assets/images/isala/curriculum/Elementary/Grade 6/VALUES EDUCATION.jpg" alt="" title="" /></div>
                                            </div>
                                            <a className="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#lb-gallery2-23">
                                                <span className="mbri-left mbr-iconfont" aria-hidden="true"></span><span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control carousel-control-next" role="button" data-slide="next" href="#lb-gallery2-23">
                                                <span className="mbri-right mbr-iconfont" aria-hidden="true"></span><span className="sr-only">Next</span>
                                            </a>
                                            <a className="close" href="#" role="button" data-dismiss="modal"><span className="sr-only">Close</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Animate>
        </>
    )
}