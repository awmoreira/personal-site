import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
const port = 3031;
const origin = process.env.BASE_URL || `http://127.0.0.1:${port}`;
const server = process.env.BASE_URL ? null : spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], { stdio: 'ignore' });
try {
 let ready = false;
 for(let i=0;i<60;i++) { try { ready = (await fetch(`${origin}/en`)).ok; } catch {} if(ready)break; await delay(250); }
 assert(ready, 'Production build server starts');
 const root = await fetch(origin, { redirect: 'manual', headers: { 'accept-language': 'pt-BR' } });
 assert.equal(root.status, 308); assert.equal(new URL(root.headers.get('location'), origin).pathname, '/en');
 for(const lang of ['en','pt']) {
  const response = await fetch(`${origin}/${lang}`); assert.equal(response.status,200);
  const html = await response.text();
  assert(html.includes(`lang="${lang==='pt'?'pt-BR':'en'}"`));
  assert.equal((html.match(/<h1\b/g)||[]).length,1);
  for(const id of ['about','trajectory','work','access','gavea','leadup','cefet','contact']) assert(html.includes(`id="${id}"`), `Missing ${id}`);
  assert.equal((html.match(/<details\b/g)||[]).length,3);
  assert(html.includes('mailto:awmoreira@gmail.com'));
  assert(html.includes(`https://personal-site-six-sandy.vercel.app/${lang}`));
  assert(html.includes('application/ld+json'));
  assert(html.indexOf('id="access"')<html.indexOf('id="gavea"'));
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ');
  assert(!/20\+|40%|Principal Frontend Engineer|Calendly/.test(visible));
  const pdf = await fetch(`${origin}/resume/allan-winckler-${lang}.pdf`); assert.equal(pdf.status,200); assert((await pdf.text()).startsWith('%PDF-'));
  const og = await fetch(`${origin}/og-${lang}.png`); assert.equal(og.status,200); assert.equal(Buffer.from(await og.arrayBuffer()).subarray(1,4).toString(),'PNG');
 }
 assert.equal((await fetch(`${origin}/fr`)).status,404);
 assert.equal((await fetch(`${origin}/en/missing`)).status,404);
 assert((await (await fetch(`${origin}/sitemap.xml`)).text()).includes('/pt'));
 console.log('PASS: default language, static EN/PT content, anchors, metadata, factual regressions, PDFs, OG images and 404s.');
} finally { server?.kill('SIGTERM'); }
