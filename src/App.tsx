import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Card } from './componets/Card';
import { Input } from './componets/Input';
import { Select } from './componets/Select';
import { Button } from './componets/Button';
import { Modal } from './componets/Modal';

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [pais, setPais] = useState('mx');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen text-[#1C5560]">
      {/* Logos */}
      <div className="flex gap-4 justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Card con imagen */}
      <Card title="Producto Destacado">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Producto"
          className="w-full h-auto rounded-lg mb-3"
        />
        <p className="text-[#1C5560]">
          Esto es para que vean que soy mejor que ustedes  😎 todo veridico
        </p>
      </Card>

      {/* Inputs */}
      <Input
        name="email"
        label="Correo electrónico"
        placeholder="tucorreo@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Select */}
      <Select
        name="pais"
        label="País"
        value={pais}
        onChange={(e) => setPais(e.target.value)}
        options={[
          { value: 'mx', label: 'México' },
          { value: 'us', label: 'Estados Unidos' },
          { value: 'ca', label: 'Canadá' },
        ]}
      />

      {/* Button */}
      <Button
        label={`Contador: ${count}`}
        onClick={() => setCount((c) => c + 1)}
        variant="primary"
      />

      <Button
        label="Mostrar Modal"
        onClick={() => setModalOpen(true)}
        variant="secondary"
      />

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Confirmar Acción">
        <p className="text-[#1C5560]">¿Estás seguro que deseas continuar mediocre ?</p>
        <div className="flex justify-end mt-4 gap-2">
          <Button label="Cancelar" variant="secondary" onClick={() => setModalOpen(false)} />
          <Button label="Confirmar" variant="primary" onClick={() => setModalOpen(false)} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
