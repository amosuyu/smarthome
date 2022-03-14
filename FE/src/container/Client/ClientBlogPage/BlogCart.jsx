import { Link } from 'react-router-dom';

const data = [
    {
        id: 1,
        title: 'Sử dụng smartphone thay chìa khóa phòng khách sạn',
        image: 'https://www.neolock.vn/upload/images/blog/neo5_ads.jpg',
        time: '28/03/2019'
    },
    {
        id: 2,
        title: 'Ổ khóa càng cua vân tay chống cắt POK 70 của neolock',
        image: 'https://www.neolock.vn/upload/images/product/pok70.png',
        time: '09/05/2021'
    },
    {
        id: 3,
        title: 'Neolock triển khai hệ thống thiết bị nhà thông minh neosmart sử dụng trên 1 nền tảng',
        image: 'https://www.neolock.vn/upload/images/blog/nha-thong-minh-neosmart.jpg',
        time: '09/05/2021'
    },
    {
        id: 4,
        title: 'Khóa cửa thông minh qua APP neolock chính thức OPEN API cho đối tác thứ 3',
        image: 'https://www.neolock.vn/upload/images/blog/neolock-hotel_solutions.png',
        time: '09/05/2021'
    },
    {
        id: 5,
        title: 'BẠN BẬN RỘN VỚI CÔNG VIỆC VÀ LO LẮNG CHO CON KHÔNG VÀO NHÀ ĐƯỢC',
        image: 'https://www.neolock.vn/upload/images/neolock%20(19).png',
        time: '11/10/2021'
    },
    {
        id: 6,
        title: 'SỐNG AN TOÀN VÀ TIỆN LỢI VỚI KHÓA CỬA ĐIỆN TỬ THÔNG MINH',
        image: 'https://www.neolock.vn/upload/images/NEOLOCK%20(23).png',
        time: '11/10/2021'
    }
]
const BlogCart = () => {
    const handleScrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    return ( 
        <>
            <div className="md:w-[40%] md:ml-[100px] md:mt-[50px]">
                    <div className="w-full h-[40px] relative mb-[40px]">
                        <input type="text" className="w-[100%] h-full outline-none px-[10px] py-[10px] border-[#d3d3d3] border-[1px] focus:border-[#df3535]" placeholder="Tìm kiếm từ khóa"/>
                        <button type="button" className="absolute top-[8px] right-[8px] pr-[10px]"><i className="fas fa-search"></i> </button>
                    </div>
                    <p className="md:mt-[100px] md:text-[20px] text-[18px] font-normal">Nổi bật</p>
                    <div className="w-full h-[20px] border-[#e0e0e0] border-b-[1px]"></div>
                    {data.map(post => (
                        <Link to="/blog-id" className="block md:mt-[40px] hover:no-underline" key={post.id} onClick={() => handleScrollTop()}>
                        <img className="w-full md:h-[200px] h-[220px] bg-cover" src={post.image} alt="" />
                        <div className="text-[#333]">
                            <h4 className="text-[18px] leading-7 font-extralight hover:text-red-700">{post.title}</h4>
                            <p className="text-[13px] font-light text-[#c2c2c2]">blogs - {post.time}</p>
                        </div>
                        </Link>
                    ))}
                    
                </div>
        </>
     );
}
 
export default BlogCart;