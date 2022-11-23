
export function CalculateDueDate(month, day, year) {
var April, August, December, February, January, July, June, March, May, November, October, September, d, m;
January = 1;
February = 2;
March = 3;
April = 4;
May = 5;
June = 6;
July = 7;
August = 8;
September = 9;
October = 10;
November = 11;
December = 12;
  var ed_day;

  if (month === January) {
    month = October;
    day = day + 7;

    if (day <= 30) {
      ed_day = day;
      return {day, month, year}
    } else {
      month = November;
      ed_day = 30 - day;
      return {day, month, year}
    }
  } else {
    if (month === February) {
      month = November;
      day = day + 7;

      if (day < 31) {
        ed_day = day;
        return {day, month, year}
      } else {
        month = December;
        ed_day = 30 - day;
        return {day, month, year}
      }
    } else {
      if (month === March) {
        month = December;
        day = day + 7;

        if (day <= 30) {
          ed_day = day;
          return {day, month, year}
        } else {
          month = January;
          day = day - 1;
          ed_day = 31 - day;
          year = year + 1
          return {day, month, year}
        }
      } else {
        if (month === April) {
          month = January;
          day = day + 7;
          year = year + 1

          if (day <= 31) {
            ed_day = day;
            return {day, month, year}
          } else {
            month = February;
            ed_day = 31 - day;
            return {day, month, year}
          }
        } else {
          if (month === May) {
            month = February;
            day = day + 7;
            year = year + 1

            if (day <= 28) {
              ed_day = day;
              return {day, month, year}
            } else {
              month = March;
              day = day - 1;
              ed_day = 31 - day;
              return {day, month, year}
            }
          } else {
            if (month === June) {
              month = March;
              day = day + 7;
              year = year + 1

              if (day <= 31) {
                ed_day = day;
                return {day, month, year}
              } else {
                month = April;
                day = day - 1;
                ed_day = 30 - day;
                return {day, month, year}
              }
            } else {
              if (month === July) {
                month = April;
                day = day + 7;
                year = year + 1

                if (day <= 30) {
                  ed_day = day;
                  return {day, month, year}
                } else {
                  month = May;
                  day = day - 1;
                  ed_day = 31 - day;
                  return {day, month, year}
                }
              } else {
                if (month === August) {
                  month = May;
                  day = day + 7;
                  year = year + 1

                  if (day <= 31) {
                    ed_day = day;
                    return {day, month, year}
                  } else {
                    month = June;
                    ed_day = 30 - day;
                    return {day, month, year}
                  }
                } else {
                  if (month === September) {
                    month = June;
                    day = day + 7;
                    year = year + 1

                    if (day <= 30) {
                      ed_day = day;
                      return {day, month, year}
                    } else {
                      month = July;
                      day = day - 1;
                      ed_day = 31 - day;
                      return {day, month, year}
                    }
                  } else {
                    if (month === October) {
                      month = July;
                      day = day + 7;
                      year = year + 1

                      if (day <= 31) {
                        ed_day = day;
                        return {day, month, year}
                      } else {
                        month = August;
                        ed_day = 30 - day;
                        return {day, month, year}
                      }
                    } else {
                      if (month === November) {
                        month = August;
                        day = day + 7;
                        year = year + 1

                        if (day <= 30) {
                          ed_day = day;
                          return {day, month, year}
                        } else {
                          month = September;
                          day = day - 1;
                          ed_day = 31 - day;
                          return {day, month, year}
                        }
                      } else {
                        if (month === December) {
                          month = September;
                          day = day + 7;
                          year = year + 1

                          if (day <= 31) {
                            ed_day = day;
                            return {day, month, year}
                          } else {
                            month = October;
                            ed_day = 31 - day;
                            return {day, month, year}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return {day, month, year}

  //console.log("Congratulations!! The Expected date of your baby's delivery is " + day.toString() + " " + month.toString() + " :)");
}