#!/usr/bin/python3
import urllib.request
from datetime import datetime

FIMEA_URL = "https://www.fimea.fi/laakehaut_ja_luettelot/saatavuushairio-uusi"

def main():
    with urllib.request.urlopen(FIMEA_URL) as response:
        html = str(response.read())

    json_start = html.find("JSON.parse(")
    if json_start == -1:
        print("Couldn't find start of JSON in response.")
        return 1;
    json_start += 13 # Length of JSON.parse(\'

    json_end = html.find("]\\'", json_start);
    if json_end == -1:
        print("Couldn't find end of JSON in response.")
        return 1;
    json_end += 1;

    json = html[json_start:json_end]
    date = str(datetime.now().date())

    with open("medications.json", 'w') as json_file:
        json_file.write("{")
        json_file.write("\"read_date\":\"{}\",".format(date))
        json_file.write("\"unavailable_meds\":")
        json_file.write(json)
        json_file.write("}")

main()
