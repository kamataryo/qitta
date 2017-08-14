import { Group } from 'reducers/group'

const data: Group[] = [
  {
    slug: 'kamata-family',
    displayName: '鎌田のいえ',
    members: [
      { slug: 'kamataryo', displayName: '鎌田' },
    ],
  },
  {
    slug: 'sharehouse-catty',
    displayName: 'シェアハウス ねこだらけ',
    members: [
      { slug: 'salamander', displayName: 'サラマンダー' },
      { slug: 'kamataryo',  displayName: '鎌田' },
    ],
  },
  {
    slug: 'cat-system-co-ltd',
    displayName: '株式会社 cat-system',
    members: [
      { slug: 'kamataryo', displayName: '鎌田' },
      { slug: 'foo',       displayName: 'FOO' },
      { slug: 'bar',       displayName: 'BAR' },
    ],
  },
]

export default data
