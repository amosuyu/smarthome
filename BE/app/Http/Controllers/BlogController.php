<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Blog;
class BlogController extends Controller
{
    public function index()
    {
      
        $blog= Blog::all();
        return response()->json($blog); 
    }
    public function GetAll()
    {
        return view('admin.blog.index', ['Blogs' => Blog::GetAll()]);
    }
    // public function create()
    // {
    //     return view('admin.blogs.create');
    // }

    public function store(Request $request)
    {
        
        $this->validate($request,[
            'title' => 'required',
            'description'=> 'required',
            'photo'=> 'required'
        ]);
        $blog = new Blog();
        //image upload
       
        if($request->hasFile('photo')){
            $file = $request->file('photo');
            $allowedfileExtention = ['pdf','png','jpg'];
            $extention = $file->getClientOriginalExtension();
            $check = in_array($extention,$allowedfileExtention);
            if($check){
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $blog->photo= $name;
            }
        }
       
            $blog->title = $request->input('title');        
            $blog->description = $request->input('description');        
            $blog->display = $request->input('display');       
            $blog->save();
        
                return response()->json($blog);

    }
    public function show($id)
    {
        $blog= Blog::find($id);
        return response()->json($blog); 
    }

    public function destroy($id)
    {
        $blog= Blog::findOrFail($id);
        $blog->delete();
        return response()->json('Blog detele seccessfully!'); 
    }
}
