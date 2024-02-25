import Galeri from './galeri.js'
import PageSubHeader from '../../core/PageSubHeader/index.js'

export default function GaleriPage() {
    return (
        <main id='galeri' className="">
            <PageSubHeader 
                title="Galeri"
                description="Geleceğinizi Şekillendiriyoruz - Kaliteli ve Güvenilir İnşaat Çözümleri."
            />
            <Galeri />
        </main>
    )
}
