export const getLinkWithParams = (
  link: string,
  params: { [key: string]: string }
) => {
  return Object.keys(params).reduce((result, key) => {
    return result?.replace(`:${key}`, params[key]);
  }, link);
};
