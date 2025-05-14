import { TUser } from 'features/users';
import { StatusSpan, UserItemStyled } from './styled';
import { CustomImage } from 'shared/index';
import { format, parseISO } from 'date-fns';
import { enGB, ru } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
type TProps = {
  item: TUser;
};

const apiUrl = import.meta.env.VITE_BASE_URL;

export const UserItem = ({ item }: TProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation('users');

  const isSubscriptionActive = (
    subDate: string,
    unSubDate: string
  ): boolean => {
    if (!subDate || !unSubDate) {
      return false;
    }
    const now = new Date();
    const start = parseISO(subDate);
    const end = parseISO(unSubDate);

    return now >= start && now <= end;
  };

  const langDate = language === 'en' ? enGB : ru;
  const formatDate = (date: string) => {
    if (!date) {
      return '-';
    }
    return format(date, 'd MMMM yyyy, HH:mm', {
      locale: langDate,
    });
  };
  const isSubscription = isSubscriptionActive(item.subDate, item.unSubDate);
  return (
    <UserItemStyled>
      <div>
        <CustomImage
          width="44px"
          height="44px"
          src={apiUrl + '/public/user/' + item.photo}
          alt="user photo"
        />
        <span>
          <p className="name">{item.first_name}</p>
          <p className="second-name">{item.last_name}</p>
        </span>
      </div>
      <div>{item.email}</div>
      <div>{formatDate(item.subDate)}</div>
      <div>{formatDate(item.unSubDate)}</div>
      <div>
        {item.subDate ? (
          <StatusSpan $isActive={isSubscription}></StatusSpan>
        ) : null}
        {item.subDate ? (isSubscription ? t('active') : t('inactive')) : '-'}
      </div>
    </UserItemStyled>
  );
};
