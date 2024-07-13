// interface ResponseType {
//   ok: boolean;
//   message: string;
// }

// export async function GET(_req: any, { params }: any) {
//   const slug = params.slug;

//   let res: ResponseType = { ok: false, message: "Invalid Request" };

//   if (slug === "products") {
//     res = {
//       ok: true,
//       message: "Success",
//       products: [
//         {
//           id: 1,
//           name: "Product 1",
//         },
//       ],
//     };
//   }
//   return Response.json(res);
// }
