const save = (data: object): void => {
  const dataStr = JSON.stringify(data)
  localStorage.setItem('tasks', dataStr)
}
// somary maikamaika fa tsy mbola tena ok ito
const getData = (): any => {
  const dataStr = localStorage.getItem('tasks')
  if( dataStr ) return JSON.parse(dataStr)
}

export { save, getData}
