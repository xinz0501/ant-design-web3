import {
  BitcoinColorful,
  EthereumColorful,
  BSCColorful,
  OptimismColorful,
  PolygonColorful,
  ArbitrumColorful,
  EtherscanColorful,
  MetaMaskColorful,
  WalletConnectColorful,
  CoinbaseWallectColorful,
  WalletColorful,
  WalletWhiteColorful,
  SuiColorful,
  ChromeColorful,
  TronColorful,
} from '@ant-design/web3-icons';
import { Space } from 'antd';

const style = {
  fontSize: 64,
};

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinColorful style={style} />
      <EthereumColorful style={style} />
      <BSCColorful style={style} />
      <OptimismColorful style={style} />
      <PolygonColorful style={style} />
      <ArbitrumColorful style={style} />
      <EtherscanColorful style={style} />
      <MetaMaskColorful style={style} />
      <WalletConnectColorful style={style} />
      <CoinbaseWallectColorful style={style} />
      <WalletColorful style={style} />
      <WalletWhiteColorful
        style={{
          ...style,
          backgroundColor: '#000',
        }}
      />
      <SuiColorful style={style} />
      <ChromeColorful style={style} />
      <TronColorful style={style} />
    </Space>
  );
};

export default App;