export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#1a3e2e", color: "white" }}
      className="mt-16 py-12 text-center"
    >
      <h2 className="text-3xl font-bold mb-2">KeenKeeper</h2>
      <p className="text-sm mb-6" style={{ color: "#94a3a0" }}>
        Your personal shelf of meaningful connections. Browse, track, and nurture
        the relationships that matter most.
      </p>

      <p className="text-sm font-medium mb-4">Social Links</p>
      <div className="flex justify-center gap-3 mb-8">
        {["f", "t", "in"].map((letter) => (
          <a
            key={letter}
            href="#"
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-xs hover:bg-white hover:text-green-900 transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      <div className="border-t border-green-800 pt-6 flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto px-4 text-xs gap-2" style={{ color: "#94a3a0" }}>
        <span>© 2026 KeenKeeper. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
