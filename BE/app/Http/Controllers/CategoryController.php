<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Response;
use Illuminate\Http\Request;
use App\Models\Categories;
class CategoryController extends Controller
{
    public function index(){
        $Category = Categories::all();
        return Response()->json($Category);
    }
    public function store(Request $request){
        $this->validate($request,[
            'title' => 'required',
            'description'=> 'required'
        ]);
        $Category = new Categories();
        $Category->title = $request->input('title');          
        $Category->description = $request->input('description');        
        $Category->save();
        return Response()->json($Category);
    }
    public function update(Request $request ,$id){
        $this->validate($request,[
            'title' => 'required',
            'description'=> 'required'
        ]);
        $Category = new Categories();
        $Category->title = $request->input('title');          
        $Category->description = $request->input('description');        
        $Category->save();
        return Response()->json($Category);
    }
    public function destroy($id)
    {
        $Category= Categories::findOrFail($id);
        $Category->delete();
        return response()->json('Category detele seccessfully!'); 
    }
}
