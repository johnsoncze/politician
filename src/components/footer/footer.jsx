import React from 'react'
import styles from './footer.module.scss'

function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <h3 className={styles.header}>V síti</h3>
        <div>FB</div>
        <div>TW</div>
      </div>
      <div className={`${styles.column} ${styles.contacts}`}>
        <h3 className={styles.header}>Kontakt</h3>
        <div className={styles.sponsor}>
          Transparency International —<br />
          Česká republika, o.p.s.
        </div>
        <br />
        <div className={styles.contact}>
          <div className={styles.address}>
            <div>
              Sokolovská 260/143<br />
              180 00, Praha 8<br />
              +420 224 240 895/6<br />
              posta@transparency.cz<br />
            </div>
            <br />
            <div>
              IČ: 272 158 14<br />
              DIČ: CZ 272 158 14<br />
              Datová schránka: 8vzj3s2<br />
            </div>
          </div>
          <div>
            <div>
              Bankovní číslo transparentního<br />
              dárcovského účtu TI<br />
              2100385154/2010 (Fio banka, a.s.)<br />
            </div>
            <br />
            <div>
              Bankovní číslo provozního účtu TI<br />
              197958078/0300 (ČSOB, a.s.)<br />
              <br />
              TI není plátcem DPH.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <h3 className={styles.header}>Partneři</h3>
        <div>Transparency International</div>
        <div>Hlidac Statu</div>
        <div>Cesko DIgital</div>
      </div>
    </div>
  )
}

export default Footer;
