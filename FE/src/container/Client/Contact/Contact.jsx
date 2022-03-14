import React from "react";
import Blog from "../ClientBlog/Blog";
import HeroSlider from "../ClientHome/Slide/HeroSlider";
import "./Contact.css"
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName : null,
            txtPhone : null,
            txtEmail : null,
            txtContent : null
        };
    }
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        })
        
        
    }
    handleSubmit = () => {
        // dữ liệu người dùng nhập vào form
        console.log(this.state);
    }
    render() {
    return(
        <>
            <HeroSlider />
            <div className="md:w-[65%] mx-auto md:mt-[100px] mt-[50px] mb-[100px] w-full font-lora ">
                <div className="w-full text-center">
                    <h2 className="md:text-[35px] md:font-light text-[#333] text-[24px] font-bold font-lora">Liên hệ chúng tôi</h2>
                </div>
                <div className="w-full mt-[50px] flex wrap-contact">
                    <div className="md:w-[60%] bg-[#f5f5f5] px-[20px] py-[30px] rounded-md mr-[20px] w-full form-contact"> 
                        <form method="" action="" onSubmit={this.handleSubmit}>
                            <div className="w-full flex mt-[20px]">
                                <div className="w-[50%] flex flex-col mr-[20px]">
                                    <label htmlFor="name" className="md:text-[18px] md:font-light text-[#000] text-[15px] font-semibold ">Họ tên:</label>
                                    <input type="text" name="txtName" id="name"  onChange={this.handleChange} className="block w-[100%] px-[10px] py-[5px] border-[1px] border-gray-400 focus:outline-none focus:border-red-500 text-gray-400 text-[15px] font-light"/>
                                    
                                </div>
                                <div className="w-[50%] flex flex-col">   
                                    <label htmlFor="phone" className="md:text-[18px] md:font-light text-[#000] text-[15px] font-semibold ">Số điện thoại:</label>
                                    <input type="text" name="txtPhone" id="phone" onChange={this.handleChange} className="block w-[100%] px-[10px] py-[5px] border-[1px] border-gray-400 focus:outline-none focus:border-red-500 text-gray-400 text-[15px] font-light"/>
                                </div>
                            </div>
                                <div className="flex flex-col mt-[20px]">
                                    <label htmlFor="email" className="md:text-[18px] md:font-light text-[#000] text-[15px] font-semibold ">Email:</label>
                                    <input type="email" name="txtEmail" id="email" onChange={this.handleChange} className="block w-[100%] px-[10px] py-[5px] border-[1px] border-gray-400 focus:outline-none focus:border-red-500 text-gray-400 text-[15px] font-light"/>
                                </div>
                                <div className="flex flex-col mt-[20px]">
                                    <label htmlFor="content" className="md:text-[18px] md:font-light text-[#000] text-[15px] font-semibold ">Nội dung:</label>
                                    <textarea name="txtContent" id="content" cols="30" rows="4" onChange={this.handleChange} placeholder="Viết ghi chú hoặc câu hỏi của bạn ở đây..." className=" px-[10px] py-[5px] border-[1px] border-gray-400 focus:outline-none focus:border-red-500 text-gray-400 text-[15px] font-light"></textarea>
                                </div>
                                <div>
                                    <button type="submit" name="submit" className="md:w-[60px] w-full h-[40px] bg-red-700 mt-[20px] text-[#fff] text-[16px] font-bold hover:bg-red-600 text-center">Gửi</button>
                                </div>
                            
                        </form>
                    </div>
                    <div className="md:w-[40%] :w-full ">
                        <div className="w-full bg-[#f5f5f5] px-[20px] py-[30px] rounded-md location-contact">
                            <div>
                                <h4 className="text-[15px] md:text-[18px] font-medium">Địa chỉ:</h4>
                                <p className="text-[15px] md:text-[18px] font-normal"><i className="fa-solid fa-location-dot text-[#333]"></i><strong className="text-[#999] font-medium"> Địa chỉ: </strong> 29/7 Hoàng Diệu, phường 10, Quận Phú Nhuận, Tp.Hồ Chí Minh</p>
                                <p className="text-[15px] md:text-[18px] font-normal"><i className="fa-solid fa-location-dot text-[#333]"></i><strong className="text-[#999] font-medium"> Warehouse: </strong> 170 Quốc Lộ 1A, Phường Bình Hưng Hòa B, Quận Bình Tân, Tp. Hồ Chí Minh</p>
                            </div>
                            <div>
                                <h4 className="text-[15px] md:text-[18px] font-medium">Hotline:</h4>
                                <a href="/" className="text-[15px] md:text-[18px] text-[#d51c25] font-normal hover:no-underline hover:text-[#000]">(+84) 902 978 179 (Miss. Trinh) - 0986 43 5388 (Mr. Cong)</a>
                            </div>
                            <div className="mt-[20px]">
                                <h4 className="text-[15px] md:text-[18px] font-medium ">Email:</h4>
                                <a href="/" className="text-[15px] md:text-[18px] text-[#d51c25] font-normal hover:no-underline hover:text-[#000] ">info@neolock.vn</a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <Blog />
        </>
     );
    }
}
 
export default Contact;