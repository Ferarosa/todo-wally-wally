import fetch from './fetch';
import create from './create';

const api = {
  ...fetch,
  ...create,
}

export default api;