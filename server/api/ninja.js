export default defineEventHandler(async () => {
   // //handle query params
   // const { name } = getQuery(event);

   // //handle post data
   // const { age } = await readBody(event);

   //api call with private key
   const { data } = await $fetch(
      "https://api.currencyapi.com/v3/latest?apikey=LBlZmXqxw8t8JT5ODRGQuhl2PM0Rbl1Dx25nIjdx"
   );

   return data;
});
