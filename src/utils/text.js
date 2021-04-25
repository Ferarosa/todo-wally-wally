const text = {
  ellipsis(text, maxLength = 10) {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
  },

  splitNewLine(text) {
    return text.split('\n').map((line, index) => (<span key={index}>{line}<br /></span>))
  }
}

export default text;