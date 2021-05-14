import React, { useState } from 'react';
import style from './header.module.css';

const FootwareMenus = () => {
  const footwareTypes = [

  ];

  return (
    <div className={style.store_menu_wrapper}>

      <div className={style.fader}></div>
    </div>
  );
};

const TabsController = ({ customerTypeChange }) => {
  const [active, setActive] = useState(1);

  const changeCustType = (e) => {
    setActive(e);
    customerTypeChange(e);
  };

  return (
    <div className={style.tabs_controller}>
      <div className={style.container_centered}>
        <ul className={style.tab_menus}>
          <li
            className={active === 1 ? style.active_tab : ''}
            onClick={() => changeCustType(1)}
          >
            Everyone
          </li>
          <li
            className={active === 2 ? style.active_tab : ''}
            onClick={() => changeCustType(2)}
          >
            Men
          </li>
          <li
            className={active === 3 ? style.active_tab : ''}
            onClick={() => changeCustType(3)}
          >
            Women
          </li>

          <li
            className={active === 5 ? style.active_tab : ''}
            onClick={() => changeCustType(5)}
          >
            Kids
          </li>
        </ul>
      </div>
    </div>
  );
};

const StoreHeader = ({ customer, customerChange }) => {
  return (
    <>
      <FootwareMenus />
      <TabsController
        customerType={customer}
        customerTypeChange={customerChange}
      />
    </>
  );
};

export default StoreHeader;
