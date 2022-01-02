interface IFormInput {
  company: string,
  companyKey: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
}

export const validator = (values:IFormInput, fieldName:string) => {
  let errors:any = {};
  switch (fieldName) {
    case 'company':
      validateCompany(values.company, errors);
      break;
    case 'companyKey':
      validateCompanyKey(values.companyKey, errors);
      break;
    case 'firstName':
      validateFirstName(values.firstName, errors);
      break;
    case 'lastName':
      validateLastName(values.lastName, errors);
      break;
    case 'username':
      validateUsername(values.username, errors);
      break;
    case 'password':
      validatePassword(values.password, errors);
      break;
    default:
  }
  return errors;
};


function validateCompany(company:any, errors:any) {
  let result = true;
  if (!company) {
    errors.company = 'Company name is required';
    result = false;
  }
  return result;
}

function validateCompanyKey(companyKey:any, errors:any) {
  let result = true;
  if (!companyKey) {
    errors.companyKey = 'Company key is required';
    result = false;
  }
  return result;
}

function validateFirstName(firstName:any, errors:any) {
  let result = true;
  if (!firstName) {
    errors.firstName = 'First name is required';
    result = false;
  }  else if (firstName.length > 100) {
    errors.password = 'First name must not exceed 100 characters';
    result = false;
  }
  return result;
}

function validateLastName(lastName:any, errors:any) {
  let result = true;
  if (!lastName) {
    errors.lastName = 'Last name is required';
    result = false;
  }  else if (lastName.length > 100) {
    errors.password = 'Last name must not exceed 100 characters';
    result = false;
  }
  return result;
}

function validateUsername(username:any, errors:any) {
  let result = true;
  if (!username) {
    errors.username = 'Username is required';
    result = false;
  } else if (username.length > 150) {
      errors.password = 'Username is too long, it must not exceed 150 characters';
      result = false;
    }

  return result;
}

function validatePassword(password:any, errors:any) {
  let result = true;

  if (!password) {
    errors.password = "Password is Required";
    result = false;
  } else if (password.length > 128) {
    errors.password = 'Password is too long, it must not exceed 128 characters';
    result = false;
  } else {
    var lower = /(?=.*[a-z])/;
    var upper = /(?=.*?[A-Z])/;
    var number = /(?=.*?[0-9])/;
    var symbol = /(?=.*?[#?!@$%^&*-])/;

    switch (false) {
      case lower.test(password):
        errors.password = "Missing one lowercase letter";
        result = false;
        break;
      case upper.test(password):
        errors.password = "Missing one uppercase letter";
        result = false;
        break;
      case number.test(password):
        errors.password = "Missing one number";
        result = false;
        break;
      case symbol.test(password):
        errors.password = "Missing one symbol";
        result = false;
        break;
    }
  }

  return result;
}