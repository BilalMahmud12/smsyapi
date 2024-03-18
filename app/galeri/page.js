import React from "react"
import GaleriPage from "../components/pages/galeri";

export const metadata = {
  title: "Galeri - SMS Yapı Grup",
  description: "Geleceğinizi Şekillendiriyoruz - Kaliteli ve Güvenilir İnşaat Çözümleri."
}

export default function Galeri() {
  return (
    <React.Fragment>
      <GaleriPage />
    </React.Fragment>
  );
}
