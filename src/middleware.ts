import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: ['/'],
}

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('user')
  
  if (!Boolean(cookie) && request.url !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (Boolean(cookie) && request.url === '/login') {
    return NextResponse.redirect(new URL('/'));
  } else {
    return NextResponse.next();
  }
}