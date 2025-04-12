import Filter from "../../Pages/Categories/CategoryFilter";
import Bar from "../../Components/Additional/Bar";

export default function Wallets() {
  return (
    <>
      <Bar greyText='Wallets' greyText1='Purse' bgColor="#F5F5F5" breadCrumbs={false} />
      <Filter category="Wallets" />;
    </>
  )



}
