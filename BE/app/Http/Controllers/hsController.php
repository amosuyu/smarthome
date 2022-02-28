<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RuleNhapSV;
use App\Models\sinhvien;
class hsController extends Controller
{
    public function hs(){
        return view('nhaphs');
    }
    function hs_store(RuleNhapSV $request){
        // $request->validate(

        //     [
            
        //     'hoten' => ['required','min:3','max:20'],
            
        //     'tuoi' => 'required|integer|min:16|max:100',
            
        //     'ngaysinh' =>['required','date'],
            
        //     ]
            
        //     );
            
        //     echo "Code xử lý";
   
        
        return redirect('hs')->with('success','Xử lý thành công!');
    }
}
