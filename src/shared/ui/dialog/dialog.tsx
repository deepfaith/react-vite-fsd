import IconCross from '@/pages/layouts/main/ui/header/icons/IconCross.tsx'
import { Dialog } from '@headlessui/react'
import React, { FC, ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<any>>
}
export const DialogComponent: FC<Props> = ({
  title,
  children,
  isOpen,
  setIsOpen,
}) => {
  const closeDialog = () => setIsOpen(false)

  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 " />
      <div className="flex justify-center items-center fixed inset-0 ">
        <div className="bg-white p-4 rounded shadow-md max-w-sm w-full dark:bg-gray-800">
          <Dialog.Title className="text-lg font-bold mb-4   flex gap-4 border-b border-b-gray-500 ">
            <span className="grow text-gray-600 transition-all duration-1000 dark:text-white">
              {title}
            </span>
            <button className="flex-none " onClick={closeDialog}>
              <IconCross />
            </button>
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-700 mb-4 dark:text-white">
            {children}
          </Dialog.Description>
        </div>
      </div>
    </Dialog>
  )
}
