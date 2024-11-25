declare module "design-system" {

    export interface TitleProps {
        children: React.ReactNode;
        level?: 1 | 2 | 3 | 4 | 5 | 6; // (h1, h2, etc.)
        color?: string;
        fontSize?: string;
        fontWeight?: string;
        background?: string;
        width?: string;
        height?: string;
        top?: string;
        left?: string;
        opacity?: string;
        margin?: string;
        padding?: string;


    }

    export interface ButtonProps {
        variant?: 'primary' | 'secondary'; 
        disabled?: boolean; 
        fontSize?: string; 
        fontWeight?: string; 
        color?: string; 
        backgroundColor?: string; 
        border?: string; 
        borderRadius?: string;
        padding?: string;
        width?: string;
        height?: string;
        margin?: string; 
        opacity?: string; 
        left?: string;
        top?: string; 
        transition?: string;
        onClick: ()=> void;
    }
    

    export interface InputProps {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        placeholder?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string;
        color?: string;
        backgroundColor?: string;
        border?: string;
        borderRadius?: string;
        padding?: string;
        width?: string;
        height?: string;
        margin?: string;
        opacity?: string;
        top?: string;
        left?: string;
        transition?: string;
        borderColor:string;
    }

    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
        };
        typography: {
            fontSize: string;
            fontWeight: string;
        };
    }

    export interface FormProps {
      
    }

}
