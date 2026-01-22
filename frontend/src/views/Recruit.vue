<template>
  <div class="page recruit-page">
    <Header />
    <div class="tech-bg"></div>
    <div class="container">
      <h1 class="page-title">{{ t('recruit.title') }}</h1>
      <p class="page-intro">{{ t('recruit.subtitle') }}</p>
      
      <div class="recruit-grid">
        <div v-for="position in positions" :key="position.id" class="recruit-card">
          <div class="card-header">
            <div class="icon">{{ position.icon }}</div>
            <h3>{{ position.title }}</h3>
          </div>
          <div class="card-body">
            <div class="info-section">
              <h4>{{ t('recruit.requirements') }}</h4>
              <ul>
                <li v-for="(req, index) in position.requirements" :key="index">{{ req }}</li>
              </ul>
            </div>
            <div class="info-section">
              <h4>{{ t('recruit.contact') }}</h4>
              <p>{{ position.contact }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '../components/Header.vue'

const { t, locale } = useI18n()

const positions = computed(() => [
  {
    id: 1,
    icon: '🎓',
    title: t('recruit.master'),
    requirements: locale.value === 'zh'
      ? ['本科成绩优秀，GPA 3.5以上', '具有计算机、数学等相关专业背景', '对AI和数据科学有浓厚兴趣', '具备良好的编程能力']
      : ['Excellent undergraduate grades, GPA 3.5+', 'Computer Science or Math background', 'Strong interest in AI and Data Science', 'Good programming skills'],
    contact: 'master@university.edu'
  },
  {
    id: 2,
    icon: '🔬',
    title: t('recruit.phd'),
    requirements: locale.value === 'zh'
      ? ['硕士学位，发表过高水平论文', '具有独立科研能力', '熟悉深度学习框架', '英语水平良好']
      : ['Master degree with publications', 'Independent research ability', 'Familiar with deep learning frameworks', 'Good English proficiency'],
    contact: 'phd@university.edu'
  },
  {
    id: 3,
    icon: '👨‍🔬',
    title: t('recruit.postdoc'),
    requirements: locale.value === 'zh'
      ? ['博士学位，研究方向匹配', '在顶级会议/期刊发表论文', '具有项目管理经验', '能够独立开展研究工作']
      : ['PhD degree in related field', 'Publications in top conferences/journals', 'Project management experience', 'Ability to conduct independent research'],
    contact: 'postdoc@university.edu'
  }
])
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
  color: #fff;
}

.page-intro {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4rem;
}

.recruit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.recruit-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s;
}

.recruit-card:hover {
  transform: translateY(-10px);
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
}

.card-header {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 255, 0.1));
  padding: 2rem;
  text-align: center;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-header h3 {
  font-size: 1.5rem;
  color: #fff;
}

.card-body {
  padding: 2rem;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section:last-child {
  margin-bottom: 0;
}

.info-section h4 {
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.info-section ul {
  list-style: none;
  padding: 0;
}

.info-section li {
  color: rgba(255, 255, 255, 0.7);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.info-section li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #00d4ff;
}

.info-section p {
  color: rgba(255, 255, 255, 0.7);
  word-break: break-all;
}
</style>
