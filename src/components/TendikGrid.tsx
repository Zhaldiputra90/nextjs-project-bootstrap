"use client";

import React from 'react';
import Link from 'next/link';

const TendikGrid = () => {
  const tendikData = [
    {
      id: 1,
      nama: "Sari Indrawati, S.Kom.",
      nip: "198501012010032001",
      jabatan: "Kepala Tata Usaha",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d02ca02-bd6f-4270-93be-9045ce492e1d.png",
      isActive: true
    },
    {
      id: 2,
      nama: "Bambang Sutrisno, S.E.",
      nip: "198203152008011002",
      jabatan: "Staff Administrasi Akademik",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5df663a-fbd2-4c73-bce1-93cd247d673c.png",
      isActive: true
    },
    {
      id: 3,
      nama: "Dewi Kartika, A.Md.",
      nip: "198907202012032003",
      jabatan: "Staff Keuangan",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1881497-7025-4481-9fd5-0b52cc453846.png",
      isActive: false
    },
    {
      id: 4,
      nama: "Agus Setiawan, S.T.",
      nip: "198412102015031001",
      jabatan: "Staff IT dan Laboratorium",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd0f9413-ad8b-4273-b0b9-c7ab9429862a.png",
      isActive: true
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-red-600 font-roboto mb-2">Tenaga Kependidikan</h2>
          <p className="text-gray-600 font-roboto">Profil Tenaga Kependidikan Fakultas Hukum</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tendikData.map((tendik) => (
            <div key={tendik.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={tendik.foto}
                alt={tendik.nama}
                className="w-[40px] h-[30px] object-cover"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/40x30?text=Image+Not+Available"; }}
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 font-roboto text-sm line-clamp-2 flex-1">
                    {tendik.nama}
                  </h3>
                  <div className={`w-3 h-3 rounded-full ml-2 flex-shrink-0 ${tendik.isActive ? 'bg-green-500' : 'bg-red-500'}`} 
                       title={tendik.isActive ? 'Aktif' : 'Tidak Aktif'}>
                  </div>
                </div>
                <div className="space-y-1 text-xs font-roboto">
                  <p className="text-gray-600">
                    <span className="font-medium">NIP:</span> {tendik.nip}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Jabatan:</span> {tendik.jabatan}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Keaktifan:</span> 
                    <span className={`ml-1 font-medium ${tendik.isActive ? 'text-green-600' : 'text-red-600'}`}>
                      {tendik.isActive ? 'Aktif' : 'Tidak Aktif'}
                    </span>
                  </p>
                </div>
                <Link
                  href={`/tendik/${tendik.nip}`}
                  className="inline-block mt-3 bg-red-500 text-white px-3 py-1 rounded text-xs font-roboto hover:bg-red-600 transition-colors"
                >
                  Detail Tendik
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tendik"
            className="inline-flex items-center bg-red-500 text-white px-6 py-2 rounded-lg font-roboto text-sm hover:bg-red-600 transition-colors"
          >
            Lihat Semua Tendik
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TendikGrid;
