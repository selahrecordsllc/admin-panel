import { Box, FilterBtn } from 'shared/index';
import { BurgerButton, LangList, StyledHeader } from './styled';
import { IoMenu } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from 'react-icons/gr';

type TProps = { toggle: () => void };

export const Header = ({ toggle }: TProps) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation('menu');

  const options = [
    { label: 'RU', value: 'ru' },
    { label: 'EN', value: 'en' },
  ];
  const onLangChange = (lang: (typeof language)[0]) => {
    changeLanguage(lang);
    // langToggle();
  };
  return (
    <StyledHeader>
      <BurgerButton onClick={toggle}>
        <IoMenu />
      </BurgerButton>
      <Box width="auto" $margin=" 0 0 0 auto">
        <FilterBtn
          height="38px"
          title={t('language')}
          Icon={<GrLanguage />}
          filterValue={language.toUpperCase()}
        >
          <LangList>
            {options?.map(el => (
              <li
                key={el.value}
                className={language === el.value ? 'active' : ''}
                onClick={() => onLangChange(el.value)}
              >
                {el.label}
              </li>
            ))}
          </LangList>
        </FilterBtn>
      </Box>
    </StyledHeader>
  );
};
