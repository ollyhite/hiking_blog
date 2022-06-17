module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
  },
  today_date:()=>{
    return `${new Date().getMonth() + 1}/${new Date().getDate()}/${
      new Date().getFullYear()
    }`
  }
};
