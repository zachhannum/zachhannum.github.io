import styled from "styled-components";
import { Typography } from "../atoms";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  padding: 20px 0px;
`;
const StyledSectionContent = styled.div`
  padding: 25px 0px;
  width: 75%;
  margin: 0px auto;
`;

export type PublicSectionProps = {
  innerRef: React.RefObject<HTMLDivElement>;
};

export type SectionProps = {
  title: string;
  children: React.ReactNode;
} & PublicSectionProps &
  React.ComponentPropsWithRef<"div">;

const Section = ({ title, children, innerRef, ...props }: SectionProps) => {
  return (
    <StyledSection {...props} ref={innerRef}>
      <Typography variant="h2">
        <strong>{title}</strong>
      </Typography>
      <StyledSectionContent>{children}</StyledSectionContent>
    </StyledSection>
  );
};

export default Section;
