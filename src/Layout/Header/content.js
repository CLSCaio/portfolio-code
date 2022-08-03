import { medias } from "../../Global";

export const properties = {
  styles: {
    'flex-direction': 'column',
    'margin-left': '20px',
  },

  media: {
    query: medias.small,
    styles: {
    'align-items': 'center',
    'justify-content': 'center',
    'flex-direction': 'row',
    'gap': '30px',
    'max-width': '75%',
    },
  }
}