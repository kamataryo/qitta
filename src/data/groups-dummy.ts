import Group from 'types/group'

const data: Group[] = [
  {
    slug: 'kamata-family',
    displayName: '鎌田のいえ',
    cats: [],
    members: [
      { slug: 'kamataryo', displayName: '鎌田', cats: [] },
    ],
  },
  {
    slug: 'sharehouse-catty',
    displayName: 'シェアハウス ねこだらけ',
    cats: [],
    members: [
      { slug: 'salamander', displayName: 'サラマンダー', cats: [] },
      { slug: 'kamataryo',  displayName: '鎌田', cats: [] },
    ],
  },
  {
    slug: 'cat-system-co-ltd',
    displayName: '株式会社 cat-system',
    cats: [],
    members: [
      { slug: 'kamataryo', displayName: '鎌田', cats: [] },
      { slug: 'foo',       displayName: 'FOO', cats: [] },
      { slug: 'bar',       displayName: 'BAR', cats: [] },
    ],
  },
]

export default data
