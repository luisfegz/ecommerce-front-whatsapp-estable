import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default function HomePage({product}) {
  return (
    <div>
      <Header />
      <Featured product={product}/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '651116bbf46af542a25739c8';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: {product: JSON.parse(JSON.stringify(product))},
  };
}