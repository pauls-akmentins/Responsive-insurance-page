import { useNavigate } from 'react-router-dom';

import { policies } from './constants';
import { firstPageHierarchy } from './constants';
import ContentContainer from '../../shared/layout/contentContainer';
import MainContainer from '../../shared/layout/mainContainer';
import PageIndication from '../../shared/pageIndication';
import CardWrapper from '../../shared/layout/cardWrapper';
import Card from '../../shared/card';
import StaleCard from '../../shared/staleCard';
import TopBar from '../../shared/topBar';

const PoliciesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <TopBar />
      <ContentContainer>
        <PageIndication pages={firstPageHierarchy} />
        <CardWrapper>
          {policies.map((policy, index) => (
            <Card key={`${policy.title}-${index}`} policy={policy} />
          ))}
          <StaleCard
            mainText="Would you like to insure something else?"
            actionText="Buy new insurance"
            handleClick={() => navigate('/policies/buy-new-insurance')}
          />
        </CardWrapper>
      </ContentContainer>
    </MainContainer>
  );
};

export default PoliciesPage;
