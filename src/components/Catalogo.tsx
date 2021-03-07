import Link from 'next/link';
import React from 'react';
import clsx from 'clsx'
import lodash from 'lodash'
import { ThemeContext } from '../contexts/ThemeContext'
import { CartContext } from '../contexts/CartContext'

import styles from '../styles/components/Catalogo.module.css';

import dataprodutos from '../db/products.json';



const Catalogo: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const { handleAddItem, items, subtotal } = React.useContext(CartContext);

  const [ismounted, setismounted] = React.useState(false);
  const [listproducts, setlistproducts] = React.useState(null);
  const [indexfilter, setindexfilter] = React.useState(0);

  React.useEffect(() => {
    if (!ismounted) {
      setlistproducts(lodash.sortBy(dataprodutos, i => i.name));
      setismounted(true);
    }

  }, [ismounted]);


  // React.useEffect(() => {
  //   console.log('Items do carrinho subtotal', subtotal);
  //   console.log('Items do carrinho', items);

  // }, [items]);


  const handleSort = (index: number) => {

    switch (index) {
      case 0:
        setlistproducts(lodash.sortBy(dataprodutos, i => i.name));
        setindexfilter(0);
        break;
      case 1:
        setlistproducts(lodash.sortBy(dataprodutos, i => i.score));
        setindexfilter(1);
        break;
      case 2:
        setlistproducts(lodash.sortBy(dataprodutos, i => i.price));
        setindexfilter(2);
        break;

      default:
        setlistproducts(lodash.sortBy(dataprodutos, i => i.name));
        setindexfilter(0);
        break;
    }

  }




  return (
    <div className={clsx(styles.container, styles.lightMode)}>

      <div className={styles.containerfilter}>

        <div className={styles.contenttitlefilters}>
          <p className={styles.titlefilters} >Ordenar por:</p>
        </div>
        <div className={styles.contentfilters}>
          <button onClick={() => handleSort(0)} className={clsx(styles.buttonfilter, indexfilter === 0 && styles.buttonfilteractive)}
          >
            <img src="/assets/filter-icon.svg" className={styles.filtericon} />
            Nome
            </button>
          <button onClick={() => handleSort(1)} className={clsx(styles.buttonfilter, indexfilter === 1 && styles.buttonfilteractive)}
          >
            <img src="/assets/filter-icon.svg" className={styles.filtericon} />
            Popularidade
            </button>
          <button onClick={() => handleSort(2)} className={clsx(styles.buttonfilter, indexfilter === 2 && styles.buttonfilteractive)}
          >
            <img src="/assets/filter-icon.svg" className={styles.filtericon} />
            Preço
            </button>
        </div>

      </div>


      <div className={styles.containerbody}>

        {listproducts && listproducts.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.contentimage}>
                <img src={`/assets/${item.image}`} className={styles.imagecard} />
              </div>
              <div className={styles.contentdescription}>
                <p className={styles.title}>{item.name}</p>
                <p className={styles.subtitle}>Popularidade:{item.score}</p>
                <p className={styles.price}>Preço R${item.price}</p>

                <span className={styles.spanbutton}>
                  <button onClick={() => handleAddItem(item)} className={styles.buttonbuy}>Comprar</button>
                </span>
              </div>
            </div>
          );
        })}

      </div>






    </div>
  );
}

export default Catalogo;

