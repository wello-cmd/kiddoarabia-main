export interface Stockist { name: string; logo: string; website?: string; }
// User-confirmed stores; logo sources recorded in public/stores/manifest.json.
export const stockists: Stockist[] = [
  {
    "name": "Carrefour Egypt",
    "logo": "/stores/carrefour.svg"
  },
  {
    "name": "Mahmoud Elfar",
    "logo": "/stores/mahmoud-elfar.svg"
  },
  {
    "name": "Hyper One",
    "logo": "/stores/hyper-one.jpg"
  },
  {
    "name": "Spinneys Egypt",
    "logo": "/stores/spinneys.webp"
  },
  {
    "name": "Fathalla",
    "logo": "/stores/fathalla.png"
  },
  {
    "name": "Zahran Market",
    "logo": "/stores/zahran.jpg"
  },
  {
    "name": "Othaim Egypt",
    "logo": "/stores/othaim.svg"
  },
  {
    "name": "El Mahalawy",
    "logo": "/stores/el-mahalawy.jpg"
  },
  {
    "name": "Talabat",
    "logo": "/stores/talabat.svg"
  },
  {
    "name": "El-Hawary",
    "logo": "/stores/el-hawary.jpg"
  },
  {
    "name": "Breadfast",
    "logo": "/stores/breadfast.svg"
  },
  {
    "name": "InstaShop",
    "logo": "/stores/instashop.svg"
  }
];
