/*
 * @Author: cos
 * @Date: 2022-04-28 13:47:34
 * @LastEditTime: 2022-04-28 17:08:01
 * @LastEditors: cos
 * @Description: 菜单组件
 * @FilePath: \easy-mooc-maker\src\pages\shared\Menus\index.tsx
 */
import React, { useState } from 'react';
import './index.less';
import classnames from 'classnames';
interface IMenuItem {
  label: string;
  key: string;
}
interface IMenuProps {
  defaultSelectedKeys: string;
  items: IMenuItem[];
}
const Menu: React.FC<IMenuProps> = ({ defaultSelectedKeys, items }: IMenuProps) => {
  const [selected, setSelected] = useState(defaultSelectedKeys);
  const select = (item: IMenuItem) => {
    console.log(`click ${item.label}!`);
    setSelected(item.key);
  };
  return (
    <div className="menus">
      {items.map((item: IMenuItem) => (
        <div
          onClick={() => select(item)}
          key={item.key}
          className={classnames({
            item: true,
            active: item.key === selected,
          })}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Menu;
