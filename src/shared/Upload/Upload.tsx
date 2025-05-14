import { UploadWrap } from './styled';
import { RiUploadFill } from 'react-icons/ri';
import { UploadProps } from './types';

export const Upload = ({ isRound = false, onClick, error }: UploadProps) => {
  return (
    <UploadWrap onClick={onClick} $round={isRound} $error={error}>
      <RiUploadFill />
      <p>Upload or drag the file(s)</p>
    </UploadWrap>
  );
};
