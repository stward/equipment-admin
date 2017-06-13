import { endsWith, isNumber, isString } from 'lodash'

const IMPORTANT = '!important'

export default ({
  onProcessStyle (style) {
    Object.keys(style).forEach(key => {
      const value = style[key]
      if (isString(value) || isNumber(value)) {
        style[key] = endsWith(value, IMPORTANT) ? value : value + ' ' + IMPORTANT
      }
    })
    return style
  }
})
