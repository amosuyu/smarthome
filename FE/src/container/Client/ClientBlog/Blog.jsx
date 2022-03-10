import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Blog.css";

const data = [
    {
        id: 1,
        title: 'Khóa điện tử thông minh - giải pháp cho cuộc sống an toàn và tiện lợi',
        time: '15/12/2017',
        image: 'https://www.neolock.vn/upload/images/blog/HTB1Go64aqigSKJjSsppq6ybnpXaC.jpg'
    },
    {
        id: 2,
        title: 'Lý do bạn nên chọn khóa cửa thông minh điều khiển từ xa',
        time: '03/04/2018',
        image: 'https://www.neolock.vn/upload/images/blog/26172929_206130163282951_5219091921837371139_o.png'
    },
    {
        id: 3,
        title: 'Giải pháp khóa cửa nhà thông minh với Neolock',
        time: '28/03/2019',
        image: 'https://www.neolock.vn/upload/images/blog/59e052c8e7993c010af0f98ed91dc0c5.jpg'
    },
    {
        id: 4,
        title: 'Sử dụng smartphone thay chìa khóa phòng khách sạn',
        time: '28/03/2019',
        image: 'https://www.neolock.vn/upload/images/blog/neo5_ads.jpg'
    },
    {
        id: 5,
        title: 'Giới thiệu khóa cửa thông minh Neolock',
        time: '17/06/2019',
        image: 'https://www.neolock.vn/upload/images/img/cua_cuong.png'
    },
    {
        id: 6,
        title: 'Tích hợp khóa cửa thông minh Neolock với nền tảng Luxstay, AirBnb',
        time: '18/06/2019',
        image: 'https://www.neolock.vn/upload/images/blog/blog-1.jpg'
    },
    {
        id: 7,
        title: 'Gateway quản lý khóa từ xa thông qua internet ',
        time: '19/06/2019',
        image: 'https://www.neolock.vn/upload/images/img/giai_phap_quan_ly_homestay.png'
    }
];

const Blog = () => {
    let settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [{
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: false
              }
            }]
      };
    return ( 
        <>
            <div className="w-[90%] mx-auto mb-[20px] font-lora">
                <h2 className="text-[#1e2d7d] text-[25px]">Bài viết</h2>
            </div>
            <Slider {...settings} className="xl:w-[90%] xl:mx-auto md:w-[100%] font-lora " >
                {data.map(post => (
                    <div to="" className="group block w-full h-[300px] relative " key={post.id}>
                        <div className="xl:w-[99%] h-full xl:border-[#dfdfdf] xl:border-2 md:w-full">
                            <img src={post.image} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <Link id="RouterNavLink" to="/blog" className="w-full h-full absolute z-[1010] top-0 left-0">
                            <div  className="xl:absolute xl:z-[1000] xl:top-0 xl:left-0 xl:w-[99%] xl:h-full xl:bg-[#444] text-center xl:opacity-0 group-hover:opacity-80 xl:transition-opacity ">
                                <div className="xl:w-full xl:absolute xl:bottom-1 xl:opacity-1 wrap-title-blog">
                                    <h2 className="xl:text-[20px] xl:font-medium hover:no-underline text-[#fff] hover:text-[#007aff] title-blog transition-all">{post.title.toUpperCase()}</h2>
                                    <span className="xl:text-[15px] text-[#d4d4d4c9] text-left title-small">blogs - {post.time}</span>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                ))}
                    

                    
                    
            </Slider>
        </>
     );
}
 
export default Blog;