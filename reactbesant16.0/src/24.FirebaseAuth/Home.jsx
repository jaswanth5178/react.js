import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from './Firebase';

function Home() {
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth);
    navigate('/login', { replace: true });
  }

  return (
    <div>
      <h1>Welcome Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;