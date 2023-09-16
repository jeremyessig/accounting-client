import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const Main = ({children}:Props) => {
    return (
        <Box    component={'main'} 
                sx={{
                    backgroundColor:'#f5f5f5',
                    padding:'86px 20px 20px 20px',
                    margin:'0',
                    minHeight: '100vh'
                    }}>
            Main
            {children}
        </Box>
    );
};

export default Main;