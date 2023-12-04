function generateMealPlan() {
    const name = document.getElementById("name").value;
    const goal = document.getElementById("goal").value;

    const monday = document.getElementById("monday")
    const tuesday = document.getElementById("tuesday")
    const wednesday = document.getElementById("wednesday")
    const thursday = document.getElementById("thursday")
    const friday = document.getElementById("friday")

    const mealPlanWindow = window.open('', '_blank');

    mealPlanWindow.document.write(`
        <html>
        <head>
            <title>Meal Plan</title>
            <style>
                body {
                    font-family: monospace;
                }
            </style>
        </head>
        <body>
            <h1>Weekly Meal Plan for ${name}</h1>
            <p><strong>Goal for the Week:</strong> ${goal}</p>

            <h2>Meal Plan</h2>
            <ul>
                <li><strong>Monday:</strong> ${monday}</li>
                <li><strong>Tuesday:</strong> ${tuesday}</li>
                <li><strong>Wednesday:</strong> ${wednesday}</li>
                <li><strong>Thursday:</strong> ${thursday}</li>
                <li><strong>Friday:</strong> ${friday}</li>
            </ul>
        </body>
        </html>
    `);
}

function clearMealPlan() {
    document.getElementById("mealPlan").reset();
}

function printMealPlan() {
    window.print();
}
