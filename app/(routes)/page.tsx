import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("8f470a62-2bf4-4a18-999a-81b4a44a019f");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="pace-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
