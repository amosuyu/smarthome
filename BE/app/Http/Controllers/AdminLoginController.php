<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AdminLoginController extends Controller
{
    public function index()
    {
       return view('admin.dashboard');
    }
    public function getLogin()
    {   
        if (Auth::check()) {
            // nếu đăng nhập thàng công thì 
            return redirect('quantri');
        } else {
            return view('admin.login');
        }
        
    }

    /**
     * @param LoginRequest $request
     * @return RedirectResponse
     */
    public function postLogin(LoginRequest $request)
    {   
        $login = [
            'email' => $request->txtEmail,
            'password' => $request->txtPassword,
            // 'level' => 1,
            // 'status' => 1
        ];
        if (Auth::attempt($login)) {
            return redirect('quantri');
        } else {
            return redirect()->back()->with('status', 'Email hoặc Password không chính xác');
        }
    }

    /**
     * action admincp/logout
     * @return RedirectResponse
     */
    public function getLogout()
    {
        Auth::logout();
        return redirect()->route('getLogin');
    }
}
