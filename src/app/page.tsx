// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import BannerImageComp from '@/components/BannerImageComp';
import EditBannerTemplateBs from '@/components/EditBannerTemplateBs';

interface AdBanner {
  id: number;
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  backgroundColor?: string;
}

const Home: React.FC = () => {
  const [banners, setBanners] = useState<AdBanner[]>([]);
  const [editingBanner, setEditingBanner] = useState<AdBanner | null>(null);

  useEffect(() => {
    fetch('/adBanners.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setBanners(data))
      .catch(error => console.error('Error fetching ad banners:', error));
  }, []);

  const handleEdit = (banner: AdBanner) => {
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: AdBanner) => {
    setBanners(banners.map(b => (b.id === updatedBanner.id ? updatedBanner : b)));
    setEditingBanner(null);
  };

  return (
    <div className="p-4">
      {banners.map(banner => (
        <BannerImageComp key={banner.id} banner={banner} onEdit={handleEdit} />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs banner={editingBanner} onSave={handleSave} onCancel={() => setEditingBanner(null)} />
      )}
    </div>
  );
};

export default Home;
