import { useTranslations } from "next-intl"
import Button from "./components/Button"

export default function DashboardPage() {
  const t = useTranslations("")
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-24">
        <div className="text-center font-extrabold leading-tight">
          <h1 className="text-7xl bg-span-bg bg-clip-text text-transparent">
            {t("dev-name")}
          </h1>
          <div className="text-center text-3xl mt-4">
            {t("prof-description-short")}
          </div>
        </div>
      </section>
    </div>
  )
}
