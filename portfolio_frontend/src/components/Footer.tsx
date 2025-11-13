import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Footer
 * Themed site footer with simple navigation and attribution.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-16 border-t border-white/10 bg-black/60 py-10">
      <div className="container-pro flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400">&copy; {year} Ocean Professional. All rights reserved.</p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-6">
            <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
            <li><a href="#experience" className="text-gray-300 hover:text-white">Experience</a></li>
            <li><a href="#education" className="text-gray-300 hover:text-white">Education</a></li>
            <li><a href="#certificates" className="text-gray-300 hover:text-white">Certificates</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            <li><Link href="/health" className="text-gray-300 hover:text-white">Health</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
