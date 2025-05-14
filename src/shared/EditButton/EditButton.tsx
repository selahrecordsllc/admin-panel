import { ButtonWrap, EditButtonStyled } from './styles';
import { MdOutlineEdit } from 'react-icons/md';
import { IconType } from 'react-icons';

type TProps = {
  link?: string;
  EditIcon?: IconType;
  onClick?: () => void;
  outlined?: boolean;
};

export const EditButton = ({ link, EditIcon, onClick, outlined }: TProps) => {
  return link ? (
    <ButtonWrap to={link} $outlined={outlined}>
      {EditIcon ? <EditIcon /> : <MdOutlineEdit />}
    </ButtonWrap>
  ) : (
    <EditButtonStyled onClick={onClick} $outlined={outlined}>
      {EditIcon ? <EditIcon /> : <MdOutlineEdit />}
    </EditButtonStyled>
  );
};
