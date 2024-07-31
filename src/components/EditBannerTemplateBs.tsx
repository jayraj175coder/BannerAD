import React, { useState, useRef } from 'react';

interface EditBannerProps {
  banner: AdBanner;
  onSave: (updatedBanner: AdBanner) => void;
  onCancel: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onCancel }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [imageUrl, setImageUrl] = useState(banner.image);
  const [backgroundColor, setBackgroundColor] = useState(banner.background || '#004953');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImageUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSave = () => {
    onSave({ ...banner, title, description, cta, image: imageUrl, background: backgroundColor });
    onCancel();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg z-50 border-t-4 border-blue-500 rounded-t-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-black">Edit Banner</h2>
        <button onClick={onCancel} className="text-black hover:text-gray-900 text-2xl">
          &times;
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-black">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-black">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-black">Image</label>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
          >
            Upload Image
          </button>
          {imageUrl && <img src={imageUrl} alt="Banner" className="w-24 h-24 object-cover rounded-lg border border-gray-300 shadow-sm" />}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-black">Background Color</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg text-black"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
