export type PackViewport = { x: number; y: number; width: number; height: number };
export type PackAsset = { image: string; packViewport?: PackViewport };
export const cerealPackagingSheet = '/brand/cereal-packaging-supplied.webp';
// Pixel viewports in the unmodified 1448 × 1086 user-supplied packaging sheet.
const pack = (slug: string): PackAsset => ({ image: `/products/cereals/${slug}.webp` });
export const cereals=[
{name:'Choco Pops',ar:'تشوكو بوبس',...pack('choco-pops'),category:'Chocolate',character:'Pops'},
{name:'Choco Flakes',ar:'تشوكو فليكس',...pack('choco-flakes'),category:'Chocolate',character:'King'},
{name:'Fruit Rings',ar:'حلقات الفواكه',...pack('fruit-rings'),category:'Rings',character:'Loopy'},
{name:'Banana Pillow',ar:'بانانا بيلو',...pack('banana-pillow'),category:'Pillows',character:'Bana'},
{name:'Honey Rings',ar:'حلقات العسل',...pack('honey-rings'),category:'Rings',character:'Buzz'},
{name:'Strawberry Pillow',ar:'ستروبيري بيلو',...pack('strawberry-pillow'),category:'Pillows',character:'Berry'},
{name:'Crunchy Pillow',ar:'كرانشي بيلو',...pack('crunchy-pillow'),category:'Pillows',character:'Pillow'},
{name:'Choco Creamo',ar:'تشوكو كريمو',...pack('choco-creamo'),category:'Chocolate',character:"Creamo"},
{name:'Choco Rice',ar:'تشوكو رايس',...pack('choco-rice'),category:'Chocolate',character:'Byte'},
{name:'Corn Flakes',ar:'كورن فليكس',...pack('corn-flakes'),category:'Classic',character:'Flaky'},
{name:'Cocoa Scoops',ar:'كوكوا سكوبس',...pack('cocoa-scoops'),category:'Chocolate',character:'Scoops'}
];
export const cerealCategories=[{value:'All',ar:'الكل'},{value:'Chocolate',ar:'الشوكولاتة'},{value:'Rings',ar:'الحلقات'},{value:'Pillows',ar:'بيلو'},{value:'Classic',ar:'الكلاسيكي'}];
