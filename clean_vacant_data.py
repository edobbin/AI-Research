import pandas as pd

file_path = 'Data/vacantBuildingNoticesDataCleaned.csv'
output_path = 'Data/cleanedvacant2.csv'

def extract_year(date_notice):
    try:
        return pd.to_datetime(date_notice).year
    except Exception as e:
        #print(f"Error processing date {date_notice}")
        return None

def process_file(input_file, output_file):
    # Read the CSV file
    try:
        df = pd.read_csv(input_file)
    except FileNotFoundError:
        print(f"Input file not found: {input_file}")
        return
    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # Ensure 'DateNotice' column exists
    if 'DateNotice' not in df.columns:
        print("Column 'DateNotice' not found in the dataset.")
        return

    # Modify the 'DateNotice' column to include only the year
    df['DateNotice'] = df['DateNotice'].apply(extract_year)

    # Save the modified DataFrame to a new file
    try:
        df.to_csv(output_file, index=False)
        print(f"Modified file saved successfully at: {output_file}")
    except Exception as e:
        print(f"Error saving file: {e}")

if __name__ == "__main__":
    process_file(file_path, output_path)