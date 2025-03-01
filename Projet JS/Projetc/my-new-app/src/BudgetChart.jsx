import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function BudgetChart({ transactions }) {
  // Vérifier si les transactions sont vides
  const hasTransactions = transactions.length > 0;

  // ✅ Préparer les données du graphique
  const chartData = hasTransactions
    ? [
        { name: "Revenus", value: transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0) },
        { name: "Dépenses", value: transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0) },
      ]
    : [{ name: "Aucune donnée", value: 1 }];

  // ✅ Couleurs du graphique
  const COLORS = hasTransactions ? ["#4CAF50", "#FF5733"] : ["#CCCCCC"];

  return (
    <div className="chart-container">
      <h3>📊 Répartition des Dépenses et Revenus</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
           
            stroke="#222" // ✅ Ajout d'un contour pour éviter les mélanges
            strokeWidth={2}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend /> {/* ✅ Afficher la légende des couleurs */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
