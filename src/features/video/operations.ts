import { apiPrivate } from 'shared/api';

export type TVideoRes = { video: string; _id: string; warmUpVideo: string };

export const uploadVideo = async (formData: FormData) => {
  const { data } = await apiPrivate.put<TVideoRes>(`/api/admin/video`, formData);
  return data;
};

export const getVideo = async () => {
  const { data } = await apiPrivate<TVideoRes>(`/api/admin/video`);
  return data;
};
