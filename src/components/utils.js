export function uuid() {
  let i;
  let random;
  let id = '';

  for (i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += '-';
    }
    id += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }

  return id;
}

export function pluralize(count, word) {
  return count === 1 ? word : `${word}s`;
}

export function store(namespace, data) {
  if (data) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }

  const store = localStorage.getItem(namespace);
  return (store && JSON.parse(store)) || [];
}

export function extend() {
  const newObj = {};
  for (let i = 0; i < arguments.length; i++) {
    const obj = arguments[i];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}
