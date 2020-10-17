#!/usr/bin/python3
import urllib.request
import json
from datetime import datetime
from io import StringIO

FIMEA_URL = "https://www.fimea.fi/laakehaut_ja_luettelot/saatavuushairio-uusi"
RELEVANT_FIELDS = ['drugname',
#                   'dateofnotice',
#                   'updated_notice',
                   'packagesize',
                   'drugform',
                   'str',
                   'availability_ending',
#                   'licenseholder',
                   'availability_starting',
#                   'firstnotice',
#                   'vnr',
                   'active_ingredients',
#                   'type',
#                   'storage_obligation',
#                   'atcclass',
#                   'license_info_giver'
                  ]

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

    json_stream = StringIO(html[json_start:json_end])
    medications = json.load(json_stream)
    date = str(datetime.now().date())

    stripped_meds = []
    for medication in medications:
        stripped_med = {}
        for field in RELEVANT_FIELDS:
            stripped_med[field] = medication[field]
        stripped_meds.append(stripped_med)

    json_toplevel = {'read_date': str(datetime.now().date()),
                     'unavailable_meds': stripped_meds}

    with open("medications.json", 'w') as json_file:
        json.dump(json_toplevel, json_file)

main()
