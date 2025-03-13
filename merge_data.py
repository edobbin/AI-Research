import pandas as pd


crime_df = pd.read_csv("Data/Cleaned_crime_report.csv")
vacant_df = pd.read_csv("Data/cleanedvacant2.csv")

crime_filtered = crime_df[crime_df["IncidentOffence"] == "87NARCOTICS"]
crime_counts = crime_filtered.groupby("Neighborhood").size().reset_index(name="Crime_Count")
vacant_counts = vacant_df.groupby("Neighborhood").size().reset_index(name="Vacant_Property_Count")

#print(crime_counts)
merged_df = pd.merge(crime_counts, vacant_counts, on="Neighborhood", how="inner")

merged_df.to_csv("Data/merged_crime_vacant.csv")