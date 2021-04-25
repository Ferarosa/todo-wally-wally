const text = {
  ellipsis(text, maxLength = 10) {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
  }
}

export default text;