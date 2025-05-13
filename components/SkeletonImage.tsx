"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

export default function SkeletonImage(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-fit h-fit">
      {/* Skeleton overlay (only visible while loading) */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <Image
        {...props}
        // When the image finishes loading, hide the skeleton
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
