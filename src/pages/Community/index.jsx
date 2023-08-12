

import { useState } from "react"

export const Community = () =>{

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
                <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>Community Linkages</strong></h1>
                <div className="mbr-section-text mbr-white pb-3 ">
                </div>
                <div className="mbr-section-btn"><a className="btn btn-md btn-primary display-4" href="page1.html#content4-24">Explore</a></div>
              </div>
            </div>
          </div>
        </section>
        <section className="mbr-section content4 cid-scKWzpDBLR" id="content4-24">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">School Participation</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="mbr-gallery mbr-slider-carousel cid-scKWwJgKMG" id="gallery2-23">
          <div className="container">
            <div>
              {/* Filter */}
              <div className="mbr-gallery-filter container gallery-filter-active">
                <ul buttons={0}>
                    <li className="mbr-gallery-filter-all">
                        <a className={"btn btn-md btn-primary-outline display-7 active"} href="" onClick={(e)=>{SetCurrentCategory('')}}>All</a>
                    </li>
                    
                    <li className="mbr-gallery-filter-all">
                        <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "Buwan ng Wika" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('Buwan ng Wika')}}>Buwan ng Wika</a>
                    </li>

                    <li className="mbr-gallery-filter-all">
                        <a className={"btn btn-md btn-primary-outline display-7  " +(CurrentCategory === "Nutrition Month" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('Nutrition Month')}}>Nutrition Month</a>
                    </li>
                    
                    <li className="mbr-gallery-filter-all">
                        <a className={"btn btn-md btn-primary-outline display-7  " + (CurrentCategory === "Sport Feast" ? "active" : "")} href="" onClick={(e)=>{SetCurrentCategory('Sport Feast')}}>Sport Feast</a>
                    </li>
                </ul>
              </div>
              {/* Gallery */}
              <div className="mbr-gallery-row">
                <div className="mbr-gallery-layout-default">
                  <div>
                    <div>

                    { CurrentCategory === "" || CurrentCategory === "Buwan ng Wika"
                    ?
                        <>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Buwan ng Wika">
                                <div href="#lb-gallery2-23" data-slide-to={0} data-toggle="modal"><img src="assets/images/slide1-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                            </div>

                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Buwan ng Wika">
                                <div href="#lb-gallery2-23" data-slide-to={1} data-toggle="modal"><img src="assets/images/slide2-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                            </div>

                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Buwan ng Wika">
                                <div href="#lb-gallery2-23" data-slide-to={2} data-toggle="modal"><img src="assets/images/slide3-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                            </div>

                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Buwan ng Wika">
                                <div href="#lb-gallery2-23" data-slide-to={3} data-toggle="modal"><img src="assets/images/slide8-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                            </div>
                        </>
                        : ""
                    }

                    { CurrentCategory === "" || CurrentCategory === "Nutrition Month"
                    ?
                        <>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Nutrition Month">
                                <div href="#lb-gallery2-23" data-slide-to={4} data-toggle="modal"><img src="assets/images/slide3-1-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Nutrition Month">
                                <div href="#lb-gallery2-23" data-slide-to={5} data-toggle="modal"><img src="assets/images/slide4-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Nutrition Month">
                                <div href="#lb-gallery2-23" data-slide-to={6} data-toggle="modal"><img src="assets/images/slide6-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Nutrition Month">
                                <div href="#lb-gallery2-23" data-slide-to={7} data-toggle="modal"><img src="assets/images/slide7-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                            </div>
                        </>
                        : ""
                    }


                     { CurrentCategory === "" || CurrentCategory === "Sport Feast"
                    ?
                        <>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Sports feast">
                                <div href="#lb-gallery2-23" data-slide-to={8} data-toggle="modal">
                                <img src="assets/images/71186418-489097858352259-1893092000618512384-n-960x720-800x600.jpg" alt="" /><span className="icon-focus" />
                                </div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Sports feast">
                                <div href="#lb-gallery2-23" data-slide-to={9} data-toggle="modal">
                                <img src="assets/images/71300803-489099281685450-7323549942742515712-n-960x720-800x600.jpg" alt="" /><span className="icon-focus" />
                                </div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Sports feast">
                                <div href="#lb-gallery2-23" data-slide-to={10} data-toggle="modal">
                                <img src="assets/images/71774179-489098538352191-37483983478456320-n-960x720-800x600.jpg" alt="" /><span className="icon-focus" />
                                </div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Sports feast">
                                <div href="#lb-gallery2-23" data-slide-to={11} data-toggle="modal"><img src="assets/images/slide1-1-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
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
                        <div className="carousel-item"><img src="assets/images/slide1-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide2-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide3-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide8-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide3-1-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide4-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide6-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide7-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/71186418-489097858352259-1893092000618512384-n-960x720.jpg" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/71300803-489099281685450-7323549942742515712-n-960x720.jpg" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/71774179-489098538352191-37483983478456320-n-960x720.jpg" alt="" /></div>
                        <div className="carousel-item active"><img src="assets/images/slide1-1-480x384.png" alt="" /></div>
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
        <section className="mbr-gallery mbr-slider-carousel cid-scLrApYEN8" id="gallery3-2z">
          <div>
            <div>
              {/* Filter */}{/* Gallery */}
              <div className="mbr-gallery-row">
                <div className="mbr-gallery-layout-default">
                  <div>
                    <div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={0} data-toggle="modal"><img src="assets/images/slide6-2-480x384-480x384.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={1} data-toggle="modal"><img src="assets/images/slide1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={2} data-toggle="modal"><img src="assets/images/slide2-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={3} data-toggle="modal"><img src="assets/images/slide3-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={4} data-toggle="modal"><img src="assets/images/slide4-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={5} data-toggle="modal"><img src="assets/images/slide5-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={6} data-toggle="modal"><img src="assets/images/slide6-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={7} data-toggle="modal"><img src="assets/images/slide7-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={8} data-toggle="modal"><img src="assets/images/slide1-1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={9} data-toggle="modal"><img src="assets/images/slide2-1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={10} data-toggle="modal"><img src="assets/images/slide3-1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={11} data-toggle="modal"><img src="assets/images/slide4-1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={12} data-toggle="modal"><img src="assets/images/slide5-1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={13} data-toggle="modal"><img src="assets/images/slide6-1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={14} data-toggle="modal"><img src="assets/images/slide7-1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={15} data-toggle="modal"><img src="assets/images/slide8-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={16} data-toggle="modal"><img src="assets/images/slide1-2-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={17} data-toggle="modal"><img src="assets/images/slide2-2-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={18} data-toggle="modal"><img src="assets/images/slide3-2-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={19} data-toggle="modal"><img src="assets/images/slide4-2-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={20} data-toggle="modal"><img src="assets/images/slide5-2-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={21} data-toggle="modal"><img src="assets/images/slide6-2-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={22} data-toggle="modal"><img src="assets/images/slide7-2-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                        <div href="#lb-gallery3-2z" data-slide-to={23} data-toggle="modal"><img src="assets/images/slide8-1-960x720-800x600.png" alt="" /><span className="icon-focus" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              {/* Lightbox */}
              <div data-app-prevent-settings className="mbr-slider modal fade carousel slide" tabIndex={-1} data-keyboard="true" data-interval="false" id="lb-gallery3-2z">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="carousel-inner">
                        <div className="carousel-item active"><img src="assets/images/slide6-2-480x384.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide1-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide2-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide3-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide4-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide5-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide6-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide7-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide1-1-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide2-1-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide3-1-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide4-1-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide5-1-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide6-1-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide7-1-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide8-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide1-2-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide2-2-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide3-2-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide4-2-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide5-2-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide6-2-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide7-2-960x720.png" alt="" /></div>
                        <div className="carousel-item"><img src="assets/images/slide8-1-960x720.png" alt="" /></div>
                      </div>
                      <a className="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#lb-gallery3-2z"><span className="mbri-left mbr-iconfont" aria-hidden="true" /><span className="sr-only">Previous</span></a>
                      <a className="carousel-control carousel-control-next" role="button" data-slide="next" href="#lb-gallery3-2z"><span className="mbri-right mbr-iconfont" aria-hidden="true" /><span className="sr-only">Next</span></a>
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