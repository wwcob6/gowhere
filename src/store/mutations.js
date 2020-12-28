
export default {
  changeClass (state, classNumber) {
    state.classNumber = classNumber
    try {
      localStorage.classNumber = classNumber
    } catch (e) {
    }
  }
}
