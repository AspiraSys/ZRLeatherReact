import Filter from "../../Pages/Categories/CategoryFilter";
import Bar from "../../Components/Additional/Bar";

<div>
  <Bar greyText='Wallets' bgColor="#F5F5F5" breadCrumbs={true} />
</div>

export default function Wallets() {
    return <Filter category="Wallets" />;
}
