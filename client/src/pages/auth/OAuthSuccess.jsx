import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function OAuthSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const token = params.get('token');
    if (token) {
      localStorage.setItem('accentra_token', token);
      toast.success('Google sign-in complete');
    }
    navigate('/dashboard', { replace: true });
  }, [navigate, params]);
  return null;
}
