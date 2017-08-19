type ActionCreator<
  T = string,
  P = any,
  > = (...arg: any[]) => {
  type: T,
  payload: P,
}

export default ActionCreator
