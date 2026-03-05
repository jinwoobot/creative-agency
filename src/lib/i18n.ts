export const translations = {
  ko: {
    hero_eyebrow: '크리에이티브 혁신 그룹',
    hero_line1: 'We navigate business',
    hero_line2: '최적화(Optimizing)',
    hero_line3: 'toward the horizon.',
    hero_sub:
      'WCL은 전략, 기술, 크리에이티브를 통합하여 비즈니스의 운영 체력을 극대화하는 하이퍼-오퍼레이션 그룹입니다.',
    cta_work: 'View Work',
    cta_project: '프로젝트 시작하기',
    work_desc:
      '우리 스튜디오의 대표 작업물. 모든 프로젝트는 날카로운 질문에서 시작하여 잊을 수 없는 결과로 끝납니다.',
    about_eyebrow: '소개',
    about_title_1: 'We are',
    about_title_2: 'WCL.',
    about_sub:
      '우리는 비즈니스의 수평선을 넓히고, 그 항로 위의 모든 비효율을 최적화합니다. 막연한 확장이 아닙니다. 직접 운영하며 증명해낸 실전 데이터로, 클라이언트의 비즈니스 엔진을 최적화합니다.',
    about_quote:
      '"우리는 막연한 확장을 말하지 않습니다. AI를 활용해 복잡한 운영 프로세스를 자동화하고, 조직 전체의 지능을 한 단계 격상시킵니다."',
    about_quote_attr: 'Jinwoo Choi — Executive Creative Director',
    contact_eyebrow: '문의하기',
    contact_title_1: 'Start a',
    contact_title_2: 'project.',
    contact_sub: '어떤 프로젝트를 구상 중이신지 알려주세요. 24시간 내에 회신드립니다.',
    form_name: '성함',
    form_email: '이메일 주소',
    form_company: '회사명 (선택)',
    form_message: '프로젝트에 대해 말씀해 주세요',
    form_submit: '메시지 보내기 →',
    form_success_title: '메시지가 전달되었습니다.',
    form_success_sub: '24시간 내에 연락드리겠습니다.',
    form_success_back: '다시 보내기 →',
  },
  en: {
    hero_eyebrow: 'Creative Innovation Group',
    hero_line1: 'We navigate business',
    hero_line2: 'toward the horizon.',
    hero_line3: '',
    hero_sub:
      'WCL is a hyper-operation group that maximizes business operational capacity by integrating strategy, technology, and creativity.',
    cta_work: 'View Work',
    cta_project: 'Start a Project',
    work_desc:
      'A selection of work from our studio. Every project starts with a sharp question and ends with something unforgettable.',
    about_eyebrow: 'About',
    about_title_1: 'We are',
    about_title_2: 'WCL.',
    about_sub:
      'We chart the horizon of business, optimizing every inefficiency on the route. Not vague expansion — we optimize your business engine based on real operational data we\'ve proven ourselves.',
    about_quote:
      '"We don\'t talk about vague expansion. We automate complex operational processes with AI, and elevate the intelligence of the entire organization."',
    about_quote_attr: 'Jinwoo Choi — Executive Creative Director',
    contact_eyebrow: 'Get In Touch',
    contact_title_1: 'Start a',
    contact_title_2: 'project.',
    contact_sub: 'Tell us about your project. We respond to every inquiry within 24 hours.',
    form_name: 'Your Name',
    form_email: 'Email Address',
    form_company: 'Company (optional)',
    form_message: 'Tell us about your project',
    form_submit: 'Send Message →',
    form_success_title: 'Message received.',
    form_success_sub: "We'll be in touch within 24 hours.",
    form_success_back: 'Send another →',
  },
} as const

export type TranslationKey = keyof typeof translations.en
