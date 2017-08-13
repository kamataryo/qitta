import { Task } from 'reducers/task'


const data: Task[] = [
  {
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
]

export default data
