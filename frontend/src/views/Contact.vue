<template>
  <div class="page contact-page">
    <Header />
    <div class="tech-bg"></div>
    <div class="container">
      <h1 class="page-title">{{ t('contact.title') }}</h1>
      <p class="page-intro">{{ t('contact.subtitle') }}</p>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>{{ t('contact.address') }}</h3>
            <p>{{ locale === 'zh' ? '中国北京市海淀区人工大学' : 'Haidian District, Beijing, China' }}</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3>{{ t('contact.email') }}</h3>
            <p>contact@university.edu</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">📞</div>
            <h3>{{ t('contact.phone') }}</h3>
            <p>+86 10 1234 5678</p>
          </div>
        </div>
        
        <div class="contact-form">
          <h3>{{ t('contact.form') }}</h3>
          <form @submit.prevent="handleSubmit">
            <input type="text" :placeholder="locale === 'zh' ? '姓名' : 'Name'" v-model="form.name" required />
            <input type="email" :placeholder="locale === 'zh' ? '邮箱' : 'Email'" v-model="form.email" required />
            <textarea :placeholder="locale === 'zh' ? '留言内容' : 'Message'" v-model="form.message" rows="6" required></textarea>
            <button type="submit" class="btn-submit">{{ locale === 'zh' ? '发送' : 'Send' }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '../components/Header.vue'

const { t, locale } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  alert(locale.value === 'zh' ? '感谢您的留言！' : 'Thank you for your message!')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #0a192f;
  position: relative;
  overflow: hidden;
}

.tech-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-intro {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.4s;
}

.info-card:hover {
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  color: #00d4ff;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.info-card p {
  color: rgba(255, 255, 255, 0.7);
}

.contact-form {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2.5rem;
}

.contact-form h3 {
  color: #fff;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

input, textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  padding: 1rem;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #00d4ff;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.btn-submit {
  background: linear-gradient(135deg, #00d4ff, #0099ff);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
