const date = {
  formatedDate(date, isShowTime = false) {
    const yyymmdd = date.slice(0, 10);
    const hhmmss = date.slice(11, 19);

    const dateValueElements = [yyymmdd];

    if (isShowTime) {
      dateValueElements.push(hhmmss);
    }

    return dateValueElements.join(' ');
  }
}

export default date;