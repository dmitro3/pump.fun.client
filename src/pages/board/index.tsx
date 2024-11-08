import { Box } from 'grommet'
import {Button} from "antd";
import {TokensList} from "./TokensList.tsx";
import {useNavigate} from "react-router-dom";

export const BoardPage = () => {
  const navigate = useNavigate();

  return <Box>
    <Box>
      <Box align={'center'}>
        <Button type={'text'} style={{ fontSize: '22px' }} onClick={() => navigate('/create')}>
          Start a new coin
        </Button>
      </Box>
      {/*<Box margin={{ top: '32px' }} align={'center'}>*/}
      {/*  <Box  width={'200px'}>*/}
      {/*    <Input*/}
      {/*      placeholder={'Search for a token'}*/}
      {/*      size={'large'}*/}
      {/*      // style={{ background: '#41ddcd', color: 'black' }}*/}
      {/*    />*/}
      {/*  </Box>*/}
      {/*</Box>*/}
    </Box>
    <Box margin={{ top: '32px' }}>
      <TokensList />
    </Box>
  </Box>
}
