export const spacingCss = (cssAttribute: string, baseUnitPx: number, spacing?: number | number[]) => {
    if (spacing === undefined) {
        return ''
    } else if (Array.isArray(spacing)) {
        if (spacing.length === 1 || spacing.length === 2 || spacing.length === 4) {
            return `${cssAttribute}: ${spacing.map((val: number) => `${(val * baseUnitPx)}px`).join(' ')};`
        }
        throw new Error('Array must contain either 1, 2, or 4 elements')
    } else {
        return `${cssAttribute}: ${spacing * baseUnitPx}px;`
    }
}