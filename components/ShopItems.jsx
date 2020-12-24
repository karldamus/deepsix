import Link from 'next/link'
import { formatCurrencyString } from 'use-shopping-cart'

import { products } from '../data/products'

import styles from '../assets/styles/components/ShopItems.module.scss'

export default function ShopItems() {
  return (
    <div className={styles.ShopItems}>
      {products.map((product) => {
        const { 
          slug,
          name,
          image
        } = product

        const href = `/product/${slug}`

        const price = formatCurrencyString({
          value: product.price,
          currency: product.currency,
          language: 'en-US'
        })

        return (
          <div className="ShopItem">
            <style jsx>{`
              .ShopItem {
                background-image: url(${image});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
              }
            `}</style>
            <Link href={href}>
              <div className={styles.ItemMeta}>
                <a>
                  <h3>{name}</h3>
                  <p>{price}</p>
                </a>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}