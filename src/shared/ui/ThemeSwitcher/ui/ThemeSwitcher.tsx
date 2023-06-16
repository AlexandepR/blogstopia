import { classNames } from 'src/shared/lib/classNames/className';
import cls from 'src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.module.scss';
// import nightIcon  from 'src/shared/assets/icons/nightIcon.svg'
// import { ReactComponent as NightIcon } from 'src/shared/assets/icons/nightIcon.svg'
// import { ReactComponent as NightIcon } from '!!react-svg-loader!src/shared/assets/icons/nightIcon.svg'
import SvgToReactComponent from 'src/shared/assets/icons/svgToReactComponent';
import { Theme, useTheme } from 'src/app/providers/ThemeProviders';
import Button, { ThemeButton } from 'src/shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
       <Button
           theme={ThemeButton.CLEAR}
           className={classNames(cls.ThemeSwitcher,{},[className || ''])}
           onClick={toggleTheme}>
           {theme === Theme.DARK ? <SvgToReactComponent id='lightIcon'/> : <SvgToReactComponent id='nightIcon'/>}
       </Button>
    );
};

export default ThemeSwitcher;