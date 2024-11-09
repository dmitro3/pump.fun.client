import {Box, Text} from "grommet";
import {Token} from "../../types.ts";
import styled from "styled-components";
import moment from 'moment'
import { Image } from 'antd'
import Decimal from "decimal.js";

const TokenContainer = styled(Box)`
    border: 1px solid transparent;
    padding: 12px;
    &:hover {
        border-color: gray;
    }
    max-width: 30%;
    width: 30%;
    min-width: 400px;
    max-height: 350px;
    overflow: hidden;
`

export const TokenItem = (props: {
  data: Token
  onClick?: () => void
}) => {
  const { data: {
    symbol,
    name,
    timestamp,
    user,
    uriData,
  } } = props

  const marketCap = new Decimal(props.data.marketCap)

  return <TokenContainer onClick={props.onClick} direction={'row'} gap={'16px'}>
    <Box>
      <Image width={'150px'} src={uriData?.image} preview={false} />
    </Box>
    <Box style={{ maxWidth: 'calc(100% - 150px - 16px)' }}>
      <Text color={'accentWhite'}>
        Created by {user?.username} {moment(+timestamp * 1000).fromNow()}
      </Text>
      <Text color={'positiveValue'}>Market cap: {marketCap.gt(0) ? marketCap.toFixed(4) : '0'} ONE</Text>
      <Text color={'accentWhite'}><b>{name} (ticker: {symbol})</b>: {uriData?.description}</Text>
    </Box>
  </TokenContainer>
}
