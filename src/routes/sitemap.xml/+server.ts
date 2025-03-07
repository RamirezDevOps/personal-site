const site = 'https://aramirez.dev';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const pages = getPages();
	const body = generateSitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

// Get all pages dynamically
const getPages = () => {
	const pageFiles = import.meta.glob('/src/routes/**/*.svelte', { eager: true });
	return Object.keys(pageFiles).map((file) =>
		file.replace('/src/routes/', '').replace('/+page.svelte', '')
	);
};

const generateSitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${pages
	.map(
		(page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  `
	)
	.join('')}
</urlset>`;