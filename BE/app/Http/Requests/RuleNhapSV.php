<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RuleNhapSV extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'masv'=>['required','regex:/^PS\d{5}/','unique:sinhvien,masv'],
            'hoten'=>['required','min:3','max:20'],
            'tuoi'=> 'required|integer|min:15|max:100',
            'gioitinh'=>'required',
            'ngaysinh' =>['required','regex:/\d{1,2}\/\d{1,2}\/\d{4}/'],
            'cmnd'=>'digits_between:9,10',
            'sodienthoai' => ['required', 'regex:/(0)[0-9]/','min:10','max:11'],
            'email'=> 'required|email|ends_with:@fpt.edu.vn'
        ];
    }
    public function messages(){
        return [
            'masv.required'=>'Mã SV không được để trống',
            'masv.regex'=>'Mã SV bắt đầu bằng PS và 5 số phía sau',
            'masv.unique'=>'Mã SV đã bị trùng',
            'hoten.required'=>'Phải nhập Họ tên chứ',
            'hoten.min'=>'Họ tên ngắn quá vậy',
            'hoten.max'=>'Họ tên dài quá vậy',
            'gioitinh.required'=>'Vui lòng chọn giới tính',
            'tuoi.required'=>'Nhập :attribute vào đi',
            'tuoi.integer'=>':attribute phải là số',
            'tuoi.min'=>':attribute nhỏ quá, phải lớn hơn hoặc bằng 15',
            'tuoi.max'=>':attribute quá lớn rồi, phải nhỏ hơn hoặc bằng 100',
            'ngaysinh.required'=>':attribute không  được để trống',
            'ngaysinh.regex'=>':attribute không hợp lệ',
            'cmnd.digits_between'=>':attribute nhập từ 9 tới 10 chữ số',
            'sodienthoai.required'=>'Số điện thoại không được để trống',
            'sodienthoai.regex' => 'Số điện thoại phải là số và bắt đầu bằng 0',
            'sodienthoai.min' => ' Số điện thoại tối thiểu 10 chữ số',
            'sodienthoai.max' => ' Số điện thoại tối đa 11 chữ số',
            'email.required'=>'Không được để trống Email',
            'email.email'=> 'Email phải là một địa chỉ hợp lệ',
            'email.ends_with' => 'Email phải có @fpt.edu.vn'
        ];
    }
    public function attributes(){
        return [
            'ngaysinh'=>'Ngày sinh',
            'hoten'=>'Họ tên',
            'tuoi'=>'Tuổi',
            'ngaysinh'=>'Ngày sinh',
            'cmnd'=>'Số chứng minh nhân dân'
        ];
    }
}
