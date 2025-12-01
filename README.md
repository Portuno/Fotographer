# El Fotógrafo - Investigation Board

Una experiencia web inmersiva para la película "El Fotógrafo", diseñada como una pizarra de investigación policial.

## Sinopsis
Tras años de silencio, la figura mítica de un artista urbano furtivo vuelve a aparecer en las calles de Valencia. Una periodista y un psicólogo investigan si se trata de su retorno o de un imitador que conoce demasiado bien su obra.

## Créditos

*   **Dirección:** Camila Verdun Lomba
*   **Producción:** Lautaro J. Sarni
*   **Productora:** [Versa Producciones](https://www.versaproducciones.com)

## Redes Sociales

*   **Película:** [@el_fotographer](https://www.instagram.com/el_fotographer/)
*   **Camila Verdun Lomba:** [Instagram](https://www.instagram.com/)
*   **Lautaro J. Sarni:** [Instagram](https://www.instagram.com/)

## Desarrollo y Despliegue (Deployment)

Este proyecto está construido con **React** y **TailwindCSS**.

### ¿Por qué veo una pantalla blanca?
Si subiste los archivos `.tsx` directamente a un hosting, el navegador no sabrá cómo leerlos.
Para producción, debes **compilar** el proyecto.

Recomendación: Usa **Vite**.
1.  `npm create vite@latest el-fotografo -- --template react-ts`
2.  Copia los archivos de este proyecto a la carpeta `src`.
3.  Ejecuta `npm run build`.
4.  Sube la carpeta `dist` resultante a tu servidor.