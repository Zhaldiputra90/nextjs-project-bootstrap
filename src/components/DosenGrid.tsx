"use client";

import React from 'react';
import Link from 'next/link';

const DosenGrid = () => {
  const dosenData = [
    {
      id: 1,
      nama: "Prof. Dr. Ahmad Santoso, S.H., M.H.",
      nidn: "0123456789",
      status: "Dosen Tetap",
      pangkat: "Guru Besar",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/839bbc82-1095-4515-bfaa-dec71e23ec9d.png",
      isActive: true
    },
    {
      id: 2,
      nama: "Dr. Siti Nurhaliza, S.H., M.H.",
      nidn: "0234567890",
      status: "Dosen Tetap",
      pangkat: "Lektor Kepala",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/95561a1f-e1ed-41b7-bfe2-63f7f64c2a25.png",
      isActive: true
    },
    {
      id: 3,
      nama: "Dr. Budi Prasetyo, S.H., M.H.",
      nidn: "0345678901",
      status: "Dosen Tetap",
      pangkat: "Lektor",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1bb129aa-e218-44e9-a9b5-5bcccae300a5.png",
      isActive: false
    },
    {
      id: 4,
      nama: "Andi Wijaya, S.H., M.H.",
      nidn: "0456789012",
      status: "Dosen Tetap",
      pangkat: "Asisten Ahli",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/140de41a-57e1-42af-9dd4-6f0b46d20506.png",
      isActive: true
    },
    {
      id: 5,
      nama: "Dr. Maya Sari, S.H., M.H.",
      nidn: "0567890123",
      status: "Dosen Tetap",
      pangkat: "Lektor",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1aa6c536-d25a-4e68-986b-acd060832012.png",
      isActive: true
    },
    {
      id: 6,
      nama: "Rudi Hartono, S.H., M.H.",
      nidn: "0678901234",
      status: "Dosen Tidak Tetap",
      pangkat: "Asisten Ahli",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/853d403a-3bc8-4625-a6fd-c9b55db5d969.png",
      isActive: false
    },
    {
      id: 7,
      nama: "Dr. Lisa Permata, S.H., M.H.",
      nidn: "0789012345",
      status: "Dosen Tetap",
      pangkat: "Lektor Kepala",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b9e7b2a4-eaf9-4442-b510-547c4eae8e41.png",
      isActive: true
    },
    {
      id: 8,
      nama: "Dedi Kurniawan, S.H., M.H.",
      nidn: "0890123456",
      status: "Dosen Tetap",
      pangkat: "Asisten Ahli",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50b35610-01f5-4bcc-b845-9367a6c46aa2.png",
      isActive: false
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-red-600 font-roboto mb-2">Dosen</h2>
          <p className="text-gray-600 font-roboto">Profil Dosen Fakultas Hukum</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dosenData.map((dosen) => (
            <div key={dosen.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={dosen.foto}
                alt={dosen.nama}
                className="w-[40px] h-[30px] object-cover"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/40x30?text=Image+Not+Available"; }}
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 font-roboto text-sm line-clamp-2 flex-1">
                    {dosen.nama}
                  </h3>
                  <div className={`w-3 h-3 rounded-full ml-2 flex-shrink-0 ${dosen.isActive ? 'bg-green-500' : 'bg-red-500'}`} 
                       title={dosen.isActive ? 'Aktif' : 'Tidak Aktif'}>
                  </div>
                </div>
                <div className="space-y-1 text-xs font-roboto">
                  <p className="text-gray-600">
                    <span className="font-medium">NIDN:</span> {dosen.nidn}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Status:</span> {dosen.status}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Pangkat:</span> {dosen.pangkat}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Keaktifan:</span> 
                    <span className={`ml-1 font-medium ${dosen.isActive ? 'text-green-600' : 'text-red-600'}`}>
                      {dosen.isActive ? 'Aktif' : 'Tidak Aktif'}
                    </span>
                  </p>
                </div>
                <Link
                  href={`/dosen/${dosen.nidn}`}
                  className="inline-block mt-3 bg-red-500 text-white px-3 py-1 rounded text-xs font-roboto hover:bg-red-600 transition-colors"
                >
                  Detail Dosen
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/dosen"
            className="inline-flex items-center bg-red-500 text-white px-6 py-2 rounded-lg font-roboto text-sm hover:bg-red-600 transition-colors"
          >
            Lihat Semua Dosen
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DosenGrid;
