import React, { useState, useMemo } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onViewAll: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject, onViewAll }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Modular', 'Bathrooms'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // For the 'All' view, we reproduce the exact 1-large-left + 2x2-right layout from the reference
  const primaryProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1, 5);

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#9E7A3E] uppercase font-sans">
            Our Projects
          </span>
        </div>

        {/* Heading + View All action */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1815] tracking-tight font-editorial">
            Spaces We've Transformed
          </h2>
          <button
            id="projects-view-all-top-btn"
            onClick={onViewAll}
            className="group hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1815] hover:text-[#9E7A3E] transition-colors cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Filter Pill Buttons matching reference */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1A1815] text-white shadow-sm'
                    : 'bg-[#EFECE5] text-[#554E46] hover:bg-[#E5DFD4] hover:text-[#1A1815]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: Exactly matching the reference layout */}
        {activeCategory === 'All' && primaryProject ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: 1 Large Featured Card (Modern Living Room) */}
            <div className="lg:col-span-6 flex">
              <div
                id={`project-card-${primaryProject.id}`}
                onClick={() => onSelectProject(primaryProject)}
                className="group relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[460px] rounded overflow-hidden shadow-md cursor-pointer bg-[#221F1C]"
              >
                <img
                  src={primaryProject.image}
                  alt={primaryProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark gradient overlay for typography clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Quick view indicator on hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-white" />
                </div>

                {/* Card Info matching reference */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white font-editorial tracking-tight mb-1">
                    {primaryProject.title}
                  </h3>
                  <p className="text-[13px] font-medium tracking-wide text-[#DFD7CB] font-sans">
                    {primaryProject.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Grid of 4 Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="group relative h-[220px] sm:h-[240px] rounded overflow-hidden shadow-md cursor-pointer bg-[#221F1C]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Quick view icon */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Card Info */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-lg sm:text-[19px] font-semibold text-white font-editorial tracking-tight mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-[12px] font-medium tracking-wide text-[#DFD7CB] font-sans">
                      {project.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Filtered Category Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group relative h-[280px] sm:h-[300px] rounded overflow-hidden shadow-md cursor-pointer bg-[#221F1C]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-semibold text-white font-editorial tracking-tight mb-0.5">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-medium tracking-wide text-[#DFD7CB] font-sans">
                      {project.category} • {project.location}
                    </p>
                    <span className="text-xs text-[#B89358] font-medium underline">
                      View details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile View All Projects Link */}
        <div className="sm:hidden mt-8 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1815] underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
