const textInfo = function (text = '') {
  const obj = {
    settingsVisible: false,
    color: {
      text: '#ffffff',
      outline: '#000000',
      shadow: '#000000'
    },
    allCaps: true,
    id: crypto.randomUUID(),
    text,
    size: 36,
    // weight: weights[0],
    shadow: 4,
    align: 'center',
    hOffset: 0,
    vOffset: 0,
  }

  return obj

}

export default textInfo 