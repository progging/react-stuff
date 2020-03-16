/// <reference types="react" />
declare type GlobalCssProps = 'inherit' | 'initial' | 'unset';
export declare type FlexboxCssProps = {
    alignItems?: 'strech' | 'center' | 'start' | 'end' | GlobalCssProps;
    flexBasis?: any | GlobalCssProps;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | GlobalCssProps;
    flexFlow?: any | GlobalCssProps;
    flexGrow?: number | GlobalCssProps;
    flexShrink?: number | GlobalCssProps;
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    inlineFlex?: boolean;
    justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | GlobalCssProps;
    order?: number | GlobalCssProps;
};
/***
 * Applies Flexbox styling.
 * @param props Flexbox properties should be passed as camelcase props on the component.
 */
export declare const Flex: (props: any) => JSX.Element;
export {};
