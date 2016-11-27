
class ORMUtils {
  static getRange(pagination = {}) {
    let startRange = 1,
      endRange = 1;
    if (pagination.page > 1 && pagination.pageCount > 1) {
      startRange = (pagination.page * pagination.pageSize) - 1;
    }
    if (pagination.rowCount > 1) {
      if (pagination.pageCount > 1) {
        const c = pagination.page * pagination.pageSize;
        if (c < pagination.rowCount) {
          endRange = c;
        } else {
          endRange = pagination.rowCount;
        }
      } else {
        endRange = pagination.rowCount;
      }
    }
    return { startRange, endRange };
  }
}

export { ORMUtils };
