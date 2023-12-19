import requests

base_url = "https://icpna.instructure.com/courses/"

# Supongamos que los cursos tienen números del 100000 al 999999
for course_id in range(100000, 1000000):
    url = f"{base_url}{course_id}"
    
    # Realizar una solicitud HTTP y verificar si la respuesta es exitosa (código 200)
    response = requests.get(url)
    
    if response.status_code == 200:
        print(f"URL encontrada: {url}")
