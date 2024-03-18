import Kurumsal from './kurumsal.js'
import PageSubHeader from '../../core/PageSubHeader/index.js'


export default function KurumsalPage() {
    const pageTitle = "Kurumsal"
    const pageDescription = "Geleceğinizi Şekillendiriyoruz - Kaliteli ve Güvenilir İnşaat Çözümleri."

    return (
        <main id='kurumsal' className="">
            <PageSubHeader 
                title={pageTitle}
                description={pageDescription}
                image="/images/hero.webp"
            />
            <Kurumsal />
        </main>
    )
}