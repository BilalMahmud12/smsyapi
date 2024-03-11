import React from 'react';
import { projects } from '@/app/content/projects';
import PageSubHeader from '@/app/components/core/PageSubHeader';

export default function singleProject({ params }) {
    const targetProject = projects.find(project => project.slug === params.slug);

    console.log(targetProject);
    return (
        <React.Fragment>
            {targetProject && (
                <PageSubHeader 
                    title={targetProject.title}
                    description={targetProject?.description}
                    image={targetProject.image}
                />
            )}
        </React.Fragment>
    );
}