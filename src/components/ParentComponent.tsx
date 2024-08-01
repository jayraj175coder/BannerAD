import React, { useState } from 'react';
import BannerImageComp from './BannerImageComp';
import EditBannerTemplateBs from './EditBannerTemplateBs';
import { AdBanner } from '@/types';

const ParentComponent: React.FC = () => {
  const [banner, setBanner] = useState<AdBanner>({
    title: 'Sample Title',
    description: 'Sample Description',
    cta: 'Click Me',
    image: 'https://via.placeholder.com/150',
    background: '#004953'
  });
  
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedBanner: AdBanner) => {
    setBanner(updatedBanner);
    setIsEditing(false);
  };

  const handleEdit = (banner: AdBanner) => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditBannerTemplateBs
          banner={banner}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <BannerImageComp
          banner={banner}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default ParentComponent;
