<template>
  <section class="hero">
    <div class="tech-bg"></div>
    <div class="container">
      <h1 class="main-title">{{ t('home.title') }}</h1>
      <p class="subtitle">{{ t('home.subtitle') }}</p>
      
      <div class="projects-section">
        <h2 class="section-title">{{ t('home.projectsTitle') }}</h2>
        <div class="project-cards">
          <div class="project-card">
            <div class="card-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="12" width="32" height="40" stroke="currentColor" stroke-width="2" fill="none"/>
                <line x1="20" y1="20" x2="44" y2="20" stroke="currentColor" stroke-width="2"/>
                <line x1="20" y1="28" x2="44" y2="28" stroke="currentColor" stroke-width="2"/>
                <line x1="20" y1="36" x2="44" y2="36" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>{{ t('home.project1') }}</h3>
          </div>
          
          <div class="project-card">
            <div class="card-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="20" width="40" height="28" stroke="currentColor" stroke-width="2" fill="none"/>
                <circle cx="24" cy="32" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
                <polyline points="32,38 40,28 48,34" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <h3>{{ t('home.project2') }}</h3>
          </div>
          
          <div class="project-card">
            <div class="card-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="24" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M20 40 L32 32 L44 40" stroke="currentColor" stroke-width="2" fill="none"/>
                <rect x="16" y="40" width="32" height="12" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <h3>{{ t('home.project3') }}</h3>
          </div>
        </div>
        
        <div class="action-buttons">
          <button class="btn-outline">{{ t('home.btnBrowse') }}</button>
          <button class="btn-primary">{{ t('home.btnCooperate') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: #0a192f;
  color: white;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
}

.tech-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

.tech-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 153, 255, 0.1) 0%, transparent 70%);
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, #fff 0%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5rem;
  letter-spacing: 0.1em;
}

.projects-section {
  margin-top: 6rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.9);
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 3rem 2rem;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
}

.project-card:hover::before {
  opacity: 1;
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  color: #00d4ff;
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5));
}

.card-icon svg {
  width: 100%;
  height: 100%;
}

.project-card h3 {
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 1;
}

.action-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 4rem;
}

.btn-outline,
.btn-primary {
  padding: 1rem 3rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  font-weight: 400;
}

.btn-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.9);
}

.btn-outline:hover {
  border-color: #00d4ff;
  color: #00d4ff;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}

.btn-primary {
  background: linear-gradient(135deg, #00d4ff, #0099ff);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }
  
  .project-cards {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
