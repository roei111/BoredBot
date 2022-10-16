export const getFullDate =()=>{
  const intl = new Intl.DateTimeFormat('he', {year:"numeric" ,month: "long", day:"numeric"});
  return intl.format(new Date());
}

export const getTime = (date)=>{
  return date.toLocaleTimeString('he-IL', {
    hour: '2-digit',
    minute: '2-digit',
  });
}