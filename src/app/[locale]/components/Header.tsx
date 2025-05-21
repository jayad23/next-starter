'use client'
import { Link } from '@/src/i18n/routing'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image';
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-(--breakpoint-2xl) flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo-bg-off.svg`} alt='logo' width={56} height={56} />
          </div>
          <strong className='mx-2 select-none'>Alfred MG</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('about')}
          </Link>
          <a href=''>{t('support')}</a>
          <a href=''>{t('other')}</a>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href='https://github.com/jayad23/next-starter'
          target='_blank'
        >
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
