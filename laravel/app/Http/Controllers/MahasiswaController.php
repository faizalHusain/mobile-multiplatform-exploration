<?php

namespace App\Http\Controllers;

use App\Models\mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MahasiswaController extends Controller
{
    //
    static function index()
    {
        $mahasiswa = mahasiswa::all();
        return response()->json([
            'data' => $mahasiswa
        ]);
    }
    static function create(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'nama' => 'required|string',
                'nim' => 'required|string|unique:mahasiswas',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ]);
            }
            $mahasiswa = mahasiswa::create([
                'nama' => $request->nama,
                'nim' => $request->nim,
            ]);
            return response()->json([
                'message' => 'Data berhasil ditambahkan',
                'data' => $mahasiswa
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
    static function update(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'id' => 'required|integer',
                'nama' => 'required|string',
                'nim' => 'required|string|unique:mahasiswas' . ($request->id ? ",id,$request->id" : ''),
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ]);
            }
            // update data use model
            $mahasiswa = mahasiswa::find($request->id);
            $mahasiswa->nama = $request->nama;
            $mahasiswa->nim = $request->nim;
            $mahasiswa->save();
            return response()->json($mahasiswa);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
    static function show($id)
    {
        try {
            $validator = Validator::make(['id' => $id], [
                'id' => 'required|integer|exists:mahasiswas',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ]);
            }
            $mahasiswa = mahasiswa::find($id);
            return response()->json($mahasiswa);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
    static function delete(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'id' => 'required|integer|exists:mahasiswas',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->errors()->first()
                ], 422);
            }
            $mahasiswa = DB::table('mahasiswas')->where('id', $request->id)->delete();
            return response()->json([
                'message' => 'Data berhasil dihapus',
                'data' => $mahasiswa
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
}
