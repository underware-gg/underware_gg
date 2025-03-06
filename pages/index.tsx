import React from 'react'
import Link from 'next/link'
import App from '@/components/App'
import Logo from '@/components/Logo'

export default function IndexPage() {
  return (
    <App>
      <div className='AlignCenter'>

        <Logo />

        <h1 className='TitleCase'>Underware</h1>

        {/* <h5>Game studio building<br />on-chain worlds</h5> */}

        <div className='Spacer10' />
        {/* <hr /> */}
        {/* <div className='Spacer10' /> */}

        <h5>
          [ <a href='https://pistols.underware.gg'>Pistols at Dawn</a> ]
        </h5>
        <h5>
          [ <a href='https://lootunder.world'>Loot Underworld</a> ]
        </h5>

        {/* <hr /> */}
        <div className='Spacer10' />

        <h5>
          [ <a href='https://x.com/underware_gg'>@underware_gg</a> ]
        </h5>
        <h5>
          [ <a href='https://x.com/pistols_gg'>@pistols_gg</a> ]
        </h5>
        <h5>
          [ <a href='https://x.com/LootUnderworld'>@LootUnderworld</a> ]
        </h5>

        <div style={{ height: '5vh' }}>&nbsp;</div>

      </div>
    </App>
  );
}
