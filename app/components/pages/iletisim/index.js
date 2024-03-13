import Iletisim from './iletisim.js'
import PageSubHeader from '../../core/PageSubHeader/index.js'

export default function IletisimPage() {
        const pageTitle = "Iletişim"
        const pageDescription = "Geleceğinizi Şekillendiriyoruz - Kaliteli ve Güvenilir İnşaat Çözümleri."
    
        return (
            <main id='iletisim' className="">
                <PageSubHeader 
                    title={pageTitle}
                    description={pageDescription}
                    image='/images/contact-us-banner.jpg'
                />
                <Iletisim />
            </main>
        )
    }
    