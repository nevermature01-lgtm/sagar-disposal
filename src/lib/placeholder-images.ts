
import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  width?: number;
  height?: number;
  type?: 'image' | 'video';
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages as ImagePlaceholder[];
