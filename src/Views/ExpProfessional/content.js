const description = ['Empresa: ', 'Cargo: ', 'Tempo de serviço: '];
const activities = [
  'Desenvolvimento de Aplicação Web (React, Redux, JavaScript, HTML e CSS)',
  'Desenvolvimento de Aplicação Mobile (React Native, Redux e JavaScript)'
]

export const formations = [
  {
    description,
    title: ['Pixter', 'Desenvolvedor FrontEnd', '03/22 até o momento'],
    activities: [activities[0]],
  },
  {
    description,
    title: ['IBM', 'Desenvolvedor FrontEnd', '04/21 até 11/21'],
    activities,
  },
  {
    description,
    title: ['OSAS', 'Desenvolvedor FrontEnd', '09/20 até 03/21'],
    activities: [...activities, 'Desenvolvimento de app mobile TruckerPay com React-Native']
  },
  {
    description,
    title: ['Workana', 'Desenvolvedor FrontEnd - Freelancer', '01/20 até 09/20'],
    activities: [...activities, 'Resolução de bugs']
  },
]