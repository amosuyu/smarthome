<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Category;
class Product extends Model
{
    // use HasFactory, SoftDeletes;
    protected $table='Products';
    protected $primaryKey ='id';
    protected $fillable=[
        'title','price','photo','description','category_id'
    ];
    function scopeGetAll(){
        return $this->orderBy('id','asc')->paginate(10);
    }
    function category(){
        return $this->belongsTo('Category');
    }
}
