import { requestCompanies } from '../redux/actions/actions'

export const mockCompaniesAPICall = (request: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request.method) {
        case 'get':
          const company = requestCompanies(request);
          if (company) {
            resolve({ status: 200, name: company.name });
          } else {
            resolve({ status: 404, message: 'Not Found' });
          }
          break;
        // case 'post':
        //   if (passwordIsValid(request)) {
        //     addToPosts(request);
        //     resolve({ status: 200, message: 'Added Post' });
        //   } else {
        //     resolve({ status: 401, message: 'Unauthorized' });
        //   }
        //   break;
        default:
          resolve({ status: 400, message: 'Bad Request' });
      }
    }, 300);
  });
}