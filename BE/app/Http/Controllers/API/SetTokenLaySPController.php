<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\SessionUser;

class SetTokenLaySPController extends Controller
{
    public function index(Request $request)
    {
       $token = $request->header('token');
       $checkTokenIsValid = SessionUser::where('token',$token)->first();
       if(empty($token)){
           return response()->json(
               [
                    'code' => 401,
                    'message' => 'token khong gui thong wa header'
               ]
               );
       }
       elseif(empty($checkTokenIsValid)){
        return response()->json(
            [
                 'code' => 401,
                 'message' => 'token khong hop le'
            ]
            );
       }
       else{
            $products =  Product::all();
            return response()->json(
                [
                    'code' => 200,
                    'data' => $products
                ]
            );
       }
    }
}
