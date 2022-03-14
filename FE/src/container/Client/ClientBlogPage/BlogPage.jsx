import { Link } from 'react-router-dom';
import BlogCart from './BlogCart';

const BlogPage = () => {

    return ( 
        <>
        <div className="w-full h-[150px] md:h-[350px] relative overflow-hidden">
            <img className="w-full h-[300px] md:h-[1000px] object-cover absolute top-0 left-0" src="https://www.neolock.vn/upload/images/blog/59e052c8e7993c010af0f98ed91dc0c5.jpg" alt="" />
        </div>
        <div className="md:w-[90%] mx-auto px-[20px]">
            <div className="md:mt-[100px] mt-[60px]">
                <h2 className="text-[38px] leading-[50px] font-light tracking-wider">Giải pháp khóa cửa nhà thông minh với neolock</h2>
            </div>
            <div className="md:flex md:flex-row md:mb-[100px]">
                <div className="md:w-[100%]">
                    <div className="md:mt-[30px]">
                        <span className="md:text-[13px] md:font-normal text-[#b9b9b9] tracking-wide text-[13px]">28/03/2019</span>
                    </div>
                    <div className="md:mt-5 tracking-wide text-[#555] mt-[15px]">
                        <h4 className="md:text-center md:text-[27px] text-[#b63030] md:font-light ">Giải pháp khóa cửa nhà thông minh với neolock</h4>
                        <div className="text-[18px] font-normal leading-9 mt-[30px]">
                            <p className="md:mt-7">Và để thuận tiện cho việc quản lý căn nhà cho dù bạn đang ở xa, neolock giới thiệu nhiều mẫu khóa <a href="" className="md:hover:no-underline md:text-red-700 hover:text-[#333]">điện tử thông minh Smart Lock</a>. Có khả năng tăng tính bảo mật cho ngôi nhà, và giúp quản lý được tốt hơn lịch sử ra vào của căn nhà.</p>
                            <img className="w-full h-full object-cover mb-[20px]" src="https://www.neolock.vn/upload/images/product_category/5306301b9322777c2e33.jpg" alt="" />
                            <p className="md:mt-5 tracking-wide ">Cụ thể, sản phẩm khóa thông minh của neolock có thể mở khóa nhanh chóng bằng mã PIN, kết nối Bluetooth hoặc khóa cơ học dự phòng, theo dõi lịch sử ra vào nhà thông qua ứng dụng trên điện thoại, báo động khi có can thiệp cơ học và đặc biệt là cơ chế tạo lập "mật khẩu giả" phòng trường hợp bị theo dõi qua vân tay.</p>
                            <p >Bên cạnh đó neolock cung cấp hệ thống phần mềm quản lý cho thuê, hệ thống phần mềm quản lý khách sạn....</p>
                            <p >Hãy liên hệ neolock để tư vấn bạn giải pháp quản lý tiện lợi nhất, thông minh nhất....</p>
                        </div>
                    </div>
                </div>
                <BlogCart />
            </div>
        </div>
        </>
     );
}
 
export default BlogPage;