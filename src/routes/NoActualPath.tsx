import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ContentContainer from "../shared/layout/contentContainer";
import MainContainer from "../shared/layout/mainContainer";
import MainHeader from "../shared/layout/mainHeader";
import PageIndication from "../shared/pageIndication";
import TopBar from "../shared/topBar";

const NoActualPath: React.FC<{ pageHierarchy: string[] }> = ({
  pageHierarchy,
}) => {
  const navigate = useNavigate();
  const currentPage = pageHierarchy[pageHierarchy.length - 1];
  const isInvalidPathPage = currentPage === "Invalid Path";

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/policies");
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <MainContainer>
      <TopBar />
      <ContentContainer>
        {isInvalidPathPage ? null : <PageIndication pages={pageHierarchy} />}
        <MainHeader text={currentPage} />
        <p>
          {isInvalidPathPage
            ? "Path does not exist, "
            : "Page has not yet been finished, "}
          you will be redirected to "Policies" page shortly...
        </p>
      </ContentContainer>
    </MainContainer>
  );
};

export default NoActualPath;
