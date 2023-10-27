"use client";

import { useState } from "react";

function ProductImages({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <img key={images[selectedImage]} className="bg-white rounded-lg outline-1 overflow-hidden aspect-square max-h-[400px] object-contain" src={images[selectedImage]} />
      <div className="p-1 inline-flex items-center gap-2 overflow-x-scroll overflow-y-visible">
        {images?.map((image: string, i) => (
          <img key={image} className={`w-20 aspect-square object-cover rounded-md ${i === selectedImage ? 'outline outline-2 outline-primary' : ''}`} onClick={() => setSelectedImage(i)} src={image} />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
