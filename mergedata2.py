#import pandas as pd

# Load datasets
#vacant_df = pd.read_csv("Data/cleanedvacant2.csv")  # Adjust file names if necessary
#crime_df = pd.read_csv("Data/Cleaned_crime_report.csv")

# Inspect structure
#print(vacant_df.head())
#print(crime_df.head())

#vacant_df["date"] = pd.to_datetime(vacant_df["DateNotice"])
#crime_df["date"] = pd.to_datetime(crime_df["ArrestDateTime"])

# Merge on neighborhood and date (adjust as needed)
#merged_df = pd.merge(crime_df, vacant_df, on=["neighborhood", "date"], how="inner")

# Check the merged data
#print(merged_df.head())