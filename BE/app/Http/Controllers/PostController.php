<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class PostController extends Controller
{
    public function index(){

        return Post::all();
    }
    public function store(Request $request)
    {
        // $this->validate($request,[
        //     'title' => 'required',
        //     'price'=> 'required',
        //     'photo'=> 'required',
        //     'description'=> 'required',
        // ]);
        // $product = new Product();
        // //image upload
        // $product->title = $request->input('title');        
        // $product->price = $request->input('price');        
        // $product->description = $request->input('description');        
        // $product->save();
        // return response()->json($product);
       try {
        $post = new Post();
        $post->title = $request->title;
        $post->body = $request->body;
        if($post->save()){
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
