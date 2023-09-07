/* eslint-disable @typescript-eslint/no-unused-vars */
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
    fontColor?:string;
    /**
    * What fontColor to use
    */
    backgroundColor?:string;
}

export const MyLabel = ( { 
    label, 
    size = 'normal', 
    color,
    allCaps = false,
    fontColor,
    backgroundColor = 'transparent'
} : Props) => {
  return (
    <span 
        className={ `${ size } ${ color } label` } 
        style={ { color: fontColor, backgroundColor}} 
    >{ allCaps ? label.toUpperCase() : label }</span>
  )
}

export default MyLabel;