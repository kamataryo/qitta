import Userdoc from 'types/userdoc'

const data: Userdoc[] = [
  {
    username    : 'kamataryo',
    password    : 'kamataryo',
    displayName : '鎌田りょ',
    isGroup     : false,
    members     : [],
    cats        : [2001, 2002],
  },
  {
    username    : 'salamander',
    password    : 'salamander',
    displayName : 'サラマンダー',
    isGroup     : false,
    cats        : [2003],
    members     : [],
  },
  {
    username    : 'kamata-family',
    password    : '',
    displayName : '鎌田のいえ',
    isGroup     : true,
    cats        : [2001],
    members     : ['kamataryo'],
  },
]

export default data
