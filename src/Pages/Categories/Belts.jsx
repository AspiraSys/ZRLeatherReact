import Filter from "../../Pages/Categories/CategoryFilter";
import Bar from "../../Components/Additional/Bar";

<div>
  <Bar greyText='Belts' bgColor="#F5F5F5" breadCrumbs={false} />
</div>

export default function Belts() {
    return <Filter category="Belts" />;
}
