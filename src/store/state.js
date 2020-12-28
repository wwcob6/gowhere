let defaultClass = '通信一班'
try {
  if (localStorage.classNumber) {
    defaultClass = localStorage.classNumber
  }
} catch (e) {
}

export default {
  classNumber: defaultClass
}
