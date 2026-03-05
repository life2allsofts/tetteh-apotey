'use client';

import { getImageDescription } from '@/utils/imageUtils';

interface ImageGalleryProps {
  featuredImage?: string;
  images?: string[];
  title: string;
  onImageClick: (imageSrc: string) => void;
}

export default function ImageGallery({ featuredImage, images, title, onImageClick }: ImageGalleryProps) {
  if (!featuredImage) {
    return (
      <div className="w-full h-48 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center mb-3">
        <span className="text-gray-400 text-sm">Screenshot coming soon</span>
      </div>
    );
  }

  return (
    <div className="mb-4">
      {/* Main Featured Image */}
      <div className="mb-3">
        <img 
          src={featuredImage}
          alt={`${title} screenshot`}
          className="w-full h-48 object-contain rounded-lg border border-gray-200 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onImageClick(featuredImage)}
        />
        <p className="text-xs text-gray-500 text-center mt-1">
          Click image to view details
        </p>
        <p className="text-xs font-medium text-orange-600 text-center mt-1">
          {getImageDescription(featuredImage.split('/').pop() || '').title}
        </p>
      </div>

      {/* Thumbnail Gallery */}
      {images && Array.isArray(images) && images.length > 1 && (
        <div className="mt-3">
          <p className="text-xs font-medium text-orange-600 mb-2">More screenshots:</p>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {images
              .filter((img: string) => img && typeof img === 'string' && img !== featuredImage)
              .map((image: string, index: number) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-20 cursor-pointer"
                  onClick={() => onImageClick(image)}
                >
                  <img 
                    src={image}
                    alt={`${title} feature ${index + 1}`}
                    className="w-20 h-16 object-cover rounded border border-gray-200 hover:border-orange-400 transition-colors"
                  />
                  <p className="text-xs font-medium text-orange-600 text-center mt-1 truncate">
                    {getImageDescription(image.split('/').pop() || '').shortTitle}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Single image hint */}
      {featuredImage && (!images || images.length <= 1) && (
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            💡 <span className="font-medium">Click the image above</span> to view details
          </p>
        </div>
      )}
    </div>
  );
}