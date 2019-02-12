import React from 'react'
import Layout from '../../components/layout'


export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                {/* <!--================Home Banner Area =================--> */}
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                        <div className="container">
                            <div className="banner_content text-center">
                                <h2>Blog Post Details</h2>
                                <div className="page_link">
                                    <a href="index.html">Home</a>
                                    <a href="single-blog.html">Post Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================End Home Banner Area =================--> */}
                
                {/* <!--================Blog Area =================--> */}
                <section className="blog_area p_120 single-post-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="main_blog_details">
                                    <img className="img-fluid" src="/static/assets/template/fantom/img/blog/news-blog.jpg" alt=""/>
                                    <a href="#"><h4>Cartridge Is Better Than Ever <br /> A Discount Toner</h4></a>
                                    <div className="user_details">
                                        <div className="float-left">
                                            <a href="#">Lifestyle</a>
                                            <a href="#">Gadget</a>
                                        </div>
                                        <div className="float-right">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h5>Mark wiens</h5>
                                                    <p>12 Dec, 2017 11:21 am</p>
                                                </div>
                                                <div className="d-flex">
                                                    <img src="/static/assets/template/fantom/img/blog/user-img.jpg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed MCSE training.</p>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>
                                    </blockquote>
                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                                    <div className="news_d_footer">
                                        <a href="#"><i className="lnr lnr lnr-heart"></i>Lily and 4 people like this</a>
                                        <a className="justify-content-center ml-auto" href="#"><i className="lnr lnr lnr-bubble"></i>06 Comments</a>
                                        <div className="news_socail ml-auto">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-rss"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="navigation-area">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                            <div className="thumb">
                                                <a href="#"><img className="img-fluid" src="/static/assets/template/fantom/img/blog/prev.jpg" alt=""/></a>
                                            </div>
                                            <div className="arrow">
                                                <a href="#"><span className="lnr text-white lnr-arrow-left"></span></a>
                                            </div>
                                            <div className="detials">
                                                <p>Prev Post</p>
                                                <a href="#"><h4>Space The Final Frontier</h4></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                            <div className="detials">
                                                <p>Next Post</p>
                                                <a href="#"><h4>Telescopes 101</h4></a>
                                            </div>
                                            <div className="arrow">
                                                <a href="#"><span className="lnr text-white lnr-arrow-right"></span></a>
                                            </div>
                                            <div className="thumb">
                                                <a href="#"><img className="img-fluid" src="/static/assets/template/fantom/img/blog/next.jpg" alt=""/></a>
                                            </div>										
                                        </div>									
                                    </div>
                                </div>
                                <div className="comments-area">
                                    <h4>05 Comments</h4>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="/static/assets/template/fantom/img/blog/c1.jpg" alt=""/>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="#">Emilly Blunt</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="" className="btn-reply text-uppercase">reply</a> 
                                            </div>
                                        </div>
                                    </div>	
                                    <div className="comment-list left-padding">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="/static/assets/template/fantom/img/blog/c2.jpg" alt=""/>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="#">Elsie Cunningham</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="" className="btn-reply text-uppercase">reply</a> 
                                            </div>
                                        </div>
                                    </div>	
                                    <div className="comment-list left-padding">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="/static/assets/template/fantom/img/blog/c3.jpg" alt=""/>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="#">Annie Stephens</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="" className="btn-reply text-uppercase">reply</a> 
                                            </div>
                                        </div>
                                    </div>	
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="/static/assets/template/fantom/img/blog/c4.jpg" alt=""/>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="#">Maria Luna</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="" className="btn-reply text-uppercase">reply</a> 
                                            </div>
                                        </div>
                                    </div>	
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="/static/assets/template/fantom/img/blog/c5.jpg" alt=""/>
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="#">Ina Hayes</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="" className="btn-reply text-uppercase">reply</a> 
                                            </div>
                                        </div>
                                    </div>	                                             				
                                </div>
                                <div className="comment-form">
                                    <h4>Leave a Reply</h4>
                                    <form>
                                        <div className="form-group form-inline">
                                        <div className="form-group col-lg-6 col-md-6 name">
                                            <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 email">
                                            <input type="email" className="form-control" id="email" placeholder="Enter email address"/>
                                        </div>										
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege" required=""></textarea>
                                        </div>
                                        <a href="#" className="primary-btn submit_btn">Post Comment</a>	
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                    <aside className="single_sidebar_widget search_widget">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Posts"/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
                                            </span>
                                        </div>
                                        <div className="br"></div>
                                    </aside>
                                    <aside className="single_sidebar_widget author_widget">
                                        <img className="author_img rounded-circle" src="/static/assets/template/fantom/img/blog/author.png" alt=""/>
                                        <h4>Charlie Barber</h4>
                                        <p>Senior blog writer</p>
                                        <div className="social_icon">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-github"></i></a>
                                            <a href="#"><i className="fa fa-behance"></i></a>
                                        </div>
                                        <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                                        <div className="br"></div>
                                    </aside>
                                    <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title">Popular Posts</h3>
                                        <div className="media post_item">
                                            <img src="/static/assets/template/fantom/img/blog/popular-post/post1.jpg" alt="post"/>
                                            <div className="media-body">
                                                <a href="blog-details.html"><h3>Space The Final Frontier</h3></a>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="/static/assets/template/fantom/img/blog/popular-post/post2.jpg" alt="post"/>
                                            <div className="media-body">
                                                <a href="blog-details.html"><h3>The Amazing Hubble</h3></a>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="/static/assets/template/fantom/img/blog/popular-post/post3.jpg" alt="post"/>
                                            <div className="media-body">
                                                <a href="blog-details.html"><h3>Astronomy Or Astrology</h3></a>
                                                <p>03 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="/static/assets/template/fantom/img/blog/popular-post/post4.jpg" alt="post"/>
                                            <div className="media-body">
                                                <a href="blog-details.html"><h3>Asteroids telescope</h3></a>
                                                <p>01 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="br"></div>
                                    </aside>
                                    <aside className="single_sidebar_widget"> 
                                        <a href="#"><img className="img-fluid" src="/static/assets/template/fantom/img/blog/add.jpg" alt=""/></a>
                                        <div className="br"></div>
                                    </aside>
                                    <aside className="single_sidebar_widget post_category_widget">
                                        <h4 className="widget_title">Post Catgories</h4>
                                        <ul className="list cat-list">
                                            <li>
                                                <a href="#" className="d-flex justify-content-between">
                                                    <p>Technology</p>
                                                    <p>37</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex justify-content-between">
                                                    <p>Lifestyle</p>
                                                    <p>24</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex justify-content-between">
                                                    <p>Fashion</p>
                                                    <p>59</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex justify-content-between">
                                                    <p>Art</p>
                                                    <p>29</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex justify-content-between">
                                                    <p>Food</p>
                                                    <p>15</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex justify-content-between">
                                                    <p>Architecture</p>
                                                    <p>09</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex justify-content-between">
                                                    <p>Adventure</p>
                                                    <p>44</p>
                                                </a>
                                            </li>															
                                        </ul>
                                        <div className="br"></div>
                                    </aside>
                                    <aside className="single-sidebar-widget tag_cloud_widget">
                                        <h4 className="widget_title">Tag Clouds</h4>
                                        <ul className="list">
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Fashion</a></li>
                                            <li><a href="#">Architecture</a></li>
                                            <li><a href="#">Fashion</a></li>
                                            <li><a href="#">Food</a></li>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Lifestyle</a></li>
                                            <li><a href="#">Art</a></li>
                                            <li><a href="#">Adventure</a></li>
                                            <li><a href="#">Food</a></li>
                                            <li><a href="#">Lifestyle</a></li>
                                            <li><a href="#">Adventure</a></li>
                                        </ul>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================Blog Area =================--> */}
            </Layout>
        )
    }
}
