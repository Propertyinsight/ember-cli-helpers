function formatDate(date, format) {
  return window.moment(date).utc().format(format);
}

function formatTime(date) {
  return window.moment.utc(date).fromNow();
}

export {
  formatDate,
  formatTime
};
