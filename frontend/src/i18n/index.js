import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    nav: {
      team: '团队介绍',
      research: '科研方向',
      recruit: '招生信息',
      contact: '联系我们'
    },
    home: {
      title: 'AI智算与数据科学学科团队',
      subtitle: '驱动智能未来，赋能数据创新，共建产研高地。',
      projectsTitle: '项目成果展示',
      project1: '高性能计算平台',
      project2: '大数据智能分析',
      project3: '行业应用与转化',
      btnBrowse: '浏览项目库',
      btnCooperate: '寻求合作'
    },
    team: {
      title: '团队介绍',
      intro: '我们是一支专注于人工智能与数据科学研究的创新团队',
      memberTitle: '核心成员',
      achievementTitle: '团队成就'
    },
    research: {
      title: '科研方向',
      subtitle: '聚焦前沿技术，推动学科发展',
      direction1: '机器学习与深度学习',
      direction2: '大数据分析与挖掘',
      direction3: '计算机视觉',
      direction4: '自然语言处理'
    },
    recruit: {
      title: '招生信息',
      subtitle: '欢迎优秀学子加入我们的团队',
      master: '硕士研究生',
      phd: '博士研究生',
      postdoc: '博士后',
      requirements: '招生要求',
      contact: '联系方式'
    },
    contact: {
      title: '联系我们',
      subtitle: '期待与您的交流合作',
      address: '地址',
      email: '邮箱',
      phone: '电话',
      form: '留言表单'
    }
  },
  en: {
    nav: {
      team: 'Team',
      research: 'Research',
      recruit: 'Recruitment',
      contact: 'Contact'
    },
    home: {
      title: 'AI Computing & Data Science Team',
      subtitle: 'Driving intelligent future, empowering data innovation, building industry-research highland.',
      projectsTitle: 'Project Achievements',
      project1: 'High-Performance Computing Platform',
      project2: 'Big Data Intelligence Analysis',
      project3: 'Industry Application & Transformation',
      btnBrowse: 'Browse Projects',
      btnCooperate: 'Seek Cooperation'
    },
    team: {
      title: 'Team Introduction',
      intro: 'We are an innovative team focused on AI and data science research',
      memberTitle: 'Core Members',
      achievementTitle: 'Team Achievements'
    },
    research: {
      title: 'Research Directions',
      subtitle: 'Focus on cutting-edge technology, promote discipline development',
      direction1: 'Machine Learning & Deep Learning',
      direction2: 'Big Data Analysis & Mining',
      direction3: 'Computer Vision',
      direction4: 'Natural Language Processing'
    },
    recruit: {
      title: 'Recruitment Information',
      subtitle: 'Welcome outstanding students to join our team',
      master: 'Master Students',
      phd: 'PhD Students',
      postdoc: 'Postdoctoral',
      requirements: 'Requirements',
      contact: 'Contact Information'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Looking forward to communication and cooperation',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      form: 'Message Form'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages
})

export default i18n
