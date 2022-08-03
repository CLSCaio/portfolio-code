import { medias } from "../../Global"

export const properties = {
  styles: {
    'width': '95%',
    'gap': '40px',
    'padding': '30px',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
  },

  media: {
    query: medias.small,
    styles: {
      'flex-direction': 'row',
      'align-items': 'flex-start',
      'justify-content': 'flex-start',
    }
  },
}