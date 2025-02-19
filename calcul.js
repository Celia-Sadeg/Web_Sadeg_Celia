<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convertisseur Dollar-Euro avec Conversion en Lettres</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #2c003e;
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculator {
            width: 500px;
            height: auto;
            background: #1b0033;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .display,
        .result {
            background-color: #3e006b;
            color: #fff;
            font-size: 3rem; /* Augmenter la taille de la police */
            text-align: center;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
            height: auto;
            line-height: 1.5;
            width: 100%;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        }

        select,
        input,
        button {
            font-size: 1.6rem;
            padding: 12px;
            border-radius: 8px;
            width: 100%;
            margin-bottom: 20px;
            border: none;
            outline: none;
        }

        .select {
            background-color: #3e006b;
            color: white;
        }

        input {
            background-color: #3e006b;
            color: white;
            text-align: center;
        }

        button {
            background: linear-gradient(145deg, #55008d, #9c00d9);
            color: white;
            border: none;
            font-size: 1.8rem;
            padding: 20px;
            border-radius: 8px;
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            height: 60px;
        }

        button:hover {
            background: linear-gradient(145deg, #bb00cc, #ff33cc);
            box-shadow: 0 5px 20px rgba(255, 255, 255, 0.5);
        }

        button:active {
            transform: translateY(4px);
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
        }

        button.convert {
            background: linear-gradient(145deg, #ff00cc, #ff66b3);
            font-size: 2.2rem;
        }

        .info {
            font-size: 0.9rem;
            color: gray;
            margin-top: 20px;
            text-align: center;
        }

        .calculator p {
            font-size: 1rem;
            color: white;
            text-align: center;
        }

        #resultInWords {
            font-size: 2rem; /* Agrandir la taille du texte pour le champ en lettres */
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="calculator">
       

        <label >Sélectionnez la conversion</label>
        <select id="currencySelect" class="select">
            <option value="usdToEur">Convertir USD en EUR</option>
            <option value="eurToUsd">Convertir EUR en USD</option>
        </select>

        <label for="amountInput">Montant à convertir</label>
        <input type="number" id="amountInput" placeholder="Montant à convertir" />

        <button class="convert" onclick="convertCurrency()">Convertir</button>

        <div class="result" id="resultDisplay">Résultat</div>
        <div class="result" id="resultInWords">En lettres: </div>

        <p id="limitInfo" class="info">
            Limite de conversion : 1 à 10 000 USD ou EUR
        </p>
    </div>

    <script>
        const exchangeRateUsdToEur = 0.92; // Taux de change USD à EUR
        const exchangeRateEurToUsd = 1 / exchangeRateUsdToEur; // Inverse pour EUR à USD

        function convertCurrency() {
            const amount = parseFloat(document.getElementById('amountInput').value);
            const currencyType = document.getElementById('currencySelect').value;

            if (isNaN(amount) || amount <= 0 || amount > 10000) {
                document.getElementById('resultDisplay').innerText = "Entrez un montant valide entre 1 et 10 000.";
                document.getElementById('resultInWords').innerText = "En lettres: ";
                return;
            }

            let convertedAmount;
            let resultText;
            if (currencyType === 'usdToEur') {
                convertedAmount = amount * exchangeRateUsdToEur;
                resultText = `${convertedAmount.toFixed(2)} EUR`;
            } else {
                convertedAmount = amount * exchangeRateEurToUsd;
                resultText = `${convertedAmount.toFixed(2)} USD`;
            }

            document.getElementById('resultDisplay').innerText = resultText;
            document.getElementById('resultInWords').innerText = "En lettres: " + numberToWords(convertedAmount, currencyType);
        }

        function numberToWords(num, currency) {
            const ones = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
            const tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix"];
            const teens = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
            const thousands = ["", "mille", "deux mille", "trois mille", "quatre mille", "cinq mille", "six mille", "sept mille", "huit mille", "neuf mille"];
            const cents = ["", "cent", "deux cents", "trois cents", "quatre cents", "cinq cents", "six cents", "sept cents", "huit cents", "neuf cents"];

            let wholeNumber = Math.floor(num); // Partie entière
            let decimalPart = Math.round((num - wholeNumber) * 100); // Partie décimale

            let result = '';

            // Traitement des milliers
            if (wholeNumber >= 1000) {
                const thousandsPlace = Math.floor(wholeNumber / 1000);
                wholeNumber %= 1000;
                result += thousands[thousandsPlace] + " ";
            }

            // Traitement des centaines, dizaines et unités
            if (wholeNumber >= 100) {
                const hundreds = Math.floor(wholeNumber / 100);
                wholeNumber %= 100;
                result += ones[hundreds] + " cent ";
            }

            if (wholeNumber < 10) {
                result += ones[wholeNumber];
            } else if (wholeNumber < 20) {
                result += teens[wholeNumber - 10];
            } else if (wholeNumber < 100) {
                const ten = Math.floor(wholeNumber / 10);
                const one = wholeNumber % 10;
                result += tens[ten] + (one ? " " + ones[one] : "");
            }

            if (currency === "usdToEur") {
                result += " euros";
            } else {
                result += " dollars";
            }

            // Traitement des centimes : n'affiche que si non zéro
            if (decimalPart > 0) {
                result += " et ";
                if (decimalPart < 10) {
                    result += ones[decimalPart] + " centime";
                } else if (decimalPart < 20) {
                    result += teens[decimalPart - 10] + " centimes";
                } else {
                    const ten = Math.floor(decimalPart / 10);
                    const one = decimalPart % 10;
                    result += tens[ten] + (one ? " " + ones[one] : "") + " centimes";
                }
            }

            return result || '';  // Retourne la conversion sans centimes s'ils sont à zéro
        }
    </script>
</body>

</html>

