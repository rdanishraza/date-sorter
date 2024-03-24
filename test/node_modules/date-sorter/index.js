export function sortDate(array, type) {
  try {
    const timestampArr = array.map((item) => new Date(item).getTime());
    const sortedTimestamp = timestampArr.sort();
    let result = [];
    if (type && type === "en-us") {
      result = sortedTimestamp.map((item) =>
        new Date(item).toLocaleDateString("en-us")
      );
    } else {
      result = sortedTimestamp.map((item) =>
        new Date(item).toLocaleDateString()
      );
    }
    return result;
  } catch (error) {
    return error;
  }
}

// module.exports = sortDate;
