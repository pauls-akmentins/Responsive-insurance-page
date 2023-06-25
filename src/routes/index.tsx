import { Routes, Route } from 'react-router-dom';

import PoliciesPage from '../content/policies';
import CarInsurance from '../content/insurances';
import NoActualPath from './NoActualPath';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NoActualPath pageHierarchy={['Home']} />} />
      <Route path="/policies" element={<PoliciesPage />} />
      <Route
        path="/policies/home-insurance"
        element={
          <NoActualPath
            pageHierarchy={['Home', 'Policies', 'Home Insurance']}
          />
        }
      />
      <Route
        path="/policies/car-insurance"
        element={
          <CarInsurance pageHierarchy={['Home', 'Policies', 'Car Insurance']} />
        }
      />
      <Route
        path="/policies/pet-insurance"
        element={
          <NoActualPath pageHierarchy={['Home', 'Policies', 'Pet Insurance']} />
        }
      />
      <Route
        path="/policies/health-insurance"
        element={
          <NoActualPath
            pageHierarchy={['Home', 'Policies', 'Health Insurance']}
          />
        }
      />
      <Route
        path="/policies/buy-new-insurance"
        element={
          <NoActualPath
            pageHierarchy={['Home', 'Policies', 'Buy New Insurance']}
          />
        }
      />
      <Route
        path="*"
        element={<NoActualPath pageHierarchy={['Invalid Path']} />}
      />
    </Routes>
  );
};

export default Router;
