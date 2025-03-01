import { useState } from "react";
import "./AuthForm.css"; // ✅ Import du CSS

export default function AuthForm({ onAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Connexion" : "Inscription", { email, password });
    onAuth({ email, password, isLogin });
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Connexion" : "Créer un compte"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Se connecter" : "S'inscrire"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
        {isLogin ? "Pas encore de compte ? S'inscrire" : "Déjà inscrit ? Se connecter"}
      </p>
    </div>
  );
}
