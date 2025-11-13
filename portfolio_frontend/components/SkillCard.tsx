import React from "react";
import { Skill } from "@/data/projects";

export const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="rounded-xl bg-surface border border-white/5 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{skill.name}</p>
          <p className="text-xs text-gray-400">{skill.category}</p>
        </div>
        <p className="text-xs text-gray-400">{skill.level}%</p>
      </div>
      <div className="mt-3 h-2 bg-black/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${skill.level}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
};
