import type { CollectionBeforeChangeHook } from 'payload';
import sharp, { type BlurOptions, type FormatEnum } from 'sharp';

type BlurDataURLOptions = {
  format?: keyof FormatEnum;
  blur?: BlurOptions;
  fieldName: string;
};

export function createBlurDataURL({
  format = 'webp',
  blur = { sigma: 2 },
  fieldName,
}: BlurDataURLOptions): CollectionBeforeChangeHook {
  return async ({ data, req }) => {
    if (!req.file) {
      return data;
    }

    try {
      const imageBuffer = req.file.data;

      const placeholderBuffer = await sharp(imageBuffer)
        .resize(20)
        .blur(blur)
        .toFormat(format)
        .toBuffer();

      const base64 = placeholderBuffer.toString('base64');
      const dataURI = `data:image/${format};base64,${base64}`;

      return {
        ...data,
        [fieldName]: dataURI,
      };
    } catch (error) {
      req.payload.logger.error(`Error generating Blur Data: ${error}`);
      return data;
    }
  };
}
