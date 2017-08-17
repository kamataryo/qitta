import { OwnProps as UserProps } from '../src/types/userdoc'

const data: UserProps[] = [
  {
    username    : 'kamataryo',
    password    : 'kamataryo',
    displayName : '鎌田りょ',
  },
  {
    username    : 'salamander',
    password    : 'salamander',
    displayName : 'サラマンダー',
  },
  {
    username    : 'mackerel',
    password    : 'mackerel',
    displayName : 'さば',
  },
  {
    username       : 'kamata-family',
    displayName    : '鎌田のいえ',
    isGroup        : true,
    members        : ['kamataryo'],
    administrators : ['kamataryo'],
  },
  {
    username       : 'sharehouse-catty',
    displayName    : 'シェアハウス 猫だらけ',
    isGroup        : true,
    members        : ['kamataryo', 'salamander'],
    administrators : ['salamander'],
  },
]

export default data
