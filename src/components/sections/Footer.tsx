import { Logo } from '@/components/ui/Logo'

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <Logo />
        <p className="text-white/20 text-[12px]">
          © {new Date().getFullYear()} Wegooli Creative Lab
        </p>
      </div>
    </footer>
  )
}
