import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import {routing} from './i18n/routing';

type CustomMiddleware = (req: NextRequest) => Promise<NextRequest>

const customMiddleware: CustomMiddleware = async req => {
  return req
}

const intlMiddleware = createMiddleware(routing)

export default async function middleware(
  req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
  await customMiddleware(req)
  return intlMiddleware(req)
}

export const config = {
  matcher: ["/", "/(fr|en|ja|de|ru|es|fa|ar)/:path*"]
}
