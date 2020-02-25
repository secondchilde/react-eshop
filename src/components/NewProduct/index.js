import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import $style from './index.module.scss';
import Product from '@/components/Product';

function NewProduct({ items }) {
  items = [
    {
      title: '等春来',
      subtitle: '超值满额减',
      image:
        'https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png',
    },
    {
      title: '防疫专区',
      subtitle: '防疫日用',
      image:
        'https://yanxuan-item.nosdn.127.net/4876c2c18d8f8deabc5b714d8108da05.png',
    },
    {
      title: '超值特卖',
      subtitle: '抵至2折',
      image:
        'https://yanxuan-item.nosdn.127.net/4876c2c18d8f8deabc5b714d8108da05.png',
    },
    {
      title: '春日物语',
      subtitle: '新品上新',
      image:
        'https://yanxuan-item.nosdn.127.net/4876c2c18d8f8deabc5b714d8108da05.png',
    },
  ];

  return (
    <div className={classnames($style.newProduct)}>
      <div className="container">
        <div className={$style.newProduct__header}>
          <div className={$style.newProduct__title}>新品首发</div>
          <div className={$style.newProduct__subtitle}>为你寻觅世间好物</div>
          <a className={$style.newProduct__more}>更多新品 ></a>
        </div>
        <div className={$style.newProduct__items}>
          <Product className={$style.newProduct__item}></Product>
          <Product className={$style.newProduct__item}></Product>
          <Product className={$style.newProduct__item}></Product>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
