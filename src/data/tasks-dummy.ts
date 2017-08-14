import { Task } from 'reducers/task'

const data: Task[] = [
  {
    id               : 1001,
    title            : '餌やり',
    done             : false,
    createdAt        : new Date(),
    createdBy        : 'kamataryo',
    finishedAt       : null,
    whoIsResponsible : 'kamataryo',
    finishedBy       : null,
    preReactions     : [
      { value: 'good', performedBy: 'shitter1' },
      { value: 'help', performedBy: 'shitter1' },
    ],
    postReactions    : [],
  },
  {
    id               : 1002,
    title            : '水交換',
    done             : true,
    createdAt        : new Date(),
    createdBy        : 'kamataryo',
    finishedAt       : new Date(),
    whoIsResponsible : 'kamataryo',
    finishedBy       : 'kamataryo',
    preReactions     : [
      { value: 'help',    performedBy: 'shitter1' },
    ],
    postReactions    : [
      { value: 'good',    performedBy: 'shitter1' },
      { value: 'plesure', performedBy: 'shitter1' },

    ],
  },
]

export default data
