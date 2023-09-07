import './mylabel.css';
export interface Props {
    /**
    * Text to display
    */
    label: string;
    /**
    * All Caps
    */
    allCaps?: boolean;
    /**
    * How large should the button be?
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * What color to use
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
    * What fontColor to use
    */
    fontColor?: string;
    /**
    * What fontColor to use
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
export default MyLabel;
