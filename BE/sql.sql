-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 11, 2022 lúc 04:06 AM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `l7-3-22`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blog`
--

CREATE TABLE `blog` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `display` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `blog`
--

INSERT INTO `blog` (`id`, `title`, `description`, `photo`, `display`, `created_at`, `updated_at`, `content`) VALUES
(1, 'Khóa Thông minh', 'Giải pháp và Mô hình cho thuê tủ locker thông minh - Smart locker rental solutions', '164687996216457568661.jpg', 1, NULL, NULL, '<h1>Th&aacute;ng 11 - Ưu đ&atilde;i Xanh&nbsp;</h1>  <p>Nhu cầu mua sắm v&agrave;o những th&aacute;ng cuối năm đ&atilde; bắt đầu tăng nhiệt. Để mang đến sự tươi m&aacute;t cho kh&ocirc;ng kh&iacute; mua sắm v&agrave;o th&aacute;ng 11 n&agrave;y, hfurniture xin d&agrave;nh tặng những ưu đ&atilde;i đầy &quot;đặc biệt&quot; từ trước đến nay. C&aacute;c qu&yacute; kh&aacute;ch h&agrave;ng đang c&oacute; nhu cầu trang ho&agrave;ng cho tổ ấm th&igrave; đừng bỏ qua cơ hội mua sắm với ưu đ&atilde;i hấp dẫn v&agrave; nhận m&oacute;n qu&agrave; tặng &yacute; nghĩa m&agrave; hfurniture  mang đến v&agrave; mang th&ocirc;ng điệp t&iacute;ch cực về m&ocirc;i trường. C&aacute;c chương tr&igrave;nh ưu đ&atilde;i bao gồm:</p>  <h1><strong>1. NHẬP M&Atilde;&nbsp;GREENWITH, GIẢM 111,000Đ TR&Ecirc;N WEBSITE</strong></h1>  <p>Kh&ocirc;ng giới hạn bất kỳ sản phẩm n&agrave;o, m&atilde; ưu đ&atilde;i&nbsp;<strong>GREENWITH&nbsp;</strong>&aacute;p dụng cho tất cả c&aacute;c sản phẩm khi c&aacute;c kh&aacute;ch h&agrave;ng đặt h&agrave;ng tr&ecirc;n website <span style=\"color:#2980b9\"><u>www.h-furniture.online</u></span>&nbsp;v&agrave; nhập m&atilde;&nbsp;<strong>GREENWITH&nbsp;</strong>tại bước thanh to&aacute;n<strong>.</strong>&nbsp;Kh&ocirc;ng qu&aacute; kh&oacute; để nhận được ưu đ&atilde;i<strong>&nbsp;</strong>chỉ với 1 bước đơn giản, giỏ h&agrave;ng của qu&yacute; kh&aacute;ch h&agrave;ng sẽ được giảm ngay&nbsp;<strong>111,000đ</strong>.</p>  <p>Đặt h&agrave;ng ngay tại:&nbsp;<strong><a href=\"https://moho.com.vn/\" target=\"_blank\"><span style=\"color:#2980b9\">h<u>ttps://</u></span></a></strong><span style=\"color:#2980b9\"><u>h-furniture.online</u></span><strong><a href=\"https://moho.com.vn/\" target=\"_blank\"><span style=\"color:#2980b9\">/</span></a></strong></p>  <h1><strong>2. CHECK IN NGAY - QU&Agrave; TẶNG VỀ TAY</strong></h1>  <p>Đến với showroom nội thất , c&aacute;c kh&aacute;ch h&agrave;ng kh&ocirc;ng chỉ c&oacute; cơ hội tham quan kh&ocirc;ng gian nội thất hiện đại, được trực tiếp trải nghiệm sản phẩm trước khi quyết định mang n&oacute; về nh&agrave; m&agrave; c&ograve;n c&oacute; nhận được 02 ưu đ&atilde;i hấp dẫn:</p>  <ul> 	<li><strong>Giảm 10% tối đa 200,000đ</strong>&nbsp;cho kh&aacute;ch h&agrave;ng đặt h&agrave;ng trực tiếp tại showroom quận 12 với đơn h&agrave;ng tr&ecirc;n&nbsp;<strong>1,000,000đ</strong>.</li> 	<li><strong>Tặng miễn ph&iacute; 01 qu&agrave; tặng hạt giống</strong>&nbsp;để c&aacute;c qu&yacute; kh&aacute;ch h&agrave;ng c&oacute; thể c&ugrave;ng ươm ầm y&ecirc;u thương, truyền cảm hứng &quot;sống xanh&quot; v&agrave; g&oacute;p phần mang th&ocirc;ng điệp t&iacute;ch cực về việc bảo vệ v&agrave; x&acirc;y dựng m&ocirc;i trường sống.</li> </ul>  <p>Tuy nhi&ecirc;n, để nhận ưu đ&atilde;i, c&aacute;c qu&yacute; kh&aacute;ch h&agrave;ng h&atilde;y thực hiện 02 bước sau đ&acirc;y:</p>  <ul> 	<li>Bước 1: Nhấn &ldquo;Th&iacute;ch&rdquo; trang Fanpage&nbsp;<a href=\"https://www.facebook.com/h-furniture\" target=\"_blank\">H-Furniture - Dịch Vụ Nội Thất v&agrave; Thương Mại H-Furniture</a></li> 	<li>Bước 2: Chụp ảnh v&agrave; đăng l&ecirc;n trang FB c&aacute; nh&acirc;n ở chế độ c&ocirc;ng khai, k&egrave;m theo 03 hashtags&nbsp;<strong>#h-furniture#noithath-furniture&nbsp;#h-furniture.</strong></li> </ul>  <h1><strong>3. THAM QUAN SHOWROOM - NHẬN NGAY QU&Agrave; TẶNG</strong></h1>  <p><span style=\"font-size:14pt\"><span style=\"font-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"><span style=\"font-size:12px\">H-FURNITURE</span><strong><span style=\"color:black\">&nbsp;</span></strong></span></span>lu&ocirc;n ch&agrave;o đ&oacute;n c&aacute;c kh&aacute;ch h&agrave;ng đến trải nghiệm c&aacute;c sản phẩm c&oacute; tại showroom v&agrave; chia sẻ những điều m&agrave; kh&aacute;ch h&agrave;ng cần <span style=\"font-size:14pt\"><span style=\"font-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"><span style=\"font-size:12px\">H-FURNITURE</span></span></span>cải thiện v&agrave; ph&aacute;t huy ở c&aacute;c sản phẩm để mang đến sự h&agrave;i l&ograve;ng về chất lượng sản phẩm v&agrave; dịch vụ m&agrave; <span style=\"font-size:14pt\"><span style=\"font-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"><span style=\"font-size:12px\">H- FURNITURE&nbsp;</span></span></span>mang lại.</p>  <p><span style=\"font-size:14pt\"><span style=\"font-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"><span style=\"font-size:12px\">H-FURNITURE</span></span></span>xin gửi tặng một m&oacute;n qu&agrave; y&ecirc;u thương v&agrave; ho&agrave;n to&agrave;n miễn ph&iacute; l&agrave; một&nbsp;<strong>Qu&agrave; tặng hạt giống</strong>&nbsp;cho tất cả c&aacute;c kh&aacute;ch h&agrave;ng đến tham quan v&agrave; trải nghiệm tại showroom <span style=\"font-size:14pt\"><span style=\"font-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"><span style=\"font-size:12px\">H-FURNITURE</span></span></span>.</p>  <p>&nbsp;</p>  <h1><strong>4. SẮM NỘI THẤT - TẶNG ƯU Đ&Atilde;I CHO NGƯỜI TH&Acirc;N, BẠN B&Egrave;</strong></h1>  <p>Kh&aacute;ch h&agrave;ng khi mua h&agrave;ng tại <span style=\"font-size:14pt\"><span style=\"font-family:&quot;Times New Roman&quot;,&quot;serif&quot;\"><span style=\"font-size:12px\">H-FURNITURE&nbsp;</span></span></span>sẽ gửi ưu đ&atilde;i cho người th&acirc;n, bạn b&egrave; bằng c&aacute;ch nhập 01 số điện thoại người th&acirc;n, bạn b&egrave; khi ho&agrave;n tất thanh to&aacute;n đơn h&agrave;ng tr&ecirc;n website hoặc tại showroom. Người nhận m&atilde; ưu đ&atilde;i sẽ được giảm 50,000đ khi đặt h&agrave;ng trực tiếp tr&ecirc;n website hoặc tại showroom. C&aacute;c m&atilde; ưu đ&atilde;i được hệ thống tạo tự động v&agrave; ngẫu nhi&ecirc;n.</p>  <p><em>* Lưu &yacute;:&nbsp;Thời gian c&oacute; hiệu lực sử dụng<strong>&nbsp;</strong>của c&aacute;c chương tr&igrave;nh ưu đ&atilde;i tr&ecirc;n bắt đầu từ ng&agrave;y&nbsp;<strong>01/11/2021 &ndash; 30/11/2021</strong>&nbsp;v&agrave;&nbsp;<strong>kh&ocirc;ng được &aacute;p dụng</strong>&nbsp;đồng thời với c&aacute;c chương tr&igrave;nh khuyến mại c&ugrave;ng một thời điểm.</em></p>  <p>&nbsp;</p>'),
(2, 'Giải pháp giao nhận hàng hóa thông qua tủ locker thông minh neolock với các hệ thống thương mại điện tử', 'Locker thông minh neolock giúp cho việc giao nhận hàng hóa trở nên tiện lợi, an toàn hơn trong mùa dịch bệnh, cũng như đầu tư giải pháp tủ lưu trữ hiểu quả lâu dài trong tương lai. Smart Locker tối ưu quy trình gửi và nhận đồ nhanh chóng bằng thao tác đơn giản, mà không cần phải tiếp xúc trực tiếp giữa người với người.', '164687996216457568661.jpg', 1, '2022-03-09 19:39:22', '2022-03-09 19:39:22', 'Tiện ích khóa tủ locker thông minh neolock: -  Bảo mật, tiện lợi và an toàn  - Vận hành thông qua phần mềm điều khiển, qua web app, qua ứng dụng di động và hỗ trợ không dây  - Hỗ trợ mở khóa thông qua APP, thẻ tử, nhận diện khuôn mặt, mã vạch QRCode, vân tay....  - Không tiếp xúc trực tiếp với người khác khi giao/ nhận hàng hóa, hạn chế nguy cơ lây nhiễm  - Kết hợp việc quảng cáo sản phẩm, dịch vụ trên tủ để tạo thêm doanh thu  - Bảo hành sản phẩm 1 năm 1 đổi 1  - Cung cấp SDK, API cho tích hợp với hệ sinh thái của đối tác  Liên hệ: info@neolock.vn hoặc 0986 4353 88');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `blog`
--
ALTER TABLE `blog`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
