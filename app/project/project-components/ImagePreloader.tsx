"use client";

import { useEffect } from "react";
import { categoryImages } from "./projectImages";

const ImagePreloader = () => {
  useEffect(() => {
    const allImages = [
      ...categoryImages.bathroom,
      ...categoryImages.bedroom,
      ...categoryImages.kitchen,
      ...categoryImages.livingArea,
    ];

    const priorityImages = Object.values(categoryImages).flatMap((category) =>
      category.slice(0, 4)
    );

    const regularImages = allImages.filter(
      (img) => !priorityImages.some((priority) => priority.url === img.url)
    );

    const preloadImage = (imageUrl: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    priorityImages.forEach((image) => {
      preloadImage(image.url);
    });

    setTimeout(() => {
      regularImages.forEach((image) => {
        preloadImage(image.url);
      });
    }, 1000);
  }, []);

  return null;
};

export default ImagePreloader;
