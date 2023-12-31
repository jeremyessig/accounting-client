import { Box} from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const Main = ({children}:Props) => {
    return (
        <Box    component={'main'} 
                sx={{
                    //backgroundColor:'#f5f5f5',
                    padding:'64px 28px 0px 28px',
                    margin:'0',
                    minHeight: '100%'
                    }}>

                {children}

        </Box>
    );
};

export default Main;