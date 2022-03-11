<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Voucher;
class VoucherController extends Controller
{
    public function GetAll(){
        return view('admin.voucher.index', ['Vouchers' => Voucher::GetAll()]);
    }
    public function index(){
        return Voucher::all();
    }
    public function store(Request $request)
    {
       try {
        $voucher = new Voucher();
        $voucher->title = $request->input('title');     
        $voucher->description = $request->input('description');   
        $voucher->keyvoucher = $request->input('keyvoucher');  
        $voucher->percent = $request->input('percent');   
        $voucher->discount = $request->input('discount');   
        $voucher->end_date = $request->input('end_date'); 
        if($voucher->save()){
            return response()->json(['status' => 'success','message' =>'Post create successfully']);
        }
       } catch (\Throwable $th) {
        return response()->json(['status' => 'error','message' => $th->getMessage()]);
       }
    }
    public function update(Request $request, $id)
    {
        try {
        $post = Post::findOrFail($id);
        $post->title = $request->input('title'); 
        $post->body = $request->input('body'); 
        if($post->save()){
            return response()->json(['status' => 'success','message' =>'Post update successfully']);
        }
       } catch (\Throwable $th) {
        return response()->json(['status' => 'error','message' => $th->getMessage()]);
       }
    }
    public function destroy($id)
    {
        $post= Post::findOrFail($id);
        $post->delete();
        return response()->json('Post detele seccessfully!'); 
    }
}
