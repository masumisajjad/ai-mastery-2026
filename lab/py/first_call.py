from dotenv import load_dotenv
from anthropic import Anthropic

load_dotenv("../.env")
client = Anthropic()

messages = [{"role": "user", "content": "Explain an API in one sentence."}]

response = client.messages.create(
    model="claude-haiku-4-5",
    max_tokens=200,
    messages=messages,
)

print("Answer:", response.content[0].text)
print("Usage:", response.usage)
