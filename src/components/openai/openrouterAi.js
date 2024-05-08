import OpenAI from "openai";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
  // defaultHeaders: {
  //   "HTTP-Referer": $YOUR_SITE_URL, // Optional, for including your app on openrouter.ai rankings.
  //   "X-Title": $YOUR_SITE_NAME, // Optional. Shows in rankings on openrouter.ai.
  // },
  dangerouslyAllowBrowser: true,
});
export default async function main(userContent) {
  const completion = await openai.chat.completions.create({
    model: "gryphe/mythomist-7b:free",
    messages: [{ role: "user", content: `${userContent}` }],
    max_tokens: 180,
  });
  var data = completion.choices[0].message;
  return data;
}
