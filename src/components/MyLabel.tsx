/* eslint-disable @typescript-eslint/no-unused-vars */
import './mylabel.css';

interface Props {
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
}

export const MyLabel = ( { 
    label, 
    size = 'normal', 
    color,
    allCaps = false,
    fontColor
} : Props) => {
  return (
    <span 
        className={ `${ size } ${ color } label` } 
        style={ { color: fontColor}} 
    >{ allCaps ? label.toUpperCase() : label }</span>
  )
}
