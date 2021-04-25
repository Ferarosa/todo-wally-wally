import fetch from './fetch';
import create from './create';
import remove from './remove';

const api = {
  ...fetch,
  ...create,
  ...remove,
}

export default api;