import { Button } from "@mantine/core";
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from '@wagmi/connectors';
import { config } from '../config';

export const SubmitButton = () => {
  const { connect } = useConnect({config});
  const { disconnect } = useDisconnect({config});

  const handleClick = async () => {
    config.state.status == 'connected' ? disconnect : connect({connector: injected(), });
  }

  return (
    <Button type="submit" onClick={handleClick}>
      {config.state.status == 'connected' ? "Generate Proof & Send Transaction" : "Connect wallet"}
    </Button>
  )
}