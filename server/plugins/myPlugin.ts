export default defineNitroPlugin((nitro) => {
  console.log('\n\n\n=====');
  console.log('My Nitro Plugin INIT!');
  nitro.hooks.hook('close', async () => {
    console.log('My Nitro Plugin Close START!');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('My Nitro Plugin Close END!');
  });
});
