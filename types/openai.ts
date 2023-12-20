import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  Mistral_Tiny = 'mistral-tiny',
  Mistral_Small = 'mistral-small',
  Mistral_Medium = 'mistral-medium',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.Mistral_Small;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.Mistral_Tiny]: {
    id: OpenAIModelID.Mistral_Tiny,
    name: 'Mistral-Tiny',
    maxLength: 120000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.Mistral_Small]: {
    id: OpenAIModelID.Mistral_Small,
    name: 'Mistral-Small',
    maxLength: 120000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.Mistral_Medium]: {
    id: OpenAIModelID.Mistral_Medium,
    name: 'Mistral-Medium',
    maxLength: 120000,
    tokenLimit: 4000,
  },
};

