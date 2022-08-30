const apiPrefix = 'api';

const dev = `http://localhost:3456/${apiPrefix}`;
const prod = '';

const apiUrl = process.env.NODE_ENV === 'development' ? dev : prod;

export default apiUrl;
