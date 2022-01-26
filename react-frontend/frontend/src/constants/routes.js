// My React Components
import Project from '../components/LIMS/projects/Project';
import Job from '../components/LIMS/jobs/Job';
import JobForm from '../components/LIMS/jobs/JobForm';
import Protocol from '../components/LIMS/protocols/Protocol';
import Inventory from '../components/LIMS/inventory/Inventory';
import ProjectForm from '../components/LIMS/projects/ProjectForm';
import ProtocolForm from '../components/LIMS/protocols/ProtocolForm';
import InventoryForm from '../components/LIMS/inventory/InventoryForm';
import ComingSoon from '../components/base/placeholders/ComingSoon';
import NotFound from '../components/base/placeholders/Error';
// Images for Placeholders
import NotFoundImage from '../assets/images/404.svg';
import SearchImage from '../assets/images/search.svg';
import EquipmentImage from '../assets/images/equipment.svg';
import AutomationImage from '../assets/images/automation.svg';
import AnalyticsImage from '../assets/images/analytics.svg';
import ShippingImage from '../assets/images/shipping.svg';
import HomeImage from '../assets/images/home.svg';
import ProductsImage from '../assets/images/products.svg';

export const API_URL = "http://localhost:8000/api/v1/company"
export const REQUEST_COMPANIES_PENDING = 'REQUEST_COMPANIES_PENDING';
export const REQUEST_COMPANIES_SUCCESS = 'REQUEST_COMPANIES_SUCCESS';
export const REQUEST_COMPANIES_FAILED = 'REQUEST_COMPANIES_FAILED';

export const AppRoutes = [
  { path: 'home',
    component: () => <ComingSoon image={HomeImage}/>
  },
  { path: 'search',
    component: () => <ComingSoon image={SearchImage} />
  },
  { path: 'projects',
    component: () => null
  },
  { path: 'projects/:id',
    component: () => <Project />
  },
  { path: 'projects/add',
    component: () => <ProjectForm />
  },
  { path: 'projects/edit/:id',
    component: () => <ProjectForm />
  },
  { path: 'projects/job/:id',
    component: () => <Job />
  },
  { path: 'projects/job/certify/:id',
    component: () => <JobForm />
  },
  { path: 'protocols',
    component: () => null
  },
  { path: 'protocols/:id',
    component: () => <Protocol />
  },
  { path: 'protocols/add',
    component: () => <ProtocolForm />
  },
  { path: 'protocols/edit/:id',
    component: () => <ProtocolForm />
  },
  { path: 'inventory',
    component: () => null
  },
  { path: 'inventory/:name',
    component: () => <Inventory />
  },
  { path: 'inventory/add',
    component: () => <InventoryForm />
  },
  { path: 'inventory/edit/:id',
    component: () => <InventoryForm />
  },
  { path: 'equipment',
    component: () => <ComingSoon image={EquipmentImage} />
  },
  { path: 'automation',
    component: () => <ComingSoon image={AutomationImage}/>
  },
  { path: 'products',
    component: () => <ComingSoon image={ProductsImage}/>
  },
  { path: 'shipping',
    component: () => <ComingSoon image={ShippingImage}/>
  },
  { path: 'analytics',
    component: () => <ComingSoon image={AnalyticsImage}/>
  },
  { path: 'credentials',
    component: () => <ComingSoon />
  },
  { path: 'profile',
    component: () => <ComingSoon />
  },
  { path: 'settings',
    component: () => <ComingSoon />
  },
  { path: '*',
  component: () => <NotFound message={'Error 404: Page Not Found'} image={NotFoundImage} />
  },
]