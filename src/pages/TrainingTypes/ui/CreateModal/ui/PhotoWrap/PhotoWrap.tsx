import { useFormContext } from 'react-hook-form';
import { CustomImage } from 'shared/index';
import { TCreateTypeForm } from '../../types';

const url = import.meta.env.VITE_BASE_URL;

export const PhotoWrap = () => {
  const { watch } = useFormContext<TCreateTypeForm>();
  const photo = watch('photo');
  const genetateSrc = () => {
    if (!photo) {
      return '';
    }
    if (photo instanceof File) {
      return URL.createObjectURL(photo);
    } else {
      return url + '/public/training-type/' + photo;
    }
  };
  const src = genetateSrc();
  return (
    <>{src ? <CustomImage width="200px" height="200px" src={src} /> : null}</>
  );
};
