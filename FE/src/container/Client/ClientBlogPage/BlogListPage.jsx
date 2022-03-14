import { Link } from "react-router-dom";
import { useState } from "react";
import BlogCart from "./BlogCart";
import Pagination from "./Pagination";


const posts = [
    {
        id: 1,
        title: 'Giải pháp và Mô hình cho thuê tủ locker thông minh - Smart locker rental solutions',
        image: 'https://www.neolock.vn/upload/images/blog/tu_locker_thong_minh_neolock.jpg',
        time: '07/07/2021',
        content: 'Mô hình cho thuê tủ locker thông minh thông qua ứng dụng di động, người dùng có thể chọn loại tủ locker, thời gian, thanh toán trực tuyến và người dùng có thể mở tủ thông qua mã vạch, mã số, thẻ từ, vân tay, tablet trung tâm, qua APP giúp tối ưu sự tiện ích cho khách hàng.'
    },
    {
        id: 2,
        title: 'Giải pháp giao nhận hàng hóa thông qua tủ locker thông minh neolock với các hệ thống thương mại điện tử',
        image: 'https://www.neolock.vn/upload/images/blog/smart_locker_neolock.jpg',
        time: '07/07/2021',
        content: 'Xu hướng mua hàng hóa trực tuyến trong bối cảnh dịch bệnh, giản cách xã hội phát triển mạnh mẽ do dó dịch vụ giao nhận hàng hóa sẽ tiềm ẩn nhiều nguy cơ lây nhiễm bệnh khi tiếp xúc giao hàng hóa, do đó Neolock cung cấp khóa tủ locker thông minh và API, SDK cho việc tích hợp hê sinh thái ứng dụng của đối tác'
    },
    {
        id: 3,
        title: 'Giải pháp khóa từ không dây cho khách sạn thông minh',
        image: 'https://www.neolock.vn/upload/images/services/reception-guests-queue-check-in.jpg',
        time: '26/05/2021 ',
        content: 'neoHotel cung cấp giải pháp thông minh và quản lý khách sạn thông qua khóa cửa không dây. Giải pháp khách sạn thông minh neoHotel giúp hỗ trợ những nhà quản lý tối đa trong các công tác giám sát hoạt động trong khách sạn mọi lúc, mọi nơi và đảm bảo chất lượng dịch vụ luôn đạt chuẩn. Trong thời đại 4.0 hiện nay, đối với ngành nhà hàng - khách sạn thì công nghệ số chính là chìa khóa giúp cho những nhà quản lí việc đáp ứng hầu hết các nhu cầu của khách hàng và nâng tầm thương hiệu.'
    },
    {
        id: 4,
        title: 'Ổ khóa càng cua vân tay chống cắt POK 70 của neolock',
        image: 'https://www.neolock.vn/upload/images/product/pok70.png',
        time: '09/05/2021',
        content: 'Ổ khóa càng cua thông minh POK 70 chống cắt và hỗ trợ vân tay, mở khóa thông qua ứng dụng di động neoSmart 1 cách tiện lợi vfa quên đi những chìa khóa cơ'
    },
    {
        id: 5,
        title: 'Neolock triển khai hệ thống thiết bị nhà thông minh neosmart sử dụng trên 1 nền tảng',
        image: 'https://www.neolock.vn/upload/images/blog/nha-thong-minh-neosmart.jpg',
        time: '09/05/2021',
        content: 'Neolock triển khai hệ thống thiết bị nhà thông minh neosmart sử dụng trên 1 ứng dụng di động giúp cho khách hàng điều khiển mọi thiết bị như khóa cửa, công tắt, cầu dao, đèn, thiết bị an ninh, lọc không khí, robot lau nhà, thiết bị bếp'
    },
    {
        id: 6,
        title: 'Khóa cửa thông minh qua APP neolock chính thức OPEN API cho đối tác thứ 3',
        image: 'https://www.neolock.vn/upload/images/blog/neolock-hotel_solutions.png',
        time: '09/05/2021 ',
        content: 'Bạn kinh doanh homestay tại nhiều tỉnh thành hoặc phát triển ứng dụng kết nối các homestay và bạn gặp vấn đề về việc kiểm soát khách ra vào? Bạn thấy bất lực mỗi khi khách yêu cầu giao chìa khóa vào ban đêm? Đừng lo, neolock ra đời là dành cho bạn. Chỉ cần tích hợp khóa thông minh neolock với nền tảng Luxstay, việc quản lý căn hộ trở nên dễ dàng hơn bao giờ hết.'
    },
    {
        id: 7,
        title: 'BẠN BẬN RỘN VỚI CÔNG VIỆC VÀ LO LẮNG CHO CON KHÔNG VÀO NHÀ ĐƯỢC',
        image: 'https://www.neolock.vn/upload/images/neolock%20(19).png',
        time: '11/10/2019',
        content: 'Thời đại 4.0 khiến chúng ta luôn bận rộn, không dành nhiều thời gian cho việc kiểm soát việc đi lại của con cái. Bạn lo lắng cho con mình không vào nhà được thì hãy yên tâm chỉ với chiếc smartphone và truy cập vào ứng dụng, bạn có thể truy cập xem lịch sử ra vào của ngôi nhà và hoàn toàn an tâm cho sự an toàn của con mình.'
    },
    {
        id: 8,
        title: 'SỐNG AN TOÀN VÀ TIỆN LỢI VỚI KHÓA CỬA ĐIỆN TỬ THÔNG MINH',
        image: 'https://www.neolock.vn/upload/images/NEOLOCK%20(23).png',
        time: '11/10/2019',
        content: 'Khóa cửa điện tử thông minh ra đời như một điểm nhấn đánh dấu bước phát triển của công nghệ 4.0, được áp dụng trong ngành bảo mật an ninh, mang lại vô số tiện ích cho người sử dụng. Tuy nhiên cụ thể như thế nào hãy cùng chúng tôi tìm hiểu thêm thông tin dưới đây bạn nhé.'
    },
    {
        id: 9,
        title: 'Ổ khóa cửa vân tay thông minh tốt nhất 2021',
        image: 'https://www.neolock.vn/upload/images/Untitled-1-01(1).png',
        time: '10/10/2019',
        content: 'Dưới đây là những ổ khóa thông minh tốt nhất trên thị trường. Chúng tôi đã xem xét thời gian cài đặt, bảo mật, tính năng tiện lợi và khả năng tương thích nhà thông minh.'
    },
    {
        id: 10,
        title: 'Nỗi lo khóa cửa thông minh và an toàn cho mỗi nhà',
        image: 'https://www.neolock.vn/upload/images/neolock%20(18).png',
        time: '07/10/2019',
        content: 'Phải chăng bạn đang lo lắng về sự an toàn cho gia đình mình và tài sản giá trị trong nhà có thể lọt vào tầm ngắm của siêu trộm không? Thật tế đó là mối lo ngại chung của tất cả mọi người hiện nay. Theo nghiên cứu cứ 20s là xảy ra một vụ trộm cắp trên cả nước, với con số này đủ làm bạn lo ngại cho chính bản thân mình và người thân rồi. '
    },
    {
        id: 11,
        title: 'QUẢN LÝ KHÁCH SẠN QUA HỆ THỐNG KHÓA CỬA ĐIỆN TỬ',
        image: 'https://www.neolock.vn/upload/images/neolock%20(12).png',
        time: '07/10/2019',
        content: 'Để quản lý khách sạn qua hệ thống khóa cửa điện tử trở lên đơn giản, hiệu quả, chính xác hơn. Chúng tôi xin giới thiệu chi tiết hệ thống thẻ từ qua bài viết này, đây chắc chắn là đề tài đáng quan tâm đối với những người đang có nhu cầu quản lý khách sạn với khóa thẻ từ .'
    },
    {
        id: 12,
        title: 'GIẢI PHÁP KHÓA KHÁCH SẠN THÔNG MINH – CHÌA KHÓA THÀNH CÔNG CHO DỊCH VỤ KHÁCH HÀNG',
        image: 'https://www.neolock.vn/upload/images/GI%E1%BA%A2I%20PH%C3%81P%20KH%C3%93A%20KH%C3%81CH%20S%E1%BA%A0N%20TH%C3%94NG%20MINH.png',
        time: '07/10/2019',
        content: 'Nếu như ở không gian gia đình, khóa cửa thông minh còn chưa được ứng dụng nhiều thì trong lĩnh vực nhà hàng khách sạn, việc lắp khóa cửa thông minh ngày nay đã được ứng dụng rộng rãi. Trên thực tế, giải pháp khóa khách sạn thông minh – Chính là đã có được đến 90% sự hài lòng của khách hàng đối với dịch vụ của doanh nghiệp.'
    },
    {
        id: 13,
        title: 'KHÓA THÔNG MINH - GIẢI PHÁP CHO HOMESTAY',
        image: 'https://www.neolock.vn/upload/images/neolock%20(15).png',
        time: '06/10/2019',
        content: 'Việc đầu tư hệ thống khóa cửa hiện đại là một phần không thể thiếu trong việc đầu tư xây dựng một khách sạn hiện đại. Nhờ loại khóa này, chủ sở hữu sẽ có giải pháp quản lý Homestay của mình thuận tiện, dễ dàng, hiệu quả hơn.'
    },
    {
        id: 14,
        title: 'Điều khiển khóa cửa thông minh neolock thông qua Gateway G2',
        image: 'https://www.neolock.vn/upload/images/neolock%20(11).png',
        time: '03/10/2019',
        content: 'Khóa cửa điều khiển từ xa được thiết kế với mục đích phục vụ nhu cầu mở khóa mà không cần đến tận vị trí cửa nhà. Các dòng khóa cơ thông thường làm mất khá nhiều thời gian và công sức mỗi khi có khách đến nhưng hiện nay với các loại khóa thông minh thì việc mở khóa đã trở lên đơn giản và dễ dàng đi rất nhiều.'
    },
    {
        id: 15,
        title: 'KHÓA CỬA VÂN TAY NÀO TỐT NHẤT HIỆN NAY',
        image: 'https://www.neolock.vn/upload/images/neolock%20(10).png',
        time: '01/10/2019',
        content: 'Thời buổi công nghiệp hóa, nhu cầu sử dụng các loại khóa vân tay của người tiêu dùng ngày càng tăng cao. Việc đánh giá khóa cửa vân tay nào tốt đang là vấn đề cấp thiết cần được giải quyết, chúng tôi dưới góc độ chuyên gia sẽ giúp bạn giải quyết vấn đề này giúp bạn qua bài viết dưới đây.'
    },
    {
        id: 16,
        title: 'KHÓA CỬA CAO CẤP NEOLOCK - ĐẲNG CẤP NGÔI NHÀ BẠN',
        image: 'https://www.neolock.vn/upload/images/neolock%20(16).png',
        time: '30/09/2019',
        content: 'Hiện tại khóa Neolock được xác định là một trong những thương hiệu khóa cửa cao cấp lớn nhất Việt Nam. Neolock tự hào là nhà cung cấp giải pháp khóa và phụ kiện cửa cho các dự án khách sạn 5 sao và 6 sao, các dự án chung cư cao cấp trên khắp cả nước.'
    },
    {
        id: 17,
        title: 'ƯU NHƯỢC ĐIỂM CỦA KHÓA ĐIỆN TỬ',
        image: 'https://www.neolock.vn/upload/images/%C6%B0u%20nh%C6%B0%E1%BB%A3c%20%C4%91i%E1%BB%83m%20c%E1%BB%A7a%20kh%C3%B3a%20%C4%91i%E1%BB%87n%20t%E1%BB%AD.png',
        time: '30/09/2019',
        content: 'Thị trường khóa điện tử ở Việt Nam ngày càng đuợc mở rộng và phát triển mạnh mẽ. Tuy nhiên, bất kỳ sản phẩm hay dòng khóa cửa nào đều có 02 mặt ưu và nhược điểm mà người sử dụng cần được biết đến để lựa chọn sản phẩm khóa phù hợp với thị hiếu của mình, với kiểu dáng cửa mà bạn đang sử dụng và có biện pháp xử lý có thể khả thi khi gặp vấn đề.'
    },
    {
        id: 18,
        title: 'CÙNG NEOLOCK GIẢI ĐÁP THẮC MẮC KHÓA CỬA BẰNG VÂN TAY',
        image: 'https://www.neolock.vn/upload/images/neolock%20(5).png',
        time: '27/09/2019',
        content: 'Khóa vân tay là một loại khóa cửa thông minh, khá phổ biến trên thị trường, đặc biệt là ở các thành phố lớn. Tuy nhiên, không phải ai cũng biết loại khóa này. Để giúp bạn hiểu rõ hơn về họ, Neolock đã thu thập các câu hỏi và thắc mắc mà khách hàng của chúng tôi gặp phải và trả lời chúng trong bài viết này.'
    },
    {
        id: 19,
        title: 'CÁCH QUẢN LÝ HOMESTAY HIỆU QUẢ - BÍ QUYẾT KINH DOANH HOMESTAY',
        image: 'https://www.neolock.vn/upload/images/neolock%20(17).png',
        time: '26/09/2019',
        content: 'Hiện nay, loại hình du lịch dịch vụ Homestay đang nổi bật trong cả nước, với những tính năng và ưu điểm mới đang thu hút nhiều người tham gia. Trong quá trình kinh doanh homestay, việc quản lý tốt mọi yếu tố đóng vai trò quyết định đến thành công. Cách quản lý homestay hiệu quả cũng là một phần trong số đó'
    },
    {
        id: 20,
        title: 'KHÓA CỬA THÔNG MINH CAO CẤP- GIẢI PHÁP CHO CĂN HỘ TỐI ƯU',
        image: 'https://www.neolock.vn/upload/images/neolock%20(3).png',
        time: '25/09/2019',
        content: 'Khóa cửa là một cuộc "hôn nhân" kỳ diệu của sự đơn giản và phức tạp. Khoá cửa nhà thông minh cao cấp đang dần thay thế khóa truyền thống tại các gia đình. Sản phẩm Neolocki sở hữu công nghệ tân tiến, dễ dàng quản lý và điều khiển qua smartphone, chủ động kiểm soát ra vào nhà từ xa và lưu lại lịch sử các lần ra vào…'
    },
    {
        id: 21,
        title: 'KHÓA CỬA THÔNG MINH CAO CẤP- GIẢI PHÁP CHO CĂN HỘ TỐI ƯU',
        image: 'https://www.neolock.vn/upload/images/neolock%20(3).png',
        time: '25/09/2019',
        content: 'Khóa cửa là một cuộc "hôn nhân" kỳ diệu của sự đơn giản và phức tạp. Khoá cửa nhà thông minh cao cấp đang dần thay thế khóa truyền thống tại các gia đình. Sản phẩm Neolocki sở hữu công nghệ tân tiến, dễ dàng quản lý và điều khiển qua smartphone, chủ động kiểm soát ra vào nhà từ xa và lưu lại lịch sử các lần ra vào…'
    }
]
const BlogListPage = () => {
    const totalPost = posts.length;
    const [pagination, setPagination] = useState({
        page: 1 ,
        limit: 10,
        totalRows: totalPost
    });
    const lastPost = (pagination.page * pagination.limit)
    const firstPost = lastPost - pagination.limit
    const handlePageChange = (newPage) => {
        setPagination({
            ...pagination,
            page: newPage,
        })
    }
    const handleScrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    const changePost = posts.slice(firstPost,lastPost)
    const api = 'http://localhost:8000/api/products'
    fetch(api)
        .then(response => response.json())
        .then(prod => console.log(prod))
    
    return ( 
        <>
            <div className="md:flex md:flex-row md:mb-[100px] md:w-[90%] mx-auto px-[20px]">
                <div className="w-[100%] mt-[40px] flex flex-col gap-[60px]">
                    {changePost.map( post => (
                        <div key={post.id} >
                            <Link to={'/blog-id'/* + post.id*/} className="w-full hover:no-underline" onClick={() => handleScrollTop()} >
                                
                                <img src={post.image} alt="" className="w-full h-[220px] md:h-[450px] bg-cover" />
                                <h2 className="mt-[20px] text-[22px] font-normal leading-9 hover:no-underline text-[#333]">{post.title.toUpperCase()}</h2>
                            </Link>
                            <p className="mt-[20px] text-[13px] font-medium text-[#c5c5c5]">{post.time}</p>
                            <p className="mt-[20px] text-[18px] md:text-[16px] leading-8 font-light tracking-wider">{post.content}</p>
                        </div>
                    ))}
                    <Pagination 
                    pagination={pagination}
                    onPageChange={handlePageChange}
                    />
                </div>
                
                <BlogCart />
            </div>
        </>
     );
}
 
export default BlogListPage;