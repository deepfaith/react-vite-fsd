import {Header} from "@/pages/layouts/main/ui/header";
import {FC, ReactNode} from "react";

interface Props {
    title: string
    children: ReactNode
}

export const MainLayout: FC<Props> = ({ title, children }) => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header title={title} />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                {children}
            </main>

            <footer className="mt-8 text-center dark:text-gray-400">
                Drag and drop to reorder list
            </footer>
        </div>
    )
}
