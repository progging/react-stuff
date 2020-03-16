/// <reference types="react" />
export declare type SpacingProps = {
    children: any;
    padding?: number[];
    margin?: number[];
    theme?: any;
};
/***
 * Applies padding/margin in the magnitude of units (see docs on how to override what one unit is).
 * @param children
 * @param padding
 * @param margin
 */
export declare const Spacing: ({ children, padding, margin }: any) => JSX.Element;
