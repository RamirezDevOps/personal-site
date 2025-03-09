import { redirect } from '@sveltejs/kit';

export function GET() {
    throw redirect(302, '/cornell/info1300/project1/index.html');
}