<template>
  <div class="page research-page">
    <Header />
    <div class="tech-bg"></div>
    <div class="container">
      <h1 class="page-title">{{ t('research.title') }}</h1>
      <p class="page-intro">{{ t('research.subtitle') }}</p>
      
      <div class="research-grid">
        <div v-for="direction in directions" :key="direction.id" class="research-card">
          <div class="card-icon">{{ direction.icon }}</div>
          <h3>{{ direction.title }}</h3>
          <p>{{ direction.description }}</p>
          <ul class="topics">
            <li v-for="(topic, index) in direction.topics" :key="index">{{ topic }}</li>
          </ul>
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

const directions = computed(() => [
  {
    id: 1,
    icon: '🤖',
    title: t('research.direction1'),
    description: locale.value === 'zh' ? '研究深度神经网络、强化学习等前沿算法' : 'Research on deep neural networks, reinforcement learning and other cutting-edge algorithms',
    topics: locale.value === 'zh' 
      ? ['卷积神经网络', '循环神经网络', '生成对抗网络', '迁移学习']
      : ['CNN', 'RNN', 'GAN', 'Transfer Learning']
  },
  {
    id: 2,
    icon: '📊',
    title: t('research.direction2'),
    description: locale.value === 'zh' ? '海量数据处理、数据挖掘与知识发现' : 'Massive data processing, data mining and knowledge discovery',
    topics: locale.value === 'zh'
      ? ['分布式计算', '数据可视化', '预测分析', '关联规则挖掘']
      : ['Distributed Computing', 'Data Visualization', 'Predictive Analytics', 'Association Rule Mining']
  },
  {
    id: 3,
    icon: '👁️',
    title: t('research.direction3'),
    description: locale.value === 'zh' ? '图像识别、目标检测、场景理解等视觉任务' : 'Image recognition, object detection, scene understanding and other visual tasks',
    topics: locale.value === 'zh'
      ? ['目标检测', '图像分割', '人脸识别', '视频分析']
      : ['Object Detection', 'Image Segmentation', 'Face Recognition', 'Video Analysis']
  },
  {
    id: 4,
    icon: '💬',
    title: t('research.direction4'),
    description: locale.value === 'zh' ? '文本分析、机器翻译、对话系统等NLP技术' : 'Text analysis, machine translation, dialogue systems and other NLP technologies',
    topics: locale.value === 'zh'
      ? ['情感分析', '命名实体识别', '文本生成', '问答系统']
      : ['Sentiment Analysis', 'NER', 'Text Generation', 'QA System']
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

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.research-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2.5rem;
  transition: all 0.4s;
}

.research-card:hover {
  transform: translateY(-10px);
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.research-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.research-card p {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.topics {
  list-style: none;
  padding: 0;
}

.topics li {
  color: rgba(255, 255, 255, 0.7);
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  position: relative;
  padding-left: 1.5rem;
}

.topics li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #00d4ff;
}

.topics li:last-child {
  border-bottom: none;
}
</style>
