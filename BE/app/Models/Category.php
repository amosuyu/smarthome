<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Product;
class Category extends Model
{
    
    use HasFactory;
    protected $table='categories';
    protected $primaryKey ='id';
    protected $fillable = [
        'id',
        'title',
        'description'
    ];
    function scopeGetAll(){
        return $this->orderBy('id','asc')->paginate(10);
    }
    function Products(){
        return $this->hasMany('Product');
    }
}
