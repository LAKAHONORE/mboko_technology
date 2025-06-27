export default function Loader() {
    return (
        <div className="flex h-[100dvh] w-full justify-center items-center bg-colorWhite dark:bg-colorDark">
            <div className="hidden dark:flex">
                <img src="/assets/logo.webp" className="w-60 animate-pulse" alt="" />
            </div>

            <div className="dark:hidden flex">
                <img src="/assets/logo-white.webp" className="w-60 animate-pulse" alt="" />
            </div>
        </div>
    )
}