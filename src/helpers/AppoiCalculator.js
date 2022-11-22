import getWeeksDiff from './Date';


//date: string with formate YYYY-MM-DDTHH:mm:ss.sssZ
export function firstAppointDate(strDate){
    LMPdate = new Date(strDate);
    firstADateStart = new Date();
    firstADateEnd = new Date();
    firstADateStart.setDate(LMPdate.getDate() + 4*7);
    firstADateEnd.setDate(firstADateStart.getDate() + 2*7);
    return firstADateStart.toISOString.slice(0,10)+'to'+ firstADateEnd.toISOString.slice(0,10);
}
export function nextAppointDate(strDate){
    LMPdate = new Date(strDate);
    nextADateStart = new Date();
    nextADateEnd = new Date();

    today = new Date();
    weekN = getWeeksDiff(LMPdate,today);
    if (weekN < 30) {
        weekA = (Math.floor(weekN / 5)+ 1) * 5 ;
        nextADateStart.setDate(LMPdate.getDate() + (weekA - 1) * 7);
        nextADateEnd.setDate(nextADateStart.getDate() + 2*7);
    }else if(weekN < 36) {
        weekA = (Math.floor(weekN / 2)+ 1) * 2 ;
        nextADateStart.setDate(LMPdate.getDate() + (weekA - 1) * 7);
        nextADateEnd.setDate(nextADateStart.getDate() + 7);
    }else{
        nextADateStart.setDate(LMPdate.getDate() + (weekN) * 7);
        nextADateEnd.setDate(nextADateStart.getDate() + 7);
    }   
    return nextADateStart.toISOString().slice(0,10) + 'to' + nextADateEnd.toISOString().slice(0,10);
}