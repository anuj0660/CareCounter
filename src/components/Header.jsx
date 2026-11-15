export default function Header({ count, onOpenCart, onOpenAdmin }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="font-head text-xl font-extrabold text-pine">CareCounter</a>
        <nav className="hidden gap-6 text-sm font-medium text-mute sm:flex">
          <a href="#shelf" className="hover:text-ink">Shop</a>
          <a href="#visit" className="hover:text-ink">Visit us</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onOpenAdmin} className="rounded-md border border-line px-3 py-2 text-sm font-semibold">Admin</button>
          <button onClick={onOpenCart} className="rounded-md bg-pine px-4 py-2 text-sm font-semibold text-onpine">Cart ({count})</button>
        </div>
      </div>
    </header>
  );
}
