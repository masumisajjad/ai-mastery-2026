const res = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": process.env.ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
    "content-type": "application/json",
  },
  body: JSON.stringify({
    model: "claude-haiku-4-5",
    max_tokens: 200,
    messages: [{ role: "user", content: "Explain an API in one sentence." }],
  }),
});

console.log("Status:", res.status);
console.log("Requests left:", res.headers.get("anthropic-ratelimit-requests-remaining"));
console.log("Tokens left:", res.headers.get("anthropic-ratelimit-tokens-remaining"));

const data = await res.json();
console.log("Answer:", data.content?.[0]?.text);
console.log("Usage:", data.usage);
