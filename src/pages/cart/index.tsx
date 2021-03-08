import * as React from 'react'
import Head from 'next/head'
import styles from '../../styles/pages/Cart.module.css'
import { CartContext } from '../../contexts/CartContext'


import Header from '../../components/Header'
import clsx from 'clsx'



export default function Cart() {

  const { items, subtotal, shipping, total, handleRemoveItem } = React.useContext(CartContext);

  const [products, setproducts] = React.useState([]);


  React.useEffect(() => {
    setproducts(items)
  }, [items]);



  return (
    <div className={styles.container}>
      <Header />
      {/* O Head é do Next para personalizarmos o titulo da aplicação na aba do navegador, podendo assim em cada pagina termos um titulo diferente */}
      <Head>
        <title>GameStore | Carrinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Seu Carrinho
        </h3>

        <div className={styles.containerlistcart}>
          {products.length == 0 ?
            <p className={styles.titlenodata}>Seu carrinho está vazio.</p>
            :
            <>
              {products.map((item, index) => {
                return (
                  <div key={index} className={styles.contentitemcart} >
                    <div className={styles.contentitemimgcart}>
                      <img src={`${process.env.APP_ENV}assets/${item.image}`} className={styles.imgitemcart} />
                    </div>
                    <div className={styles.contentitemcontent}>
                      <p className={styles.titleitemcart}>{item.name}</p>
                      <p className={styles.textitemcart}>Valor Unitário: R${item.price}</p>
                    </div>
                    <div className={styles.contentitemspanright}>
                      <div className={styles.spanitemsleft}>
                        <p className={styles.textitemcart}>Subtotal</p>
                        <p className={styles.textitemcart}>R$ {item.price}</p>
                      </div>
                      <div className={styles.spanitemsleft}>
                        <button onClick={() => handleRemoveItem(item)} className={clsx(styles.textitemcart, styles.buttonremove)}>Remove</button>
                      </div>
                    </div>
                  </div>
                );
              })}

            </>
          }

          <div className={styles.contentresume}>

            <div className={styles.contentresumeitems}>
              <p className={clsx(styles.textitemresume, styles.textsmall)}>Subtotal: R$ {subtotal.toFixed(2)}</p>
              <p className={styles.textitemresume}>Frete: R$ {shipping.toFixed(2)}</p>
              <p className={clsx(styles.textitemresume, styles.textbold)}>Total: R$ {total.toFixed(2)}</p>
            </div>

          </div>

        </div>


      </main>

    </div>
  )
}
