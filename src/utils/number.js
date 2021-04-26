const number = {
  commaize(value) {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default number;