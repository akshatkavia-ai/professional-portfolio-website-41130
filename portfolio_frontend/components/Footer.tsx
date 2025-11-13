import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="container max-w-6xl py-8 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
        <p className="text-gray-500">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
};
