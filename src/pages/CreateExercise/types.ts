import { t } from 'i18next';
import { z } from 'zod';

export const isValidAudioUrl = (url: string): boolean => {
  const audioExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.aac', '.flac'];
  try {
    const parsed = new URL(url);
    return audioExtensions.some(ext => parsed.pathname.endsWith(ext));
  } catch {
    return false;
  }
};

export const exerciseSchema = z
  .object({
    name: z.string().min(1, { message: t('errors:fieldRequired') }),
    difficulty: z
      .array(z.string())
      .min(1, { message: t('errors:fieldRequired') }),
    type: z.array(z.string()).min(1, { message: t('errors:fieldRequired') }),
    manual: z.string().optional(),
    manualFile: z.instanceof(File).optional(),
    url: z.string().optional(),
    urlFile: z.instanceof(File).optional(),
    urlLenth: z.number().optional(),
    manualLenth: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    // manual check
    if (!data.manual && !data.manualFile) {
      ctx.addIssue({
        path: ['manual'],
        code: 'custom',
        message: t('errors:fieldRequired'),
      });
      ctx.addIssue({
        path: ['manualFile'],
        code: 'custom',
        message: t('errors:fieldRequired'),
      });
    }

    // url check
    if (!data.url && !data.urlFile) {
      ctx.addIssue({
        path: ['url'],
        code: 'custom',
        message: t('errors:fieldRequired'),
      });
      ctx.addIssue({
        path: ['urlFile'],
        code: 'custom',
        message: t('errors:fieldRequired'),
      });
    }

    if (data.manual && !isValidAudioUrl(data.manual)) {
      ctx.addIssue({
        path: ['manual'],
        code: 'custom',
        message: t('errors:invalidAudioLink'),
      });
    }

    if (data.url && !isValidAudioUrl(data.url)) {
      ctx.addIssue({
        path: ['url'],
        code: 'custom',
        message: t('errors:invalidAudioLink'),
      });
    }
  });

export type TExerciseForm = z.infer<typeof exerciseSchema>;
