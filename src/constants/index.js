export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const PHONE_NUMBER_REGEX = /^\+\d[0-9]+$/;

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;

export const FIFTEEN_MINUTES = 15 * 60 * 1000;

export const ACCESS_TOKEN_TIME = new Date(Date.now() + FIFTEEN_MINUTES);

export const ONE_DAY = 24 * 60 * 60 * 1000;

export const REFRESH_TOKEN_TIME = new Date(Date.now() + ONE_DAY);
