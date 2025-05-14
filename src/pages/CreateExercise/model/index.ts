import { createExercise, editExercise, TExercise } from 'features/exercises';
import { TExerciseForm } from '../types';
import toast from 'react-hot-toast';
import { t } from 'i18next';
import { UseFormReset } from 'react-hook-form';

const apiurl = import.meta.env.VITE_BASE_URL;

const stripAudioPath = (val?: string | null) => {
  if (!val) return '';
  return val.startsWith(audioPath) ? val.replace(audioPath, '') : val;
};

const audioPath = apiurl + '/public/training/';

export const creteExerciseHandler = async (data: TExerciseForm) => {
  try {
    const formData = new FormData();
    formData.append('title', data.name);
    data.difficulty?.forEach(el => formData.append('difficulty[]', el));
    data.type?.forEach(el => formData.append('type[]', el));
    if (data.manual?.length) {
      formData.append('manual', data.manual);
    }
    if (data.manualFile) {
      formData.append('manualFile', data.manualFile);
    }
    if (data.url) {
      formData.append('url', data.url);
    }
    if (data.urlFile) {
      formData.append('urlFile', data.urlFile);
    }
    formData.append('urlLenth', data.urlLenth ? data.urlLenth.toString() : '0');
    formData.append(
      'manualLenth',
      data.manualLenth ? data.manualLenth.toString() : '0'
    );

    await createExercise(formData);
    return true;
  } catch (error) {
    console.log(error);
    toast.error(t('toast:createError'));
    return false;
  }
};

export const editExerciseHandler = async (
  data: TExerciseForm,
  id: string,
  prevData: TExercise
) => {
  try {
    const formData = new FormData();
    formData.append('title', data.name);
    data.difficulty?.forEach(el => formData.append('difficulty[]', el));
    data.type?.forEach(el => formData.append('type[]', el));

    // manual
    const newManual = stripAudioPath(data.manual);
    if (newManual && newManual !== prevData.manual?.url) {
      formData.append('manual', newManual);
    }
    if (data.manualFile) {
      formData.append('manualFile', data.manualFile);
    }

    // url
    const newUrl = stripAudioPath(data.url);
    if (newUrl && newUrl !== prevData?.url?.url) {
      formData.append('url', newUrl);
    }
    if (data.urlFile) {
      formData.append('urlFile', data.urlFile);
    }
    formData.append('urlLenth', data.urlLenth ? data.urlLenth.toString() : '0');
    formData.append(
      'manualLenth',
      data.manualLenth ? data.manualLenth.toString() : '0'
    );
    await editExercise(formData, id);
    return true;
  } catch (error) {
    console.log(error);
    toast.error(t('toast:editError'));
    return false;
  }
};

export const setDefaultData = (
  data: TExercise,
  reset: UseFormReset<TExerciseForm>
) => {
  reset({
    name: data.title,
    difficulty: data.difficulty,
    type: data.type?.map(el => el._id),
    manual: data.manual?.url?.startsWith('http')
      ? data.manual.url
      : audioPath + data.manual?.url,
    url: data.url?.url?.startsWith('http')
      ? data.url?.url
      : audioPath + data.url?.url,
    urlLenth: data?.url?.lenth || 0,
    manualLenth: data?.manual?.lenth,
  });
};
