import { useTranslation } from 'react-i18next';
import { FiMic } from 'react-icons/fi';
import { LuUser } from 'react-icons/lu';
import { RiFileListLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { Aside, CloseButton, ExitBtn, Nav, StyledLogo, StyledNavlink } from './styled';
import exitIcon from '/icons/exit.svg';
import logo from '/images/Logo.png';

import { IoClose } from 'react-icons/io5';

import { authActions, logout } from 'features/auth';
import { PiVideoLight } from 'react-icons/pi';
import { ERoutes } from 'shared/enums';
import { clearAuthTokenHeader, useAppDispatch } from 'shared/index';

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
    { to: ERoutes.video, icon: <PiVideoLight />, label: t('video') },
  ];
  return (
    <Aside>
      <StyledLogo to="/">
        <img src={logo} />
        <p> Training Voice Prod</p>
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
