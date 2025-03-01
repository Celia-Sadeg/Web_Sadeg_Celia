import { useState } from "react";
import "./index.css";
import BudgetChart from "./BudgetChart"; // 🔥 Import du graphique

export default function BudgetManager() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  // ✅ Ajouter une transaction avec la date
  const addTransaction = () => {
    if (!description || !amount) return alert("Veuillez remplir tous les champs.");

    const newTransaction = {
      id: Date.now(),
      description,
      amount: Number(amount),
      type,
      date: new Date().toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }), // ✅ Format "JJ/MM/AAAA"
    };

    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
  };

  // ✅ Supprimer une transaction
  const removeTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="budget-container">
      <h1>💰 Gestionnaire de Budget</h1>

      {/* ✅ Formulaire d'ajout de transaction */}
      <div className="add-transaction">
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Montant" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <div className="type-selector">
          <label>
            <input
              type="radio"
              value="income"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            Revenu
          </label>

          <label>
            <input
              type="radio"
              value="expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            Dépense
          </label>
        </div>
        <button onClick={addTransaction}>Ajouter</button>
      </div>

      {/* ✅ Graphique des transactions */}
      <BudgetChart transactions={transactions} />

      {/* ✅ Liste des transactions */}
      <ul className="transactions-list">
        {transactions.length > 0 ? (
          transactions.map((t) => (
            <li key={t.id} className={t.type === "income" ? "income" : "expense"}>
              <strong>{t.description}</strong>  {t.amount.toFixed(2)} €
              <br />
              <small className="transaction-date"> 📅 {t.date}</small> {/* ✅ Affichage de la date */}
              <button onClick={() => removeTransaction(t.id)}>Supprimer</button>
            </li>
          ))
        ) : (
          <p>Aucune transaction.</p>
        )}
      </ul>
    </div>
  );
}
