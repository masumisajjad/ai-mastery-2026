import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 200,
  messages: [
    { role: "user", content: "Explain an API in one sentence." },
  ],
});

console.log("Answer:", response.content[0].text);
console.log("Usage:", response.usage);
