<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;
    protected $fillable=[
        'title','description','percent','discount','end_date'
    ];
    function scopeGetAll(){
        return $this->orderBy('id','desc')->paginate(10);
    }
}
