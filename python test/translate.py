from googletrans import Translator

def traducir_palabra():
    # Crear una instancia del traductor
    translator = Translator()

    # Pedir al usuario que ingrese una palabra en inglés
    palabra_ingles = input("Ingresa una palabra en inglés: ")

    # Detectar el idioma de origen
    idioma_origen = translator.detect(palabra_ingles).lang

    # Traducir la palabra al español
    palabra_espanol = translator.translate(palabra_ingles, src=idioma_origen, dest='es').text

    print(f"Traducción al español: {palabra_espanol}")

if __name__ == "__main__":
    traducir_palabra()
