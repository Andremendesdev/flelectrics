import Logo from "@/components/Logo";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background"
      aria-live="polite"
      aria-busy="true"
      aria-label="Carregando"
    >
      <Logo className="h-10 w-auto opacity-90" />
      <div className="w-40 h-[2px] rounded-full bg-blue-600/20 overflow-hidden">
        <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-sky-400 to-blue-600 animate-pulse" />
      </div>
    </div>
  );
}
