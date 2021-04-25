const text = {
  ellipsis(text, maxLength = 10) {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
  },

  splitNewLine(text) {
    return text.split('\n').map((line) => (<span>{line}<br /></span>))
  }
}

export default text;