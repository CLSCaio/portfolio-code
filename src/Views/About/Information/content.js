import * as A from '../../../Assets';

export const curriculo = 'https://www.canva.com/design/DAFIImIDL7M/lTIRXA1Q9pD3hgKTzl_a8A/view?utm_content=DAFIImIDL7M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'

export const properties = {
  styles: {
    width: '95%',
    gap: '10px',
    'flex-direction': 'column',
  },
}

export const links = [
  {
    link: 'https://www.linkedin.com/in/caio-sousa-8a0b1a222/',
    name: 'Linkedin',
    icon: <A.Linkdin />
  },
  {
    link: 'https://github.com/CLSCaio',
    name: 'Github',
    icon: <A.Github />
  },
  {
    link: curriculo,
    name: 'Currículo',
    icon: <A.Curriculum />
  },
  {
    link: 'mailto:caiol.sousadw@gmail.com',
    name: 'E-mail',
    icon: <A.Email />
  },
  {
    link: 'https://api.whatsapp.com/send?phone=53984422684',
    name: 'Whatsapp',
    icon: <A.Whatsapp />
  }
]