import { styled, Toolbar } from "@mui/material";
import { Box } from "@mui/material";

const ContainerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#F2F5F6",
  width: "100%",
  minHeight: "100vh",
  paddingTop: theme.spacing(6.5),
  paddingLeft: theme.spacing(3.5),
  paddingRight: theme.spacing(3.5),
  overflowX: "hidden",
}));

const CardWrapper = ({ children, ...other }) => (
  <ContainerWrapper {...other}>
    <Toolbar />
    {children}
  </ContainerWrapper>
);

export default CardWrapper;
