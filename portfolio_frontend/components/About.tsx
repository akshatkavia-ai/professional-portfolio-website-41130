import React from "react";

export const About: React.FC = () => {
  const highlights = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects", value: "30+" },
    { label: "Clients", value: "12+" }
  ];
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="rounded-2xl bg-surface p-8 border border-white/5">
        <div className="aspect-square rounded-xl bg-gradient-to-br from-orange-500/20 to-black border border-white/5" aria-hidden />
        <p className="mt-4 text-sm text-gray-400">Avatar placeholder.</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">About Me</h3>
        <p className="mt-3 text-gray-300">
          I'm a frontend engineer focused on crafting accessible, high-performance web apps.
          I enjoy building clean UIs, scalable design systems, and smooth user experiences.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-xl bg-black/40 border border-white/10 p-4 text-center">
              <p className="text-2xl font-extrabold text-primary">{h.value}</p>
              <p className="text-xs text-gray-400">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
