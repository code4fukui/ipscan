import { fetchWithTimeout } from "./fetchWithTimeout.js";

const timeout = 300;
const port = Deno.args[0] || 80;
const ip3 = Deno.args[1] || 1;
const n = 255;

const ps = [];
for (let i = 1; i < n; i++) {
  const ip = `192.168.${ip3}.${i}`;
  const url = "http://" + ip + ":" + port + "/";
  const res = fetchWithTimeout(url, { timeout });
  ps.push(res);
}
const res = await Promise.allSettled(ps);
console.log(res.filter(i => i.status == "fulfilled").map(i => i.value.url));
