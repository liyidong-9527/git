export type DateTypes = number | string | Date  ;

function toTimestamp(data:null | undefined):null
function toTimestamp(data:number | string | Date ):null
function toTimestamp(date: DateTypes | null|undefined): number | null {
  // if (isMoment(date)) {
  //   return Math.floor(date.valueOf() / 1000);
  // }
  if (date instanceof Date) {
    return Math.floor(date.getTime() / 1000);
  }
  const num = date ? +date : null;
  if (!num) {
    return null;
  }
  return num;
}

// function getData(value:number) {
//   return 1
// }

// getData(toTimestamp(56666))


interface IsTruct {
  foo:number;
  bar:boolean;
}

// const obj:IsTruct ={}

// const abc = <IsTruct>{
//   foo:'sss' as number
// }

type Demo  = (string | number ) | null