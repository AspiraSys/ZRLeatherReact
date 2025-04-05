import Filter from "../../Pages/Categories/CategoryFilter";
import Bar from "../../Components/Additional/Bar";


export default function Footwear() {
    return (
        <>
            <Bar greyText='Footwear' bgColor="#F5F5F5" breadCrumbs={false} />

            <Filter category="Footwear" />;
        </>
    )
}
