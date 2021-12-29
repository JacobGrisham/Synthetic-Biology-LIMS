// My React Components
import Project from '../components/LIMS/projects/Project';
import Job from '../components/LIMS/jobs/Job';
import JobForm from '../components/LIMS/jobs/JobForm';
import Protocol from '../components/LIMS/protocols/Protocol';
import Inventory from '../components/LIMS/inventory/Inventory';
import ProjectForm from '../components/LIMS/projects/ProjectForm';
import ProtocolForm from '../components/LIMS/protocols/ProtocolForm';
import InventoryForm from '../components/LIMS/inventory/InventoryForm';
import ComingSoon from '../components/LIMS/microcomponents/ComingSoon';
// Icons
import Home from '../assets/images/logo-icon.svg';
import Search from '../assets/images/lg-search-icon.svg';
import Projects from '../assets/images/job-icon.svg';
import Protocols from '../assets/images/protocol-icon.svg';
import InventoryIcon from '../assets/images/inventory-icon.svg';
import Equipment from '../assets/images/microscope-icon.svg';
import Automation from '../assets/images/machine-icon.svg';
import Products from '../assets/images/beakers-icon.svg';
import Shipping from '../assets/images/boxes-icon.svg';
import Analytics from '../assets/images/graph-icon.svg';
import Credentials from '../assets/images/book-icon.svg';
import Profile from '../assets/images/user-icon.svg';
import Settings from '../assets/images/gear-icon.svg';

export const API_URL = "http://localhost:8000/api/v1/company"

export const REQUEST_COMPANIES_PENDING = 'REQUEST_COMPANIES_PENDING';
export const REQUEST_COMPANIES_SUCCESS = 'REQUEST_COMPANIES_SUCCESS';
export const REQUEST_COMPANIES_FAILED = 'REQUEST_COMPANIES_FAILED';

export const routes = [
  { path: 'home/',
    name: 'Home',
    icon: Home,
    component: () => <ComingSoon />
  },
  { path: 'search/*',
    name: 'Search',
    icon: Search,
    component: () => <ComingSoon />
  },
  { path: 'projects/*',
    name: 'Projects',
    icon: Projects,
    component: () => <Project />
  },
  { path: '/protocols',
    name: 'Protocols',
    icon: Protocols,
    component: () => <Protocol />
  },
  {
    path: 'inventory/*',
    name: 'Inventory',
    icon: InventoryIcon,
    component: () => <Inventory />
  },
  { path: 'equipment/*',
    name: 'Equipment',
    icon: Equipment,
    component: () => <ComingSoon />
  },
  { path: 'automation/*',
    name: 'Automation',
    icon: Automation,
    component: () => <ComingSoon />
  },
  { path: 'products/*',
    name: 'Products',
    icon: Products,
    component: () => <ComingSoon />
  },
  { path: 'shipping/*',
    name: 'Shipping',
    icon: Shipping,
    component: () => <ComingSoon />
  },
  { path: 'analytics/*',
    name: 'Analytics',
    icon: Analytics,
    component: () => <ComingSoon />
  },
  { path: 'credentials/*',
    name: 'Credentials',
    icon: Credentials,
    component: () => <ComingSoon />
  },
  { path: 'profile/*',
    name: 'Profile',
    icon: Profile,
    component: () => <ComingSoon />
  },
  { path: 'settings/*',
    name: 'Settings',
    icon: Settings,
    component: () => <ComingSoon />
  },
]

export const nestedRoutes = [
  { path: 'inventory/add',
    component: () => <InventoryForm />
  },
  { path: 'protocols/add',
    component: () => <ProtocolForm />
  },
  { path: 'projects/add',
    component: () => <ProjectForm />
  },
  { path: 'projects/job',
  component: () => <Job />
  },
  { path: 'projects/job/certify',
  component: () => <JobForm />
  },
  { path: 'inventory/edit',
  component: () => <InventoryForm />
  },
  { path: 'protocols/edit',
    component: () => <ProtocolForm />
  },
  { path: 'projects/edit',
    component: () => <ProjectForm />
  },
]