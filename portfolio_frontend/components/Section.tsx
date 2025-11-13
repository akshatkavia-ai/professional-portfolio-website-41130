import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="section scroll-mt-24">
      <div className="container max-w-6xl">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
