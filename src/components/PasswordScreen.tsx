import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PasswordScreenProps {
  onCorrectPassword: () => void;
}

export const PasswordScreen = ({ onCorrectPassword }: PasswordScreenProps) => {
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '170800') {
      setShowLoading(true);
      setTimeout(() => {
        onCorrectPassword();
      }, 4000);
    } else {
      alert('Senha incorreta!');
      setPassword('');
    }
  };

  if (showLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-white">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-2xl mb-6">Senha:</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-center"
            placeholder="Digite a senha"
            autoFocus
          />
          <p className="text-white/70 text-sm">
            Dica: nascimento do seu primogênito
          </p>
          <Button
            type="submit"
            className="glassmorphism text-white hover:bg-white/20"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};