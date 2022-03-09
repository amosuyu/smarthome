import { Link } from 'react-router-dom';
const BlogPage = () => {

    return ( 
        <>
        <div className="xl:w-[80%] mx-auto">
            <div className="xl:mt-[100px]">
                <h2 className="xl:text-[40px] xl:font-light font-sans tracking-wide">Giải pháp khóa cửa nhà thông minh với neolock</h2>
            </div>
            <div className="xl:flex xl:flex-row xl:mb-[100px]">
                <div className="xl:w-[100%]">
                    <div className="xl:mt-[30px]">
                        <span className="xl:text-[13px] xl:font-normal text-[#b9b9b9] tracking-wide">28/03/2019</span>
                    </div>
                    <div className="xl:mt-5 tracking-wide text-[#555]">
                        <h4 className="xl:text-center xl:text-[27px] text-[#b63030] xl:font-light">Giải pháp khóa cửa nhà thông minh với neolock</h4>
                        <p className="xl:mt-7 xl:text-[18px] xl:font-normal">Và để thuận tiện cho việc quản lý căn nhà cho dù bạn đang ở xa, neolock giới thiệu nhiều mẫu khóa <a href="" className="xl:hover:no-underline xl:text-red-700 hover:text-[#333]">điện tử thông minh Smart Lock</a>. Có khả năng tăng tính bảo mật cho ngôi nhà, và giúp quản lý được tốt hơn lịch sử ra vào của căn nhà.</p>
                        <img className="w-full h-full object-cover" src="https://www.neolock.vn/upload/images/product_category/5306301b9322777c2e33.jpg" alt="" />
                        <p className="xl:mt-5 xl:text-[18px] xl:font-normal tracking-wide ">Cụ thể, sản phẩm khóa thông minh của neolock có thể mở khóa nhanh chóng bằng mã PIN, kết nối Bluetooth hoặc khóa cơ học dự phòng, theo dõi lịch sử ra vào nhà thông qua ứng dụng trên điện thoại, báo động khi có can thiệp cơ học và đặc biệt là cơ chế tạo lập "mật khẩu giả" phòng trường hợp bị theo dõi qua vân tay.</p>
                        <p className="xl:text-[18px] xl:font-normal">Bên cạnh đó neolock cung cấp hệ thống phần mềm quản lý cho thuê, hệ thống phần mềm quản lý khách sạn....</p>
                        <p className="xl:text-[18px] xl:font-normal">Hãy liên hệ neolock để tư vấn bạn giải pháp quản lý tiện lợi nhất, thông minh nhất....</p>
                    </div>
                </div>
                <div className="xl:w-[40%] xl:ml-[100px] xl:mt-[50px]">
                    <div className="xl:w-full xl:h-[50px] relative">
                        <input type="text" className="w-[100%] h-full outline-none px-[10px] py-[5px] border-[#d3d3d3] border-[1px] focus:border-[#df3535]" placeholder="Tìm kiếm từ khóa"/>
                        <button type="button" className="absolute top-[14px] right-[10px] pr-[10px]"><i class="fas fa-search"></i> </button>
                    </div>
                    <p className="xl:mt-[100px] xl:text-[20px] xl:font-light">Nổi bật</p>
                    <div className="w-full h-[20px] border-[#e0e0e0] border-b-[1px]"></div>
                    <Link to="" className="block xl:mt-[40px] hover:no-underline">
                        <img className="w-full h-full object-cover" src="https://www.neolock.vn/upload/images/blog/neo5_ads.jpg" alt="" />
                        <div className="text-[#333]">
                            <h4 className="xl:text-[22px] xl:font-light hover:text-red-700">Sử dụng smartphone thay chìa khóa phòng khách sạn</h4>
                            <p className="xl:text-[15px] xl:font-normal text-[#c2c2c2]">blogs - 28/03/2019</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default BlogPage;