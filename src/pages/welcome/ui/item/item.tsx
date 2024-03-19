import { IntraDayData } from '@/entities/intraday/api'
import IconCheck from '@/pages/layouts/main/ui/header/icons/IconCheck.tsx'
import IconCross from '@/pages/layouts/main/ui/header/icons/IconCross.tsx'
import IconEye from '@/pages/layouts/main/ui/header/icons/IconEye.tsx'
import React from 'react'
import styles from './styles.module.css'

export const Item = React.forwardRef<any, any>(
  (
    { item, removeItem, updateItem, setIsOpen, setSelectedItem, ...props },
    ref,
  ) => {
    const { datetime, completed } = item as IntraDayData

    return (
      <article
        {...props}
        ref={ref}
        className="flex gap-4 border-b border-b-gray-400 "
      >
        <button
          className={`${
            styles.borderitem
          } h-5 w-5 flex-none rounded-full dark:${styles.borderdark}  ${
            completed
              ? 'grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
              : 'inline-block'
          } `}
          onClick={() => updateItem(datetime)}
        >
          {completed && <IconCheck />}
        </button>
        <p
          className={`grow text-gray-600 transition-all duration-1000 dark:text-gray-400 ${
            completed && 'line-through'
          }`}
        >
          {datetime}
        </p>
        <button className="flex-none" onClick={() => removeItem(datetime)}>
          <IconCross />
        </button>
        <button
          className="flex-none"
          onClick={() => {
            setIsOpen(true)
            setSelectedItem(item)
          }}
        >
          <IconEye />
        </button>
      </article>
    )
  },
)
