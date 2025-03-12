import pandas as pd
import os as sys

file_path = 'Data/BPD_Arrests.csv'
output_path = 'Data/cleanedArrest2.csv'

narocotics_keywords = ["CDS", "CDS VIOLATION", "CDS POSS","CDS:POSS W/INTENT DIST: NARC", "CDS VIOLATION", "CDS","POSS","COCAINE","PWID","PWI"]
not_list = ["POSS OF FIREARM", "POSSESSION OF HANDGUN", "PWID FIREARMS","POSS OF B.B. GUN","POSSESSING STOLEN PROPERTY", "POSS.AMMO","POSS OF STUN GUN","CONTRABAND-POSSESS WEAPON","POSS DEADLY WEAPON","ILLEGAL POSS AMMO","POSSESSION OF FIREARM","CON-FIREARM POSS W/FEL CONV","ILLEGAL POSSESSION AMMUNITION","POSS HANDGUN","POSS STOLEN GOODS","POSS/TELECOMM DEVICE","POSS OF CONTRBAND"]


def extract_year(row):
    try:
        return pd.to_datetime(row).year
    except Exception as e:
        print(f'Error could not change year: {e}')
        return None

def clean_crime(row):
    try:
        if row["IncidentOffence"] == "Unknown Offense" and any(keyword in str(row["ChargeDescription"]) for keyword in narocotics_keywords) and not any(keyword in str(row["ChargeDescription"]) for keyword in not_list):
            return "87NARCOTICS"
        return row['IncidentOffence']      
    except Exception as e:
        print(f"Error processing incident fix: {e}") 
        return None                                         
    
def process_file(input_file, output_file):
    try:
        if sys.path.exists(output_path):
            sys.remove(output_path)
    except Exception as e:
        print(f"File name: {output_file} with path: {output_path} does not exist ")

    #Ensure file is available and readable
    try:
        df = pd.read_csv(input_file)
    except FileNotFoundError:
        print(f"Error file not found: {input_file}")
        return
    except Exception as e:
        print(f"ERROR reading file: {e}")

    if 'IncidentOffence' not in df.columns or 'ChargeDescription' not in df.columns:
        if 'ChargeDescription' not in df.columns:
            print("The column ChargeDescription is not in the file")
        if 'IncidentOffence' not in df.columns:
            print("'IncidentOffence' is not in the file")
        return
    
     # Modify the 'DateNotice' column to include only the year
    df['IncidentOffence'] = df.apply(clean_crime, axis=1)
    df['ArrestDateTime'] = df['ArrestDateTime'].apply(extract_year)

    
    # Save the modified DataFrame to a new file
    try:
        df.to_csv(output_file, index=False)
        print(f"Modified file saved successfully at: {output_file}")
    except Exception as e:
        print(f"Error saving file: {e}")

def clean_excess():
    df = pd.read_csv("Data/cleanedArrest2.csv")

    cleaned_df = df[df['Neighborhood'].notna() & (df['Neighborhood'] != "")]
    cleaned_df.to_csv("Data/Test.csv")

if __name__ == "__main__":
    #process_file(file_path, output_path)
    clean_excess()