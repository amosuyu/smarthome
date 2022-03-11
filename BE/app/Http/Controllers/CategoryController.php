<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Response;
use Illuminate\Http\Request;
use App\Models\Category;
class CategoryController extends Controller
{
    public function GetAll(){
        // $Category = Category::all();
        // return Response()->json($Category);
        return view('admin.category.index', ['Categories' => Category::GetAll()]);
    }
    public function index(){
        $Category = Category::all();
        return Response()->json($Category);
    }
    public function store(Request $request){
        $this->validate($request,[
            'title' => 'required',
            'description'=> 'required'
        ]);
        $Category = new Category();
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
        $Category = new Category();
        $Category->title = $request->input('title');          
        $Category->description = $request->input('description');        
        $Category->save();
        return Response()->json($Category);
    }
    public function destroy($id)
    {
        $Category= Category::findOrFail($id);
        $Category->delete();
        return response()->json('Category detele seccessfully!'); 
    }
}
