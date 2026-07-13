// Постбілд-скрипт: створює фізичні index.html для всіх SPA-роутів,
// щоб прямі посилання працювали на будь-якому статичному хостингу
// (mirohost віддає статику через nginx і ігнорує .htaccess).
import { readFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");

if (!existsSync(indexHtml)) {
  console.error("dist/index.html не знайдено — спочатку зробіть vite build");
  process.exit(1);
}

// Витягуємо всі slug з src/data/wardrobes.ts
const data = readFileSync(join(root, "src/data/wardrobes.ts"), "utf8");
const slugs = [...data.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

let count = 0;
for (const slug of slugs) {
  const dir = join(dist, "productPage", slug);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, "index.html"));
  count++;
}
console.log(`✔ Створено ${count} fallback-сторінок у dist/productPage/`);
