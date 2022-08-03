import { medias } from "../../../../Global";

export const properties = {
  styles: {
    'flex-direction': 'column',
    'margin-left': '70px',
    'gap': '30px',
    'margin-top': '30px',
  },

  media: {
    query: medias.small,
    styles: {
      'align-items': 'center',
      'justify-content': 'center',
      'flex-direction': 'row',
      'max-width': '75%',
      'margin-left': '0',
      'margin-top': '0',
    },
  }
}