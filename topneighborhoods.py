import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the data
crime_df = pd.read_csv("Data/Cleaned_crime_report.csv")
vacant_df = pd.read_csv("Data/cleanedvacant2.csv")

# Count vacant properties per neighborhood
vacant_counts = vacant_df.groupby("Neighborhood").size().reset_index(name="Vacant_Property_Count")

# Sort by Vacant_Property_Count and take the top 10
top_10_vacant = vacant_counts.sort_values(by="Vacant_Property_Count", ascending=False).head(10)

# Create a bar plot for Vacant Property Count
plt.figure(figsize=(10, 6))
sns.barplot(x="Vacant_Property_Count", y="Neighborhood", data=top_10_vacant, color='salmon')

# Labels and title
plt.title("Top 10 Neighborhoods by Vacant Property Count")
plt.xlabel("Vacant Property Count")
plt.ylabel("Neighborhood")

# Display the plot
plt.tight_layout()
plt.show()
