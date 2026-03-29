"use client"
import { Link } from "@/src/i18n/routing"
import { useTranslations } from "next-intl"
import { FC } from "react"
import GithubIcon from "../../icons/github"
import LangSwitcher from "./LangSwitcher"
import ThemeSwitch from "./ThemeSwitch"


interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations("")
  return (
    <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-row items-center justify-between p-5">
      <Link lang={locale} href="/">
        <div className="flex flex-row items-center">
          <h1 className="text-7xl font-extrabold leading-tight">
            <span className="bg-span-bg bg-clip-text text-transparent">
              {t("header-nickname-title")}
            </span>
          </h1>
        </div>
      </Link>
      <div className="flex flex-row items-center gap-3">
        <nav className="mr-10 inline-flex gap-5">
          <Link lang={locale} href={`/about`}>
            {t("about")}
          </Link>
          <a href="">{t("support")}</a>
          <a href="">{t("other")}</a>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href="https://github.com/jayad23"
          target="_blank"
        >
          <div style={{ borderRadius: "50%", overflow: "hidden" }} className="border-2 size-8 w-[38px] h-[38px] bg-span-bg flex items-center justify-center">
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
