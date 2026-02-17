import { GroupBase, Props as SelectProps } from 'react-select';
export interface OptionType {
  label: string;
  value: string;
}
export type SelectInputProp = SelectProps<OptionType, boolean, GroupBase<OptionType>> & {
  width?: string;
  height?: string;
  label?: string;
  error?: string;
  borderRadius?: number;
};
export type TStyledSelectProps = { width?: string; height?: string };
