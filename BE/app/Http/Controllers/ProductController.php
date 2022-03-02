<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Categories;
class ProductController extends Controller
{

    public function index()
    {
        $products= Product::all();
        return response()->json($products); 
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'title' => 'required',
            'price'=> 'required',
            'photo'=> 'required',
            'description'=> 'required',
            'category_id'=> 'required'
        ]);
        $product = new Product();
        //image upload
        if($request->hasFile('photo')){
            $file = $request->file('photo');
            $allowedfileExtention = ['pdf','png','jpg'];
            $extention = $file->getClientOriginalExtension();
            $check = in_array($extention,$allowedfileExtention);
            if($check){
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $product->photo= $name;
            }
        }
        
        if(Categories::find($request->input('category_id'))){
            $product->title = $request->input('title');        
            $product->price = $request->input('price');        
            $product->description = $request->input('description');      
            $product->category_id = $request->input('category_id');     
            $product->save();
            return response()->json($product);
        }
        else{
            return response()->json(
                [
                    'status'=> 404, 
                    'message' => 'Id category không hợp lệ', 
                ]
            );
        }
    }
    public function show($id)
    {
        $product= Product::find($id);
        return response()->json($product); 
    }
    public function showbycategory($id)
    {
           $product = Product::where('category_id',$id)->get();
          return response()->json($product); 

    }

    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'title' => 'required',
            'price'=> 'required',
            'photo'=> 'required',
            'description'=> 'required',
        ]);
        $product = Product::find($id);
         //image upload
         if($request->hasFile('photo')){
            $file = $request->file('photo');
            $allowedfileExtention = ['pdf','png','jpg'];
            $extention = $file->getClientOriginalExtension();
            $check = in_array($extention,$allowedfileExtention);
            if($check){
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $product->photo= $name;
            }
        }    
        $product->title = $request->input('title');        
        $product->price = $request->input('price');        
        $product->description = $request->input('description');   
        $product->save();
        return response()->json($product); 
    }
    public function destroy($id)
    {
        $product= Product::findOrFail($id);
        $product->delete();
        return response()->json('Product detele seccessfully!'); 
    }
}
   