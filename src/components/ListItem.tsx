import React from 'react'
import Link from 'next/link'


type Props = {
  data: any
}

const ListItem = ({ data }: Props) => (
  <Link href="/">
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
