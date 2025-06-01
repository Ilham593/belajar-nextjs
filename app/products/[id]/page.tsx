export default async function ProductPage({ params, }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  console.log(id);
  console.log(params); 
  return (
    <div>
      <h1>Product detail</h1>
    </div>
  );
}
