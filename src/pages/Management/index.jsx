

import { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Management = () =>{

    const [CurrentCategory, SetCurrentCategory] = useState('');


    return (
        <>
        <section className="header6 cid-scIBGDexlF mbr-fullscreen mbr-parallax-background" id="header6-1f">
          <div className="mbr-overlay" style={{opacity: '0.7', backgroundColor: 'rgb(193, 193, 193)'}}>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="mbr-white col-md-10">
                <h1 className="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">School Management</h1>
                <div className="mbr-section-btn align-center"><a className="btn btn-md btn-primary display-4" href="page2.html#testimonials-slider1-1n">Administrators</a>
                  <a className="btn btn-md btn-white-outline display-4" href="page2.html#testimonials1-1v">Faculty Members</a></div>
              </div>
            </div>
          </div>
          <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
            <a href="#next">
              <i className="mbri-down mbr-iconfont" />
            </a>
          </div>
        </section>
        <section className="testimonials1 cid-scKLW3vPNM" id="testimonials1-1v">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 align-center">
                <h2 className="pb-3 mbr-fonts-style display-2">F A C U L T Y</h2>
              </div>
            </div>
          </div>
          <div className="container pt-3 mt-2">
            <div className="media-container-row">
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-9-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">MIKEE HONEYZIEL D. AÑEZ, LPT</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher 
                        <br /></em>mikyanglapsat@gmail.com<em><br /></em></small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-11-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">LOURENCE M. RANGA, LPT&nbsp;</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher 
                      </em><br />rangalourence1211@gmail.com<br /></small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-14-240x347.jpeg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">ARVIN D. DE LA CRUZ, LPT</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher 
                        <br /></em>arvindelacruz922@gmail.com<br /></small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-7-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">FERNALINE DOMINGO, LPT&nbsp;</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher<br /></em>domingofernaline@gmail.com<em><br /></em></small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-8-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">MA. ROSARIO ELEANOR C. RABAGO, LPT&nbsp;</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher</em><br />mhengrabago@gmail.com
                    </small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-10-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" /></div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">CHARMAINE C. DUMBRIQUE, LPT</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7">&nbsp;<em>Teacher</em><br />charmaine.lpt@gmail.com
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </section>
        <section className="testimonials1 cid-scKLUeUNer" id="testimonials1-1u">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 align-center">
              </div>
            </div>
          </div>
          <div className="container pt-3 mt-2">
            <div className="media-container-row">
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-15-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">JAMES LOLEC J. TAPIRU, LPT&nbsp;</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher </em>jameslolecjaviertapiru@gmail.com 
                    </small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-17-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">GILBERT U. DELA CRUZ&nbsp;</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher </em>walterdisney1920@gmail.com
                    </small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-12-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">VIVIALYN PATRICIA M. SILVESTRE, LPT</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher </em>arvindelacruz922@gmail.com
                    </small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-16-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">CRIZANTO MARIE O. CORPUZ</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher</em><br />crizmariecorpuz@gmail.com
                    </small>
                  </div>
                </div>
              </div>
              <div className="mbr-testimonial p-3 align-center col-12 col-md-6 col-lg-4">
                <div className="panel-item p-3">
                  <div className="card-block">
                    <div className="testimonial-photo">
                      <img src="assets/images/isala-13-240x347.jpg" alt="" />
                    </div>
                    <p className="mbr-text mbr-fonts-style display-7" />
                  </div>
                  <div className="card-footer">
                    <div className="mbr-author-name mbr-bold mbr-fonts-style display-7">JOHN MICHAEL ARCA&nbsp;</div>
                    <small className="mbr-author-desc mbr-italic mbr-light mbr-fonts-style display-7"><em>
                        Teacher</em> arcajohnmichael@gmail.com 
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </section>

        <section className="carousel slide testimonials-slider cid-scIF7qcbkk mbr-parallax-background" data-interval="false" id="testimonials-slider1-1n">
          <div className="mbr-overlay" style={{opacity: '0.9', backgroundColor: 'rgb(255, 255, 255)'}}>
          </div>
          <div className="container text-center">
            <h2 className="pb-5 mbr-fonts-style display-2">
              ADMINISTRATORS
            </h2>
            <div className="carousel slide" role="listbox" data-pause="true" data-keyboard="false" data-ride="carousel" data-interval="5000">
              <div className="carousel-inner">
                
                <div className="carousel-item active">
                  <div className="user col-md-8">
                    <div className="user_image">
                      <img src="assets/images/isala-1-400x578.jpg" alt="" />
                    </div>
                    <div className="user_text pb-3">
                      <p className="mbr-fonts-style display-7" /><p><strong>HELENA MARITA PALALAY PH.D.</strong></p><p />
                    </div>
                    <div className="user_name mbr-bold pb-2 mbr-fonts-style display-7"><em>School President</em></div>
                    <div className="user_desk mbr-light mbr-fonts-style display-7">
                      Internationalofthearts@gmail.com
                    </div>
                  </div>
                </div>

                
                <div className="carousel-item">
                  <div className="user col-md-8">
                    <div className="user_image">
                      <img src="assets/images/53402686-10156333152683250-8171337316871176192-n-400x400.jpeg" alt="" />
                    </div>
                    <div className="user_text pb-3">
                      <p className="mbr-fonts-style display-7"><strong>RYAN MARVIN S. MABEZA MM.CPME </strong></p>
                    </div>
                    <div className="user_name mbr-bold pb-2 mbr-fonts-style display-7"><em>School Director</em></div>
                    <div className="user_desk mbr-light mbr-fonts-style display-7">
                      ryan.mabeza@gmail.coM</div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="user col-md-8">
                    <div className="user_image">
                      <img src="assets/images/isala-3-400x578.jpg" alt="" />
                    </div>
                    <div className="user_text pb-3">
                      <p className="mbr-fonts-style display-7"><strong>MAVE RICK C. AGUSTIN</strong></p>
                    </div>
                    <div className="user_name mbr-bold pb-2 mbr-fonts-style display-7"><em>Office of the Registrar</em></div>
                    <div className="user_desk mbr-light mbr-fonts-style display-7">maverickagustin1@gmail.com</div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="user col-md-8">
                    <div className="user_image">
                      <img src="assets/images/isala-4-400x578.jpg" alt="" />
                    </div>
                    <div className="user_text pb-3">
                      <p className="mbr-fonts-style display-7"><strong>EVELYN P. RAMEL</strong></p>
                    </div>
                    <div className="user_name mbr-bold pb-2 mbr-fonts-style display-7"><em>Principal&nbsp;</em></div>
                    <div className="user_desk mbr-light mbr-fonts-style display-7">
                      maverickagustin1@gmail.coM</div>
                  </div>
                </div>
                
                <div className="carousel-item">
                    <div className="user col-md-8">
                        <div className="user_image">
                        <img src="assets/images/isala-5-400x578.jpg" alt="" />
                        </div>
                        <div className="user_text pb-3">
                        <p className="mbr-fonts-style display-7"><strong>MA. FLORDELIZ C. RABAGO</strong></p>
                        </div>
                        <div className="user_name mbr-bold pb-2 mbr-fonts-style display-7"><em>Senior High School Coordinator&nbsp;</em></div>
                        <div className="user_desk mbr-light mbr-fonts-style display-7">
                        flordelizcabel@gmail.com
                        </div>
                    </div>
                    </div>
                </div>

              <div className="carousel-controls">
                <a className="carousel-control-prev" role="button" data-slide="prev">
                  <span aria-hidden="true" className="mbri-arrow-prev mbr-iconfont" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" role="button" data-slide="next">
                  <span aria-hidden="true" className="mbri-arrow-next mbr-iconfont" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        </>
    )
    
}