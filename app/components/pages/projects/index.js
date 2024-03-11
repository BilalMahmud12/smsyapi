import Projects from './src/projects.js'
import PageSubHeader from '../../core/PageSubHeader/index.js'

export default function ProjectsPage() {
    const pageTitle = "Projelerimiz"
    const pageDescription = "Geleceğinizi Şekillendiriyoruz - Kaliteli ve Güvenilir İnşaat Çözümleri."

    return (
        <main id='projects' className="">
            <PageSubHeader 
                title={pageTitle}
                description={pageDescription}
            />
            <Projects />
        </main>
    )
}
