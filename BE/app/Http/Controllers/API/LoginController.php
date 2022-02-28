<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Models\SessionUser;
use Illuminate\Database\Console\Migrations\StatusCommand;
use Illuminate\Http\Request;
use Stringable;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        
        $dateCheckLogin = [
            'email' => $request->email,
            'password' => $request->password
        ];
        // xac thuc user co hay chua
        if (auth()->attempt($dateCheckLogin)) {
            $checkTokenExit = SessionUser::where('user_id',auth()->id())->first();
            if (empty($checkTokenExit)) {
                $userSession = SessionUser::create(
                    [
                        'token' => Str::random(40),
                        'refresh_token' => Str::random(40),
                        'token_expried'=> date('Y-m-d H:i:s', strtotime('+30 day')),
                        'refresh_token_expried' => date('Y-m-d H:i:s', strtotime('+30 day')),
                        'user_id' => auth()->id()
                    ]
                    );
            }
            else{
                $userSession = $checkTokenExit;
            }
            return response()->json(
                [
                    'code' => 200,
                    'date' => $userSession
                ]
            ) ;
        }   
        else{
            return response()->json(
                [
                    'code' => 401,
                    'message' => "email hoac password khong dung "
                ]
            ) ;
        }
        // tao token
    }
}
