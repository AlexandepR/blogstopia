import AppLink, { AppLinkTheme } from '../../../../shared/ui/AppLink/AppLink';
import SvgToReactComponent from '../../../../shared/assets/icons/svgToReactComponent';
import React from 'react';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import type { ItemsProps } from 'widgets/Sidebar/model/items';

export const SidebarItem = (items: ItemsProps) => {
    const { t } = useTranslation();
    const { item, isActive, handleClick } = items;

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
            isActive={isActive}
            onClick={handleClick}
        >
            <SvgToReactComponent id={item.icon} className={cls.icon} />
            <span className={cls.link}>{t(`${item.name}`)}</span>
        </AppLink>
    );
};
