type Brand = 'github' | 'linkedin' | 'x' | 'figma'

/**
 * Renders a monochrome brand glyph using a CSS mask so it inherits the
 * current text color (currentColor) and can be themed like a normal icon.
 * Brand SVGs sourced from theSVG.org.
 */
export function BrandIcon({
  name,
  className = 'h-4 w-4',
  label,
}: {
  name: Brand
  className?: string
  label?: string
}) {
  return (
    <span
      role="img"
      aria-label={label ?? name}
      className={className}
      style={{
        display: 'inline-block',
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(/brands/${name}.svg)`,
        maskImage: `url(/brands/${name}.svg)`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}
