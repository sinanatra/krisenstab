import { json } from "@sveltejs/kit";
import { PRIVATE_GITHUB_TOKEN } from "$env/static/private";

export async function GET({ params, url }) {
  const { sha } = params;
  const repo = url.searchParams.get("repo");
  const filePath = url.searchParams.get("filePath");
  if (!repo || !filePath || !sha) {
    return new Response("Bad Request", { status: 400 });
  }

  const headers = PRIVATE_GITHUB_TOKEN
    ? { Authorization: `Bearer ${PRIVATE_GITHUB_TOKEN}` }
    : {};

  const apiUrl = `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${sha}`;
  const res = await fetch(apiUrl, { headers });

  if (!res.ok) {
    return new Response("Not Found", { status: 404 });
  }
  const data = await res.json();
  return json(data);
}
