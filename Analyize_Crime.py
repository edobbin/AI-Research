import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import folium
import plotly
import geopandas as gpd
from shapely.geometry import Point
from scipy.stats import pearsonr

Crime_File_Path = 'Data/Part1Crime.csv'
arrest_path = 'Data/BPD_Arrests.csv'

crime_df = pd.read_csv(arrest_path)
filter = crime_df[crime_df["IncidentOffence"]== "Unknown Offense"]
unique_charge = filter["ChargeDescription"].unique()
#print(unique_charge)
narocotics_keywords = ["CDS", "CDS VIOLATION", "CDS POSS","CDS:POSS W/INTENT DIST: NARC", "CDS VIOLATION", "CDS","POSS","COCAINE","PWID","PWI"]
not_list = ["POSS OF FIREARM", "POSSESSION OF HANDGUN" "PWID FIREARMS","POSS OF B.B. GUN","POSSESSING STOLEN PROPERTY", "POSS.AMMO","POSS OF STUN GUN","CONTRABAND-POSSESS WEAPON","POSS DEADLY WEAPON","ILLEGAL POSS AMMO","POSSESSION OF FIREARM","CON-FIREARM POSS W/FEL CONV","ILLEGAL POSSESSION AMMUNITION","POSS HANDGUN","POSS STOLEN GOODS","POSS/TELECOMM DEVICE","POSS OF CONTRBAND"]
# pd.set_option("display.max_rows", None)  # Show all rows
# pd.set_option("display.max_colwidth", None)  # Show full text in columns

# Print all unique charge descriptions without truncation
for desc in unique_charge:
    if any(keyword in str(desc) for keyword in narocotics_keywords) and not any(keyword in str(desc) for keyword in not_list):
        print(desc)