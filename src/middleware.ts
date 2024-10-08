import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(
      new URL('/van-arsdel?active=home', request.url)
    );
  }
}

export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};
