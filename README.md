[![Docker](https://github.com/RAHB-REALTORS-Association/chat2gpt-ui/actions/workflows/deploy-docker-image.yaml/badge.svg?branch=main)](https://github.com/RAHB-REALTORS-Association/chat2gpt-ui/actions/workflows/deploy-docker-image.yaml)

# Chat²GPT UI

**Chat²GPT UI** is an open source chat UI for AI models.

## Deploy

**Docker**

Build locally:

```bash
git clone https://github.com/RAHB-REALTORS-Association/chat2gpt-ui.git
git checkout mistral
docker build -t chat2gpt-ui .
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 chat2gpt-ui
```

Pull from ghcr:

```
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 ghcr.io/rahb-realtors-association/chat2gpt-ui:mistral
```

## Running Locally

**1. Clone Repo**

```bash
git clone https://github.com/RAHB-REALTORS-Association/chat2gpt-ui.git
git checkout mistral
```

**2. Install Dependencies**

```bash
npm i
```

**3. Provide Mistral Platform API Key**

Create a .env.local file in the root of the repo with your Mistral API Key:

```bash
OPENAI_API_KEY=YOUR_KEY
```

> You can set `OPENAI_API_HOST` where access to the official OpenAI host is restricted or unavailable, allowing users to configure an alternative host for their specific needs.

**4. Run App**

```bash
npm run dev
```

## Configuration

When deploying the application, the following environment variables can be set:

| Environment Variable              | Default value                  | Description                                                                                                                               |
| --------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| OPENAI_API_KEY                    |                                | The default API key used for authentication with Mistral AI                                                                                   |
| DEFAULT_MODEL                     | `mistral-small`                | The default model to use on new conversations                      |
| NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT | [see here](utils/app/const.ts) | The default system prompt to use on new conversations                                                                                     |
| NEXT_PUBLIC_DEFAULT_TEMPERATURE   | 1                              | The default temperature to use on new conversations                                                                                       |
| GOOGLE_API_KEY                    |                                | See [Custom Search JSON API documentation][GCSE]                                                                                          |
| GOOGLE_CSE_ID                     |                                | See [Custom Search JSON API documentation][GCSE]                                                                                          |

If you do not provide a Mistral API key with `OPENAI_API_KEY`, users will have to provide their own key.

If you don't have a Mistral API key, you can get one [here](https://console.mistral.ai/users/api-keys/).

## License
This project is open sourced under the MIT license. See the [LICENSE](LICENSE) file for more info.
