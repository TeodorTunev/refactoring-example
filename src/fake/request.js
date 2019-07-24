export default data => {
  return new Promise(resolve => {
    resolve({
      validations: [
        { field: 'email', success: true, message: 'Email is correct.' },
        { field: 'name', success: true, message: 'Name is correct.' },
        { field: 'phone', success: false, message: 'Phone is invalid.' },
        {
          field: 'grades',
          success: false,
          message: 'Grade should be between 2 and 6.'
        },
        { field: 'age', success: true, message: 'Age is correct.' }
      ]
    });
  });
};
