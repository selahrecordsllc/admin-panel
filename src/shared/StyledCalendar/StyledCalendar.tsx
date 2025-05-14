import { CalendarWrapper, CustomInputWrap } from './styled';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

import { ru, enGB } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

type SingleValue = Date | null;
type RangeValue = [Date | null, Date | null] | null;

type BaseProps<T extends SingleValue | RangeValue> = {
  value: T;
  onChange: (value: T) => void;
  isRange?: T extends RangeValue ? true : false;
  zIndex?: number;
};

type CustomInputProps = {
  $isOpen: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const StyledCalendar = <T extends SingleValue | RangeValue>({
  value,
  onChange,
  isRange,
  zIndex = 5,
}: BaseProps<T>) => {
  const {
    t,
    i18n: { language },
  } = useTranslation('menu');
  const [isOpen, setIsOpen] = useState(false);

  const startDate = (
    isRange && Array.isArray(value) ? value[0] : value
  ) as Date | null;
  const endDate = isRange && Array.isArray(value) ? value[1] : null;

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(isRange ? ([null, null] as T) : (null as T));
  };

  const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    ({ $isOpen, ...props }, ref) => (
      <CustomInputWrap $isOpen={$isOpen}>
        <input
          type="text"
          readOnly
          ref={ref}
          {...props}
          className="datepicker-input"
        />
        {props.value ? (
          <IoClose className="clear-icon" onClick={handleClear} />
        ) : (
          <FaRegCalendarAlt className="calendar-icon" />
        )}
      </CustomInputWrap>
    )
  );

  return (
    <CalendarWrapper $zIndex={zIndex}>
      {isRange ? (
        <DatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={val => onChange(val as T)}
          selectsRange
          customInput={<CustomInput $isOpen={isOpen} />}
          dateFormat="dd.MM.yyyy"
          placeholderText={t('select_date')}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
          locale={language === 'ru' ? ru : enGB}
          portalId="portal-root"
        />
      ) : (
        <DatePicker
          selected={startDate}
          onChange={val => onChange(val as T)}
          customInput={<CustomInput $isOpen={isOpen} />}
          dateFormat="dd.MM.yyyy"
          placeholderText={t('select_date')}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
          locale={language === 'ru' ? ru : enGB}
          portalId="portal-root"
        />
      )}
    </CalendarWrapper>
  );
};
