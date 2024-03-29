import { Button } from "@mantine/core";
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from '@wagmi/connectors';
import { config } from '../config';

export const ConnectWalletButton = () => {
  const {address} = useAccount({config});
  const { connect } = useConnect({config});
  const { disconnect } = useDisconnect({config});
  
  const handleClick = async () => {
    config.state.status == 'connected' ? disconnect : connect({connector: injected(), });
  }
  
  return (
    <Button onClick={handleClick}>
      {config.state.status == 'connected' 
      ? `${address?.slice(0,6)}...${address?.slice(address.length-4, address.length)}` 
      : "Connect wallet"
      }
    </Button>
  )
}