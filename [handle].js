import { useRouter } from 'next/router';

export default function TipPage() {
  const router = useRouter();
  const { handle } = router.query;

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#0D0D0D',
      color: '#F47216',
      fontFamily: 'Arial',
      textAlign: 'center'
    }}>
      <h1>Tip {handle}</h1>
      <p>This is where USDC on Base + WalletConnect logic will live.</p>
    </div>
  );
}
