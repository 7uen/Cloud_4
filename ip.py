
import json
import os
import sys

import requests


url = "https://management.azure.com/subscriptions/57258ec5-9436-4d6f-9f10-cab56ed01a8f/resourceGroups/CC_group_3/providers/Microsoft.Network/publicIPAddresses/test_3?api-version=2022-05-01"

a = 1
file = open(os.path.join(sys.path[0], "ip.json"), "r")
h = {"Authorization": "Bearer ",
     "Content-type": "application/json"}

json_input = file.read()

request_json = json.loads(json_input)

response = requests.put(url, json_input, headers=h)

print(response.status_code)
print(response.content)
assert (response.status_code//100 == 2)
print(response.headers.get('Content-Length'))

response_json = json.loads(response.text)

print(response_json["id"])
