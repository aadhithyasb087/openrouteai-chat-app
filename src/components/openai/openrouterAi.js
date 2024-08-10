import OpenAI from "openai";

const apiKey = process.env.API_KEY;
// console.log(apiKey);
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:`${apiKey}`,
  // defaultHeaders: {
  //   "HTTP-Referer": $YOUR_SITE_URL, // Optional, for including your app on openrouter.ai rankings.
  //   "X-Title": $YOUR_SITE_NAME, // Optional. Shows in rankings on openrouter.ai.
  // },
  dangerouslyAllowBrowser: true,
});
export default async function main(userContent) {
  const completion = await openai.chat.completions.create({
    model: "mistralai/mistral-7b-instruct:free",
    messages: [{ role: "user", content: `${userContent}` }],
    max_tokens: 180,
  });
  var data = completion.choices[0].message;
  return data;
}
