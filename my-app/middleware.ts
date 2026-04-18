import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // TODO: add auth / i18n middleware
  return NextResponse.next()
}
