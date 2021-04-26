const text = {
  ellipsis(text, maxLength = 10) {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
  },

  splitNewLine(text) {
    return text.split('\n').map((line, index) => (<span key={index}>{line}<br /></span>))
  },

  emptyAltText(value, type) {
    if (!value) {
      return `[${type === 'title' ? '제목' : '내용'}없음]`;
    }

    if (type === 'contents') {
      return this.splitNewLine(value);
    }

    return value;
  },
}

export default text;