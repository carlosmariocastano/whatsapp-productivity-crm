export interface Template {
  id: number;
  command: string;
  title: string;
  message: string;
}

export const templates: Template[] = [
  {
    id: 1,
    command: "/hola",
    title: "Saludo",
    message:
      "Hola 👋, gracias por comunicarte con nosotros. ¿En qué podemos ayudarte?"
  },
  {
    id: 2,
    command: "/cotizacion",
    title: "Cotización",
    message:
      "Con gusto te ayudamos con tu cotización. Por favor indícanos los productos que deseas cotizar."
  },
  {
    id: 3,
    command: "/pago",
    title: "Pago",
    message:
      "Te compartimos los datos para realizar el pago."
  },
  {
    id: 4,
    command: "/seguimiento",
    title: "Seguimiento",
    message:
      "Estamos realizando seguimiento a tu solicitud. Te mantendremos informado."
  }
];