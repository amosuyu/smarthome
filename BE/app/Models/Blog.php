<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $table='blog';
    protected $fillable = [
        'title',
        'description',
        'photo',
        'display' 
    ];
    function scopeGetAll(){
        return $this->orderBy('id','asc')->paginate(10);
    }
}
