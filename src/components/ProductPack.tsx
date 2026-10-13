import type { PackAsset } from '@/data/cereals';
import '@/styles/product-pack.css';
type Props = { product: PackAsset; alt: string; className?: string; eager?: boolean };
/** Lossless crops of the supplied packaging, exposed as indexable images. */
export default function ProductPack({ product, alt, className = '', eager = false }: Props) {
  return <span className={`product-pack ${className}`} dir="ltr"><img className="product-pack-art" src={product.image} alt={alt} width="230" height="300" loading={eager ? 'eager' : 'lazy'} decoding="async" /></span>;
}
