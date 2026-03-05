'use client';

import { SelectedImage } from '@/types';

interface ImageModalProps {
  selectedImage: SelectedImage | null;
  onClose: () => void;
}

export default function ImageModal({ selectedImage, onClose }: ImageModalProps) {
  if (!selectedImage) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl max-h-[90vh] overflow-auto cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-orange-600">{selectedImage.title}</h3>
              <p className="text-gray-600 mt-1">{selectedImage.description}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl ml-4"
            >
              ×
            </button>
          </div>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.title}
            className="w-full rounded-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}