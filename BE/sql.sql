-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 11, 2022 lúc 05:05 AM
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Hands-Free', 'Khóa rảnh tay', NULL, NULL),
(2, 'Keypads', 'Khóa số', NULL, NULL),
(3, 'Fingerprint', 'Khóa văn tay', NULL, NULL),
(4, 'Garage door', 'Khóa gara', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(17, '2014_10_12_000000_create_users_table', 1),
(18, '2014_10_12_100000_create_password_resets_table', 1),
(19, '2019_08_19_000000_create_failed_jobs_table', 1),
(20, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(21, '2022_03_07_011901_add_level_status_to_users_table', 1),
(22, '2022_03_08_043307_create_table_posts_table', 1),
(23, '2022_03_08_062956_create_categories_table', 1),
(24, '2022_03_08_063043_create_products_table', 1),
(25, '2022_03_09_013251_create_table_vouchers_table', 1),
(26, '2022_03_09_022057_create_table_add_key_to_voucher_table', 1),
(27, '2022_03_09_035151_create_table_blog_table', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `photo`, `description`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Nest x Yale Lock with Nest Connect', 1599000, '164672243816461296801.jpg', 'The Connected Lock for a More Secure Nest Home\nRemote access - Unlock your door with a passcode and lock with a tap, requires Nest Connect or Nest Guard, (Nest Connect included and Nest Guard included in Secure Starter Pack sold separately)\nKeyless deadbolt - Secure and tamper-proof keyless deadbolt enables you to gain entry with unique passcodes\nAccess history - Receive alerts when someone locks & unlocks the door, and for low battery\nAuto-lock - It can lock automatically when Nest knows you’re away', 1, '2022-03-01 03:15:24', '2022-03-01 03:15:24'),
(5, 'August Smart Lock', 1290000, '16467225871646185683vai-pdp-msi-19315-side1-1000x1000-1a-2018-1-29_1_400x.jpg', 'The Perfect Low-cost Secure and Keyless Entry for Your Smart Home\nSecure, keyless entry for your smart home - Lock and unlock your door, control keyless access and keep track of who comes and goes, all from your phone*.\nControl access for anyone - Grant access for a few weeks, a few hours, a few minutes.\nBe sure you’re secure with DoorSense™ - Only August has DoorSense™ to tell you the door is completely closed and locked.\nKnow who’s coming and going - Track activity at your doorstep with a 24/7 Activity Feed.\nWorks with most standard deadbolts - Compatible with the widest range of standard deadbolts.\nKeep your existing lock and keys - Easily attaches to your existing deadbolt, so everyone can still use their keys.\nLocks automatically as you leave - Never worry if your door is locked again. Requires August Connect Wi-Fi Bridge or August Doorbell Cam Pro, sold separately\nWorks with August app - Available for Android, iOS and Apple Watch® devices*.', 1, '2022-03-01 18:46:10', '2022-03-01 18:46:10'),
(6, 'August Connect Wi-Fi Remote Access Bridge', 870000, '16467225541646185638august-connect_400x.jpg', 'An Intelligent, Secure Way to Lock or Unlock Your Door when You\'re Away from Home\n2nd Generation - includes updated firmware for manual lock operation and offline notifications\nCheck whether your August Smart Lock is locked from the August app\nPeace of mind - never wonder if you left your door unlocked\nBuzz people in - remotely unlock or lock your door for guests\nSecure - Immediately know when anyone enters or leaves your home\nComplete your smart home - designed to work with other compatible home products', 1, '2022-03-01 18:47:18', '2022-03-01 18:47:18'),
(7, 'August Smart Lock Pro + Connect, Silver', 950000, '16467225111646185570vsi-pdp-det-19312-august-smart-lock-silver-side2-1000x1000-1a-2017-10-27_400x.jpg', 'Never Worry If Your Door Is Locked, Control and Monitor from Anywhere\nYour front door Smarter - Lock and unlock your door, control keyless access, and keep track of who comes and goes, all from your phone.\nBe sure you’re secure with DoorSense™ - Only August has DoorSense™ to tell you the door is completely closed and locked.\nControl access for anyone - Grant access for a few weeks, a few hours, or a few minutes.\nLocks automatically as you leave - Never worry if your door is locked again.\nUnlocks when you arrive - Auto-Unlock detects your arrival and unlocks the door automatically.\nSimply speak to lock your door - Tell Alexa, Siri, or the Google Assistant to control your August Smart Lock Pro + Connect.\nWorks with August app - Available for Android, iOS and Apple Watch® devices.', 1, '2022-03-01 18:48:03', '2022-03-01 18:48:03'),
(8, 'Nest x Yale Lock with Nest Connect', 1298000, '16468795431646185683vai-pdp-msi-19315-side1-1000x1000-1a-2018-1-29_1_400x.jpg', 'The Connected Lock for a More Secure Nest Home\nRemote access - Unlock your door with a passcode and lock with a tap, requires Nest Connect or Nest Guard, (Nest Connect included and Nest Guard included in Secure Starter Pack sold separately)\nKeyless deadbolt - Secure and tamper-proof keyless deadbolt enables you to gain entry with unique passcodes\nAccess history - Receive alerts when someone locks & unlocks the door, and for low battery\nAuto-lock - It can lock automatically when Nest knows you’re away', 2, '2022-03-09 19:32:23', '2022-03-09 19:32:23');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` tinyint(4) NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `level`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', NULL, '$2y$10$8IhngouVsNPNphUH056FmOtLKlrH7FNzx7c74ek7F.v/gEr1im0T6', 1, 1, NULL, NULL, NULL),
(2, 'khanh', 'khanh@gmail.com', NULL, '$2y$10$OfXEZC2FfUSSHvzuJbrR6OhwMGxH2bPu2VLkv1GHuqbgdssCZooLK', 0, 0, NULL, '2022-03-10 20:30:51', '2022-03-10 20:30:51'),
(4, 'khanh1', 'khanh1@gmail.com', NULL, '$2y$10$Ng3GV3Zkg3J1ZeBxL0JfauiKYW57MNTNbuH4ZS3xTK8V40PX6crmC', 0, 0, NULL, '2022-03-10 20:43:04', '2022-03-10 20:43:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vouchers`
--

CREATE TABLE `vouchers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keyvoucher` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `percent` tinyint(4) NOT NULL DEFAULT 0,
  `discount` int(11) NOT NULL DEFAULT 0,
  `end_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `vouchers`
--

INSERT INTO `vouchers` (`id`, `title`, `description`, `keyvoucher`, `percent`, `discount`, `end_date`, `created_at`, `updated_at`) VALUES
(1, 'giảm giá 30/4 & 1/5', 'mừng ngày quốc tế lao động 30/4', 'GIAMGIA30/4', 15, 0, '2022-05-10', '2022-03-08 21:43:34', '2022-03-08 21:43:34'),
(2, 'Giảm giá tháng 3', 'Tưng bùng giảm giá quốc tế phụ nữ 8/3', 'GIAMGIA8/3', 10, 0, '2022-03-31', '2022-03-08 21:44:22', '2022-03-08 21:44:22');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Chỉ mục cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `blog`
--
ALTER TABLE `blog`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
