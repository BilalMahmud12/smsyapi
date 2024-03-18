import React from "react"
import ProjectsPage from "../components/pages/projects";

export const metadata = {
  title: "Projelerimiz - SMS Yapı Grup",
  description: "Geleceğinizi Şekillendiriyoruz - Kaliteli ve Güvenilir İnşaat Çözümleri."
}

export default function Projelerimiz() {
  return (
    <React.Fragment>
     <ProjectsPage />
    </React.Fragment>
  );
}
