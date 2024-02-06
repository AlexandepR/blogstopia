import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher.module.scss';
import SvgToReactComponent from 'shared/assets/icons/svgToReactComponent';
import { Theme, useTheme } from 'app/providers/ThemeProviders';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
       <Button
           theme={ButtonTheme.CLEAR}
           className={classNames(cls.ThemeSwitcher!,{},[className])}
           onClick={toggleTheme}>
           {theme === Theme.DARK ? <SvgToReactComponent id='lightIcon'/> : <SvgToReactComponent id='nightIcon'/>}
       </Button>
    );
};

export default ThemeSwitcher;
