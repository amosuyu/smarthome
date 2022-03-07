import React from "react";
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
            <div className="xl:w-[65%] mx-auto mt-[40px] mb-[400px] md:w-[90%]">
                <div className="w-full text-center">
                    <h2 className="xl:text-[35px] xl:font-light text-[#333] md:text-[30px] md:font-normal font-sans">Liên hệ chúng tôi</h2>
                </div>
                <div className="w-full mt-[20px] flex ">
                    <div className="w-[60%] bg-[#f5f5f5] px-[20px] py-[30px] rounded-md mr-[20px]"> 
                        <form method="" action="" onSubmit={this.handleSubmit}>
                            <div className="w-full flex mt-[20px]">
                                <div className="w-[50%] flex flex-col mr-[20px]">
                                    <label htmlFor="name" className="text-[18px] font-light text-[#000]">Họ tên:</label>
                                    <input type="text" name="txtName" id="name"  onChange={this.handleChange} className="block w-[100%] px-[10px] py-[10px] border-[1px] border-gray-400 focus:outline-none focus:border-red-500 text-gray-400 text-[18px] font-light"/>
                                </div>
                                <div className="w-[50%] flex flex-col">   
                                    <label htmlFor="phone" className="text-[18px] font-light text-[#000]">Số điện thoại:</label>
                                    <input type="text" name="txtPhone" onChange={this.handleChange} className="block w-[100%] px-[10px] py-[10px] border-[1px] border-gray-400 focus:outline-none focus:border-red-500 text-gray-400 text-[18px] font-light"/>
                                </div>
                            </div>
                                <div className="flex flex-col mt-[20px]">
                                    <label htmlFor="email" className="text-[18px] font-light text-[#000]">Email:</label>
                                    <input type="email" name="txtEmail" onChange={this.handleChange} className="block w-[100%] px-[10px] py-[10px] border-[1px] border-gray-400 focus:outline-none focus:border-red-500 text-gray-400 text-[18px] font-light"/>
                                </div>
                                <div className="flex flex-col mt-[20px]">
                                    <label htmlFor="content" className="text-[18px] font-light text-[#000]">Nội dung:</label>
                                    <textarea name="txtContent" id="content" cols="30" rows="6" onChange={this.handleChange} placeholder="Viết ghi chú hoặc câu hỏi của bạn ở đây..." className=" px-[10px] py-[10px] border-[1px] border-gray-400 focus:outline-none focus:border-red-500 text-gray-400 text-[18px] font-light"></textarea>
                                </div>
                                <div>
                                    <button type="submit" name="submit" className="w-[70px] h-[40px] bg-red-700 mt-[20px] text-[#fff] text-[18px] font-normal">Gửi</button>
                                </div>
                            
                        </form>
                    </div>
                    <div className="w-[40%] ">
                        <div className="w-full bg-[#f5f5f5] px-[20px] py-[30px] rounded-md">
                            <div>
                                <h4 className="text-[18px] font-medium">Địa chỉ:</h4>
                                <p className="text-[18px] font-normal"><i className="fa-solid fa-location-dot text-[#333]"></i><strong className="text-[#999] font-medium"> Địa chỉ: </strong> 29/7 Hoàng Diệu, phường 10, Quận Phú Nhuận, Tp.Hồ Chí Minh</p>
                                <p className="text-[18px] font-normal"><i className="fa-solid fa-location-dot text-[#333]"></i><strong className="text-[#999] font-medium"> Warehouse: </strong> 170 Quốc Lộ 1A, Phường Bình Hưng Hòa B, Quận Bình Tân, Tp. Hồ Chí Minh</p>
                            </div>
                            <div>
                                <h4 className="text-[18px] font-medium">Hotline:</h4>
                                <a href="" className="text-[18px] text-[#d51c25] font-normal hover:no-underline hover:text-[#000]">(+84) 902 978 179 (Miss. Trinh) - 0986 43 5388 (Mr. Cong)</a>
                            </div>
                            <div className="mt-[20px]">
                                <h4 className="text-[18px] font-medium ">Email:</h4>
                                <a href="" className="text-[18px] text-[#d51c25] font-normal hover:no-underline hover:text-[#000]">info@neolock.vn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
    }
}
 
export default Contact;