<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
   
class RegisterController extends Controller
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required',
        //     'email' => 'required|email',
        //     'password' => 'required',
        //     'c_password' => 'required|same:password',
        // ]);
        // if($validator->fails()){
        //     return $this->sendError('Validation Error.', $validator->errors());       
        // }
   
        // $input = $request->all();
        // $input['password'] = bcrypt($input['password']);
       
        // $user = User::create($input);
        // // $success['token'] =  $user->createToken('MyApp')->accessToken;
        // $success['name'] =  $user->name;
        // return $this->sendResponse($success, 'User register successfully.');
        $this->validate($request,
        [
            'name'=> 'required',
            'email'=> 'required|email',
            'password'=> 'required',
            'c_password' => 'required|same:password'
        ]);
        $name=$request->input('name');
        $email=$request->input('email');
        $password= bcrypt($request->input('password'));
        User::create(['name'=>$name,'email'=>$email,'password'=>$password]);
        return response()->json(['status'=>'success']);
    }

}