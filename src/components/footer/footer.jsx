import React from 'react'

function Footer () {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <h3 className='footer-header'>Kontakt</h3>
        <div className='footer-header'>Transparency International — Česká republika, o.p.s.</div>
        <div>
          Sokolovská 260/143
          180 00, Praha 8
          +420 224 240 895/6
          posta@transparency.cz
        </div>
        <div>
          IČ: 272 158 14
          DIČ: CZ 272 158 14
          Datová schránka: 8vzj3s2
        </div>
      </div>
      <div className='footer-wrapper'>
        <div>
          Bankovní číslo transparentního dárcovského účtu TI
          2100385154/2010 (Fio banka, a.s.)
        </div>
        <div>Bankovní číslo provozního účtu TI 197958078/0300 (ČSOB, a.s.)</div>
        <div>TI není plátcem DPH.</div>
      </div>
    </div>
  )
}

export default Footer;
