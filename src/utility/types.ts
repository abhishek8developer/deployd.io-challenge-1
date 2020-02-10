export interface IkeyValue {
  [key: string]: string | number | IkeyValue
}

export interface IAction {
  type: string
  payload: any | string | number | IkeyValue
}
