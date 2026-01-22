<template>
  <div class="page team-page">
    <Header />
    <div class="tech-bg"></div>
    <div class="container">
      <h1 class="page-title">{{ t('team.title') }}</h1>
      <p class="page-intro">{{ t('team.intro') }}</p>
      
      <section class="members-section">
        <h2 class="section-title">{{ t('team.memberTitle') }}</h2>
        <div class="members-grid">
          <div v-for="member in members" :key="member.id" class="member-card">
            <div class="member-avatar">{{ member.avatar }}</div>
            <h3>{{ member.name }}</h3>
            <p class="position">{{ member.position }}</p>
            <p class="description">{{ member.description }}</p>
          </div>
        </div>
      </section>
      
      <section class="achievements-section">
        <h2 class="section-title">{{ t('team.achievementTitle') }}</h2>
        <div class="achievements-grid">
          <div v-for="achievement in achievements" :key="achievement.id" class="achievement-card">
            <div class="number">{{ achievement.number }}</div>
            <div class="label">{{ achievement.label }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '../components/Header.vue'

const { t } = useI18n()

const members = ref([
  {
    id: 1,
    avatar: '👨‍🏫',
    name: '张教授',
    position: '团队负责人',
    description: '人工智能领域专家，发表SCI论文50余篇'
  },
  {
    id: 2,
    avatar: '👩‍🔬',
    name: '李研究员',
    position: '副教授',
    description: '数据科学方向，主持国家级项目3项'
  },
  {
    id: 3,
    avatar: '👨‍💻',
    name: '王博士',
    position: '讲师',
    description: '机器学习算法研究，获省级科技奖励'
  },
  {
    id: 4,
    avatar: '👩‍💼',
    name: '刘工程师',
    position: '高级工程师',
    description: '工程实践经验丰富，负责项目落地'
  }
])

const achievements = ref([
  { id: 1, number: '50+', label: 'SCI论文' },
  { id: 2, number: '20+', label: '专利授权' },
  { id: 3, number: '10+', label: '科研项目' },
  { id: 4, number: '100+', label: '培养学生' }
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

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
}

.members-section {
  margin-bottom: 6rem;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.member-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s;
}

.member-card:hover {
  transform: translateY(-10px);
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
}

.member-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.member-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.position {
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.description {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s;
}

.achievement-card:hover {
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
}

.number {
  font-size: 3rem;
  font-weight: bold;
  color: #00d4ff;
  margin-bottom: 0.5rem;
}

.label {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>
