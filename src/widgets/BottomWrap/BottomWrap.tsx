import { useTranslation } from 'react-i18next';
import { Pagination } from 'shared';
import { BottomWrapStyled, SelectLimit, SelectLimitWrap } from './styled';
import { TBottomWrapProps } from './types';

export const BottomWrap = ({
  forcePage,
  onPageChange,
  showCount,
  changeShowCount,
  totalCount,
  listLength,
  onlyCouples,
}: TBottomWrapProps) => {
  const { t } = useTranslation('menu');
  const perPage = +showCount;
  const totalPage = Math.ceil(totalCount / perPage);

  const startRange = (forcePage - 1) * perPage + 1;
  const endRange = forcePage === totalPage ? totalCount : startRange + listLength - 1;

  const options = onlyCouples ? [12, 24, 40, 80] : [10, 20, 50, 100];

  return totalPage > 0 ? (
    <BottomWrapStyled>
      <div>
        {t('showing')} {startRange}-{endRange} {t('of')} {t('items', { count: totalCount })}
      </div>

      {totalPage >= 2 && (
        <Pagination forcePage={forcePage - 1} pageCount={totalPage} onPageChange={onPageChange} />
      )}

      {totalCount > 5 && (
        <SelectLimitWrap>
          <label htmlFor="selectLimit">{t('show')}</label>
          <SelectLimit id="selectLimit" value={showCount} onChange={changeShowCount}>
            {options.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </SelectLimit>
          {t('items', { count: +showCount })}
        </SelectLimitWrap>
      )}
    </BottomWrapStyled>
  ) : null;
};
