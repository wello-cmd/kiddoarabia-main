import type { CSSProperties } from 'react';
import type { PackAsset } from '@/data/cereals';
import '@/styles/product-pack.css';

type Props = { product: PackAsset; alt: string; className?: string };

/** View the supplied artwork without altering or regenerating any package pixels. */
export default function ProductPack({ product, alt, className = '' }: Props) {
  if (!product.packViewport) return <img className={className} src={product.image} alt={alt} width="250" height="250" loading="lazy" />;
  const { x, y, width, height } = product.packViewport;
  const style: CSSProperties = {
    backgroundImage: `url("${product.image}")`,
    backgroundSize: `${1448 / width * 100}% ${1086 / height * 100}%`,
    backgroundPosition: `${x / (1448 - width) * 100}% ${y / (1086 - height) * 100}%`,
    aspectRatio: `${width} / ${height}`,
  };
  return <span className={`product-pack ${className}`} role={alt ? 'img' : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true} dir="ltr"><span className="product-pack-art" style={style} /></span>;
}
