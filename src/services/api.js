import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'https://gw-dev.obiebank.banfico.com/obie-aisp/v3.1/aisp',
});

const apiAccessAuth = axios.create({
  baseURL: 'https://auth.obiebank.banfico.com/auth/realms/provider',
});

const apiObieBank = axios.create({
  baseURL: 'https://developer-api.obiebank.banfico.com/api',
});

const apiAggregator = axios.create({
  baseURL: 'https://aggregator-api.obaf.banfico.com/api/providers',
});

export { apiBase, apiAccessAuth, apiObieBank, apiAggregator };
