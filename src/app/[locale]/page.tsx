import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('aka')} {' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('dev-name')}
          </span>
          <br />
          {t('lang-selection')}
        </h1>
      </section>
    </div>
  )
}
