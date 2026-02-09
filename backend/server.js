const http = require('http');
const { URL } = require('url');
const { fastingMethods, recipes, nearbyPlaces } = require('./data');
const { calculatePlan } = require('./calculator');

const PORT = Number(process.env.PORT || 4000);
let groceryList = [];

const send = (res, status, payload) => {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
};

const parseBody = (req) => new Promise((resolve, reject) => {
  let body = '';
  req.on('data', (chunk) => { body += chunk; });
  req.on('end', () => {
    if (!body) return resolve({});
    try {
      resolve(JSON.parse(body));
    } catch {
      reject(new Error('Invalid JSON body'));
    }
  });
  req.on('error', reject);
});

const server = http.createServer(async (req, res) => {
  if (!req.url || !req.method) {
    return send(res, 400, { error: 'Invalid request' });
  }

  if (req.method === 'OPTIONS') {
    return send(res, 204, {});
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);

  try {
    if (req.method === 'GET' && url.pathname === '/health') {
      return send(res, 200, { ok: true, service: 'commit-plus-backend' });
    }

    if (req.method === 'POST' && url.pathname === '/api/calculate') {
      const body = await parseBody(req);
      const result = calculatePlan({
        poundsToLose: body.poundsToLose,
        pace: body.pace,
        includeFoodChanges: Boolean(body.includeFoodChanges)
      });
      return send(res, 200, result);
    }

    if (req.method === 'GET' && url.pathname === '/api/fasting-methods') {
      return send(res, 200, fastingMethods);
    }

    if (req.method === 'GET' && url.pathname.startsWith('/api/fasting-methods/')) {
      const id = url.pathname.split('/').pop();
      const method = fastingMethods.find((item) => item.id === id);
      if (!method) return send(res, 404, { error: 'Fasting method not found' });
      return send(res, 200, method);
    }

    if (req.method === 'GET' && url.pathname === '/api/recipes') {
      const query = (url.searchParams.get('search') || '').toLowerCase();
      const tags = (url.searchParams.get('tags') || '')
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

      const filtered = recipes.filter((recipe) => {
        const byQuery = recipe.name.toLowerCase().includes(query);
        const byTags = tags.every((tag) => recipe.tags.includes(tag));
        return byQuery && byTags;
      });

      return send(res, 200, filtered);
    }

    if (req.method === 'GET' && url.pathname.startsWith('/api/recipes/')) {
      const id = url.pathname.split('/').pop();
      const recipe = recipes.find((item) => item.id === id);
      if (!recipe) return send(res, 404, { error: 'Recipe not found' });
      return send(res, 200, recipe);
    }

    if (req.method === 'GET' && url.pathname === '/api/grocery-list') {
      return send(res, 200, { items: groceryList });
    }

    if (req.method === 'POST' && url.pathname === '/api/grocery-list') {
      const body = await parseBody(req);
      const incoming = Array.isArray(body.items) ? body.items : [];
      groceryList = [...new Set([...groceryList, ...incoming.filter((item) => typeof item === 'string' && item.trim())])];
      return send(res, 200, { items: groceryList });
    }

    if (req.method === 'DELETE' && url.pathname === '/api/grocery-list') {
      groceryList = [];
      return send(res, 200, { items: groceryList });
    }

    if (req.method === 'GET' && url.pathname === '/api/nearby') {
      const city = (url.searchParams.get('city') || '').toLowerCase();
      const section = url.searchParams.get('section');
      const filtered = nearbyPlaces.filter((place) => {
        const cityMatch = place.city.toLowerCase().includes(city);
        const sectionMatch = section ? place.section === section : true;
        return cityMatch && sectionMatch;
      });
      return send(res, 200, filtered);
    }

    if (req.method === 'GET' && url.pathname.startsWith('/api/nearby/')) {
      const id = url.pathname.split('/')[3];
      const trailing = url.pathname.split('/')[4];
      const place = nearbyPlaces.find((item) => item.id === id);

      if (!place) return send(res, 404, { error: 'Place not found' });

      if (trailing === 'directions') {
        const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`;
        return send(res, 200, { directionsUrl });
      }

      if (!trailing) return send(res, 200, place);
    }

    return send(res, 404, { error: 'Route not found' });
  } catch (error) {
    return send(res, 400, { error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`Commit+ backend running on http://localhost:${PORT}`);
});
