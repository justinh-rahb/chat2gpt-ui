include .env

.PHONY: all

build:
	docker build -t chat2gpt-ui .

run:
	export $(cat .env | xargs)
	docker stop chat2gpt-ui || true && docker rm chat2gpt-ui || true
	docker run --name chat2gpt-ui --rm -e OPENAI_API_KEY=${OPENAI_API_KEY} -p 3000:3000 chat2gpt-ui

logs:
	docker logs -f chat2gpt-ui

push:
	docker tag chat2gpt-ui:latest ${DOCKER_USER}/chat2gpt-ui:${DOCKER_TAG}
	docker push ${DOCKER_USER}/chat2gpt-ui:${DOCKER_TAG}