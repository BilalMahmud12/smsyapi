import React from "react"
import HomePage from "./components/pages/homepage"

export const metadata = {
  title: "Ana Sayfa - SMS Yapı Grup",
  description: "Geleceğinizi Şekillendiriyoruz - Kaliteli ve Güvenilir İnşaat Çözümleri."
}

export default function Home() {
  return (
    <React.Fragment>
      <HomePage />
    </React.Fragment>
  );
}
