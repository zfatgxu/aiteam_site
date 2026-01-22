import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'AI Team Backend API';
  }

  getFeatures() {
    return [
      {
        id: 1,
        title: 'AI 智能助手',
        description: '智能分析团队数据，提供决策建议',
        icon: '🤖'
      },
      {
        id: 2,
        title: '数据可视化',
        description: '实时展示团队协作数据和项目进度',
        icon: '📊'
      },
      {
        id: 3,
        title: '安全可靠',
        description: '企业级安全保障，数据加密存储',
        icon: '🔒'
      },
      {
        id: 4,
        title: '高效协作',
        description: '多人实时协作，提升团队效率',
        icon: '⚡'
      }
    ];
  }
}
