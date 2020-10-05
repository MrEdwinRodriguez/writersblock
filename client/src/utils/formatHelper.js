export function FormatDate(dobDate) {
    let month = '' + (dobDate.getMonth() + 1);
    let day = '' + dobDate.getDate();
    let year = dobDate.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;
    return [year, month, day].join('-');
}
