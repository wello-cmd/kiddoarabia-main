export type PackViewport = { x: number; y: number; width: number; height: number };
export type PackAsset = { image: string; packViewport?: PackViewport };
export const cerealPackagingSheet = '/brand/cereal-packaging-supplied.png';
// Pixel viewports in the unmodified 1448 × 1086 user-supplied packaging sheet.
const pack = (x: number, y: number): PackAsset => ({ image: cerealPackagingSheet, packViewport: { x, y, width: 230, height: 300 } });
export const cereals=[
{name:'Choco Pops',ar:'تشوكو بوبس',...pack(85, 40),category:'Chocolate',character:'Pops'},
{name:'Choco Flakes',ar:'تشوكو فليكس',...pack(435, 40),category:'Chocolate',character:'King'},
{name:'Fruit Rings',ar:'حلقات الفواكه',...pack(785, 40),category:'Rings',character:'Loopy'},
{name:'Banana Pillow',ar:'بانانا بيلو',...pack(1134, 40),category:'Pillows',character:'Bana'},
{name:'Honey Rings',ar:'حلقات العسل',...pack(85, 380),category:'Rings',character:'Buzz'},
{name:'Strawberry Pillow',ar:'ستروبيري بيلو',...pack(435, 380),category:'Pillows',character:'Berry'},
{name:'Crunchy Pillow',ar:'كرانشي بيلو',...pack(785, 380),category:'Pillows',character:'Pillow'},
{name:'Choco Creamo',ar:'تشوكو كريمو',...pack(1130, 380),category:'Chocolate',character:"Creamo"},
{name:'Choco Rice',ar:'تشوكو رايس',...pack(240, 730),category:'Chocolate',character:'Byte'},
{name:'Corn Flakes',ar:'كورن فليكس',...pack(600, 730),category:'Classic',character:'Flaky'},
{name:'Cocoa Scoops',ar:'كوكوا سكوبس',...pack(965, 730),category:'Chocolate',character:'Scoops'}
];
export const cerealCategories=[{value:'All',ar:'الكل'},{value:'Chocolate',ar:'الشوكولاتة'},{value:'Rings',ar:'الحلقات'},{value:'Pillows',ar:'بيلو'},{value:'Classic',ar:'الكلاسيكي'}];
