import pandas as pd
import os

cls = lambda: os.system('cls')

# Para eliminar las tablas que tienen elementos NaN, puedes usar dropna
#table_MN = pd.read_html('https://henryu20201c579.github.io/Proyecto_Ingles/Basic2.html')

#MENU
print("What level do you want to study?:", 1, 2)
#level = int(input())
level = 2

print("What unit do you want to study?:", 1, 2, 3)
#unit = int(input())*2 - 2
unit = 1*2-2

url = "https://henryu20201c579.github.io/Proyecto_Ingles/Basic2.html"

try: 
    url = url[:55] + str(level) + url[55 + 1:]
    data = pd.read_html(url)
except:
    print("this page was not found")

print(data[unit].columns.values)



for i in range(data[unit].values.__len__()):    
    print(data[unit].values[i][0])
    rpta = input()
    cls()
    if rpta == data[unit].values[i][1]: print("😊")
    else: print("😒", data[unit].values[i][1])
    
    if rpta == "exit": break
