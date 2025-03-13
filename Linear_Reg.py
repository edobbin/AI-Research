# Data Handling
import pandas as pd
import numpy as np

# Machine Learning
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Visualization (Optional but Useful)
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("Data/merged_crime_vacant.csv")

X = df[["Vacant_Property_Count"]]

y = df["Crime_Count"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions on test data
y_pred = model.predict(X_test)

# Calculate model performance metrics
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse:.2f}")
print(f"R-Squared Score: {r2:.2f}") 

# Get the slope (β1) and intercept (β0)
slope = model.coef_[0]
intercept = model.intercept_

print(f"Linear Equation: Crime_Count = {intercept:.2f} + {slope:.2f} * Vacant_Property_Count")

plt.figure(figsize=(8,6))
sns.scatterplot(x=X_test["Vacant_Property_Count"], y=y_test, label="Actual Crime Count")
sns.lineplot(x=X_test["Vacant_Property_Count"], y=y_pred, color="red", label="Regression Line")
plt.xlabel("Vacant Properties")
plt.ylabel("Crime Count")
plt.title("Linear Regression: Vacant Properties vs. Crime")
plt.legend()
plt.show()
