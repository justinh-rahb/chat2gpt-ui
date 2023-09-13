import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

let PROMPT_PREFIX = process.env.PROMPT_PREFIX || '';
let PROMPT_SUFFIX = process.env.PROMPT_SUFFIX || '';

const api = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});

export const updateSettings = (settings) => {
  PROMPT_PREFIX = settings.PROMPT_PREFIX;
  PROMPT_SUFFIX = settings.PROMPT_SUFFIX;
};

export const sendMessage = async (message) => {
  const data = {
    model: process.env.DEFAULT_MODEL,
    message: `${PROMPT_PREFIX}${message}${PROMPT_SUFFIX}`
  };

  const response = await api.post('/engines/davinci-codex/completions', data);
  return response.data;
};
