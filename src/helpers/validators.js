export function SelectOptionsValidator(value) {
    console.log(value)
    if (!Array.isArray(value)) {
      console.error('Options must be an array');
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      const option = value[i];
      if (typeof option !== 'object' || !option.hasOwnProperty('text') || !option.hasOwnProperty('value')) {
        console.error('Options must be an array of objects { text: "", value: ""}');
        return false;
      }
    }
    return true;
  }