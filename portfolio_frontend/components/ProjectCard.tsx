import Image from "next/image";
import React from "react";
import { Project } from "@/data/projects";
import { Button } from "./Button";

type Props = { project: Project };

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="rounded-2xl bg-surface border border-white/5 overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={`${project.title} thumbnail`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-black/40 border border-white/10 text-gray-200 px-2 py-1 rounded-lg"
              aria-label={`Tech: ${t}`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" aria-label={`Open demo for ${project.title}`}>Demo</Button>
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" aria-label={`View code for ${project.title}`}>Code</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
