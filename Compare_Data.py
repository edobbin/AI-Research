import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import folium
import plotly
import geopandas as gpd
from shapely.geometry import Point
from scipy.stats import pearsonr

crime_file_path = 'Data/Cleaned_crime_report.csv'
#homeless_shelter_path = 'Data/homelessShelter_cleaned_data.csv' Ignore For now
vacant_housing_path = 'Data/cleanedvacant2.csv'

crime_df = pd.read_csv(crime_file_path)
vacant_df = pd.read_csv(vacant_housing_path)
#shelter_df = pd.read_csv(homeless_shelter_path) Ignore For now

#Nieghborhoods with the most vacant houses
vacant_value_count = vacant_df['Neighborhood'].value_counts()
vacant_sort = vacant_df.loc[vacant_df['Neighborhood'].map(vacant_value_count).sort_values(ascending=False).index]

print(vacant_value_count.head(10))
vacant_top10 = vacant_value_count.head(10)

#Areas with most crime
crime_value_count = crime_df['Neighborhood'].value_counts()
crime_sort = crime_df.loc[crime_df['Neighborhood'].map(crime_value_count).sort_values(ascending=False).index]


print(crime_value_count.head(10))


#plots vacant data of each city

#names of top 
fig1 = plt.figure(figsize=(20,20))
fig1 = plt.bar(vacant_top10.index, vacant_top10.values, color='royalblue')
fig1 = plt.title("Top 10 Neighborhood with Vacant Notices")
fig1 = plt.xlabel("Neighborhoods", fontsize=12, fontweight='bold')
fig1 = plt.ylabel("Vacant Notices", fontsize=12, fontweight='bold')
fig1 = plt.tick_params(axis='x', rotation=20, labelsize=8)
fig1 = plt.show()