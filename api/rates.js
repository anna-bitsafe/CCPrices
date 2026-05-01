js
export default async function handler(req, res) {
  const { start, end } = req.query;
  const r = await fetch(`https://api.frankfurter.dev/v1/${start}..${end}?from=USD&to=EUR,GBP`);
  const data = await r.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data);
}
