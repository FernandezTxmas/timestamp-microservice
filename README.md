Este programa es un servicio web que proporciona información de marca de tiempo (timestamp) en formato Unix y UTC (Coordinated Universal Time). Se basa en el modelo de microservicios y sigue los principios de FreeCodeCamp.org.

Características Principales:

    API de Marca de Tiempo:
        La ruta /api/:date? maneja solicitudes para obtener información de marca de tiempo.
        El parámetro opcional :date acepta una cadena de fecha en formato ISO o estándar.

    Formato de Respuesta:
        La respuesta incluye dos propiedades:
            unix: Marca de tiempo Unix en milisegundos.
            utc: Marca de tiempo UTC en formato de cadena.

    Manejo de Fechas:
        El programa utiliza el objeto Date de JavaScript para analizar las fechas proporcionadas.
        Si la fecha es inválida, se devuelve un objeto de error con el mensaje "Invalid Date".

    Interfaz de Usuario (UI):
        La interfaz web proporciona ejemplos de uso y muestra la salida esperada.
        Los estilos básicos se aplican para mejorar la presentación.

Estructura del Código:

    index.js:
        Configura y ejecuta el servidor Express.
        Maneja las solicitudes para la ruta principal y la API de marca de tiempo.

    index.html:
        Proporciona la estructura HTML básica con ejemplos de uso y salida esperada.

    style.css:
        Define estilos simples para mejorar la apariencia de la interfaz web.

Uso:

    Visita la ruta principal (/) para ver la interfaz de usuario con ejemplos.
    Accede a la API de marca de tiempo mediante la ruta /api/:date?.
        Proporciona una fecha opcional para obtener información de marca de tiempo específica.
