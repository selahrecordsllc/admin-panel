import {
  Aside,
  CloseButton,
  ExitBtn,
  Nav,
  StyledLogo,
  StyledNavlink,
} from './styled';
import { useTranslation } from 'react-i18next';
import logo from '/images/Logo.png';
import { FiMic } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { LuUser } from 'react-icons/lu';
import { RiFileListLine } from 'react-icons/ri';
import exitIcon from '/icons/exit.svg';

import { IoClose } from 'react-icons/io5';

import { ERoutes } from 'shared/enums';
import { clearAuthTokenHeader, useAppDispatch } from 'shared/index';
import { authActions, logout } from 'features/auth';

type TProps = { toggleMenu: () => void };

export const AppBar = ({ toggleMenu }: TProps) => {
  const { t } = useTranslation('menu');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const exit = async () => {
    await logout();
    dispatch(authActions.exit());
    clearAuthTokenHeader();
    navigate(ERoutes.login);
  };
  const navItems = [
    { to: ERoutes.home, icon: <LuUser />, label: t('userList') },
    {
      to: ERoutes.training_type,
      icon: <RiFileListLine />,
      label: t('trainingType'),
    },

    {
      label: t('exercises'),
      icon: <FiMic />,
      to: ERoutes.exercises,
    },
  ];
  return (
    <Aside>
      <StyledLogo to="/">
        <img src={logo} />
        <p> Training Voice</p>
        <span></span>
      </StyledLogo>
      <CloseButton onClick={toggleMenu}>
        <IoClose />
      </CloseButton>
      <Nav>
        {navItems.map(item => (
          <StyledNavlink key={item.to} to={item.to || '/'}>
            {item.icon} {item.label}
          </StyledNavlink>
        ))}
      </Nav>

      <ExitBtn onClick={exit}>
        <img src={exitIcon} /> {t('logout')}
      </ExitBtn>
    </Aside>
  );
};
