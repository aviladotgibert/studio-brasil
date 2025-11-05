export async function onRequestPost({ request }) {
try {
const data = await request.json();
const { name, email, project, message } = data;
// Aquí podrías integrar correo o base de datos
return new Response(JSON.stringify({ message: `Gracias ${name}, hemos recibido tu mensaje sobre ${project}.` }), {
headers: { 'Content-Type': 'application/json' },
});
} catch (err) {
return new Response(JSON.stringify({ message: 'Error procesando el formulario.' }), {
status: 400,
headers: { 'Content-Type': 'application/json' },
});
}
}
