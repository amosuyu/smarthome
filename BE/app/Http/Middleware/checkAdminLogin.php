<?php

namespace App\Http\Middleware;
use Closure;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class checkAdminLogin
{

    public function handle(Request $request, Closure $next){
            if(auth::user()){
                if(auth()->user()->level == 1 && auth()->user()->status == 1){
                
                    return $next($request);
                }
            }
               return redirect('/')->with('status','Bạn không có quyền admin');     

    }
}
