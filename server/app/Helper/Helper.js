/**
  * Controller's' helper
  */
const Helper = {

  /**
   * Get user's profile'
   * @param {Object} data object containing user's details
   * @returns {Object} return user's data
   */
  userProfile(data) {
    return {
      id: data.id,
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      roleId: data.roleId,
      createAt: data.createdAt,
      updatedAt: data.updatedAt
    };
  },
  /**
   * Get user's attributes'
   * @returns {Array} return user's attributes
   */
  getUserAttribute() {
    return [
      'id',
      'username',
      'firstname',
      'lastname',
      'email',
      'createdAt',
    ];
  },
  /**
   * Pagination
   * @param {Object} condition pagination condition
   * @returns {Object} return an object
   */
  pagination(condition) {
    const next = Math.ceil(condition.count / condition.limit);
    const currentPage = Math.floor((condition.offset / condition.limit) + 1);
    return {
      page_count: next,
      Page: currentPage,
      page_size: condition.limit,
      total_count: condition.count
    };
  },
  /**
   * Get user's profile'
   * @param {Object} data object containing user's details
   * @returns {Object} return user's data
   */
  getUserProfile(data) {
    return {
      id: data.id,
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
    };
  },
  /**
   * Get user's attributes'
   * @returns {Array} return user's attributes
   */
  getDocAttribute() {
    return [
      'id',
      'title',
      'content',
      'access',
      'createdAt',
      'updatedAt'
    ];
  },
  /**
   * Get errors
   * @param {Array} error client side errors
   * @returns {Array} return user's attributes
   */
  errorArray(error) {
    const errorArray = [];
    error.errors.forEach((err) => {
      errorArray.push({ path: err.path, message: err.message });
    });
    return errorArray;
  },

};

export default Helper;
