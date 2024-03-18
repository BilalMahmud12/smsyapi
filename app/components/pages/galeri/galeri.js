import Link from "next/link"
import Image from "next/image"
import PhotoAlbum from "react-photo-album"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Spotlight from "./spotlight";
const photos = [
    {
        src: "/images/projects/bogaz-koprusu-rezidanslari/bogaz-koprusu-rezidanslari.webp",
        width: 1080,
        height: 1080
    },
    {
        src: "/images/projects/yesilvadi-konutlari/yesilvadi-konutlari.webp",
        width: 1080,
        height: 1080
    },
    {
        src: "/images/projects/mavi-kule-is-merkezi/mavi-kule-is-merkezi.webp",
        width: 1080,
        height: 1080
    },
    {
        src: "/images/projects/sahil-yolu-villalari/sahil-yolu-villalari.webp",
        width: 1080,
        height: 1080
    },
    {
        src: "/images/projects/gokyuzu-kuleleri/gokyuzu-kuleleri.webp",
        width: 1080,
        height: 1080
    },
    {
        src: "/images/projects/prestij-plaza/prestij-plaza.webp",
        width: 1080,
        height: 1080
    },
    {
        src: "/images/projects/beyaz-bahce-evleri/beyaz-bahce-evleri.webp",
        width: 1080,
        height: 1080
    },
    {
        src: "/images/projects/teknopark-ofisleri/teknopark-ofisleri.webp",
        width: 1080,
        height: 1080
    }
]
    
export default function GaleriPage() {
    return(
        <section id="galeri" className="py-12 bg-gray-100">
            <div className="app-container">
                <Spotlight photos={photos} />
            </div>
        </section>
    )
}