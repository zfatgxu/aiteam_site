<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="/gxulogo.png" alt="GXU Logo" class="logo-icon" />
        <span>{{ locale === 'zh' ? '广西大学人工智能学院' : 'School of Artificial Intelligence, Guangxi University' }}</span>
      </router-link>
      <nav class="nav">
        <router-link to="/team">{{ t('nav.team') }}</router-link>
        <router-link to="/research">{{ t('nav.research') }}</router-link>
        <router-link to="/recruit">{{ t('nav.recruit') }}</router-link>
        <router-link to="/contact">{{ t('nav.contact') }}</router-link>
      </nav>
      <button class="lang-btn" @click="toggleLanguage">
        {{ locale === 'zh' ? 'EN' : '中文' }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<style scoped>
.header {
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
}

.logo-icon {
  height: 48px;
  width: auto;
  object-fit: contain;
}

.nav {
  display: flex;
  gap: 3rem;
  flex: 1;
  justify-content: center;
}

.nav a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  transition: color 0.3s;
  position: relative;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #00d4ff;
  transition: width 0.3s;
}

.nav a:hover {
  color: #00d4ff;
}

.nav a:hover::after {
  width: 100%;
}

.lang-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.lang-btn:hover {
  border-color: #00d4ff;
  color: #00d4ff;
  background: rgba(0, 212, 255, 0.1);
}

.nav a.router-link-active {
  color: #00d4ff;
}

.nav a.router-link-active::after {
  width: 100%;
}
</style>
