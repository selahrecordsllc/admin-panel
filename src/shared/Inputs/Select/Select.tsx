import Select, { CSSObjectWithLabel } from 'react-select';
import { ErrorP, SelectWrap } from './styled';
import { SelectInputProp } from './types';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import makeAnimated from 'react-select/animated';

export const SelectInput = ({
  width = '335px',
  height = '44px',
  label,
  error,
  ...selectProps
}: SelectInputProp) => {
  const { t } = useTranslation('menu');

  const mainTheme = useTheme();
  const customStyles = {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      minHeight: height,
      width,
      boxShadow: 'none',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    }),
  };
  const animatedComponents = makeAnimated();
  return (
    <>
      <SelectWrap width={width} height={height}>
        {label && <p>{label}</p>}
        <Select
          components={{ ...animatedComponents, IndicatorSeparator: () => null }}
          {...selectProps}
          styles={customStyles}
          noOptionsMessage={() => t('noOptions')}
          theme={theme => ({
            ...theme,
            borderRadius: 8,
            colors: {
              ...theme.colors,
              primary25: mainTheme.colors.borderInputGrey,
              primary: mainTheme.colors.primary,
              primary50: mainTheme.colors.pageBackground,
              neutral20: error
                ? mainTheme.colors.errorRed
                : mainTheme.colors.borderInputGrey,
              neutral30: mainTheme.colors.borderInputGrey,
            },
          })}
        />
        {error && <ErrorP className="error">{error}</ErrorP>}
      </SelectWrap>
    </>
  );
};
