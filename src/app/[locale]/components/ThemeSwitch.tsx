"use client"
import { capitalize } from "@/lib/utils"
import { useTheme } from "next-themes"
import { FiSun } from "react-icons/fi"
import { useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import CustomButton from "../shared/button";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, themes, theme } = useTheme();

  const ref = useRef(null)
  useEffect(() => setMounted(true), []);
  useOnClickOutside(ref, () => setIsOpen(false));

  if (!mounted) {
    return (
      <CustomButton isOpen={isOpen} onClick={() => {}} className="w-fit">
        <FiSun />
      </CustomButton>
    )
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <CustomButton isOpen={isOpen} onClick={toggleDropdown} className="w-full">
        <FiSun />
      </CustomButton>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[95px] origin-top-right rounded-md bg-dropdown shadow-lg">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {themes.map(themeItem => {
              return (
                <button
                  key={themeItem}
                  onClick={() => {
                    setTheme(themeItem)
                    setIsOpen(false)
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdown-hover ${
                    themeItem === theme
                      ? "bg-selected text-primary hover:bg-selected"
                      : "text-secondary"
                  }`}
                >
                  {capitalize(themeItem)}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
