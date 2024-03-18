import React from 'react';
import { projects } from '@/app/content/projects';
import PageSubHeader from '@/app/components/core/PageSubHeader';
import SingleProjectPage from '@/app/components/pages/projects/src/singleProjectPage';

export async function generateMetadata({ params }, parent) {
  const targetProject = projects.find(project => project.slug === params.slug);

  return {
    title: `${targetProject.title} - SMS Yapı Grup`,
    description: targetProject.shortDescription,
  }
}

export default function singleProject({ params }) {
    const targetProject = projects.find(project => project.slug === params.slug);

    console.log(targetProject);
    return (
        <React.Fragment>
            {targetProject && (
                <>
                    <PageSubHeader 
                        title={targetProject.title}
                        description={targetProject?.shortDescription}
                        image={targetProject.image}
                    />

                    <SingleProjectPage project={targetProject} />
                </>
            )}
        </React.Fragment>
    );
}