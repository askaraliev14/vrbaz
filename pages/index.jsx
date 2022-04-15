import Section1 from "../src/components/vrbaz-shop/Section1";
import Section10 from "../src/components/vrbaz-shop/Section10";
import Section11 from "../src/components/vrbaz-shop/Section11";
import Section12 from "../src/components/vrbaz-shop/Section12";
import Section13 from "../src/components/vrbaz-shop/Section13";
import Section2 from "../src/components/vrbaz-shop/Section2";
import Section3 from "../src/components/vrbaz-shop/Section3";
import Section4 from "../src/components/vrbaz-shop/Section4";
import Section5 from "../src/components/vrbaz-shop/Section5";
// import Section6 from "../src/components/vrbaz-shop/Section6";
// import Section7 from "../src/components/vrbaz-shop/Section7";
import Section8 from "../src/components/vrbaz-shop/Section8";
import Section9 from "../src/components/vrbaz-shop/Section9";
import AppLayout from "../src/components/layout/AppLayout";
import { getBigDiscountList, getFlashDeals, getMainCarousel, getTopCategories } from "../src/utils/api/vrbaz-shop/carousels";
import { getCarBrands, getCarList, getCategories, getMobileBrands, getMobileList, getMobileShops, getMoreItems, getNewArrivalList, getOpticsBrands, getOpticsList, getOpticsShops, getServiceList, getTopRatedBrand, getTopRatedProduct } from "../src/utils/api/vrbaz-shop/sections";

const IndexPage = props => {
  const {
    mainCarouselData,
    flashDealsData,
    topCategories,
    topRatedBrands,
    topRatedProducts,
    newArrivalsList,
    bigDiscountList,
    carBrands,
    carList,
    mobileBrands,
    mobileShops,
    mobileList,
    opticsBrands,
    opticsShops,
    opticsList,
    bottomCategories,
    moreItems,
    serviceList
  } = props;
  return <AppLayout>
      <Section1 carouselData={mainCarouselData} />
      <Section2 flashDeals={flashDealsData} />
      <Section3 categoryList={topCategories} />
      <Section4 topRatedList={topRatedProducts} topRatedBrands={topRatedBrands} />
      <Section5 newArrivalsList={newArrivalsList} />
      <Section13 bigDiscountList={bigDiscountList} />
      {/*<Section6 carBrands={carBrands} carList={carList} />*/}
      {/*<Section7 mobileBrands={mobileBrands} mobileShops={mobileShops} mobileList={mobileList} />*/}
      <Section8 />
      {/*<Section9 opticsList={opticsList} opticsShops={opticsShops} opticsBrands={opticsBrands} />*/}
      {/*<Section10 categories={bottomCategories} />*/}
      <Section11 moreItems={moreItems} />
      <Section12 serviceList={serviceList} />
    </AppLayout>;
};

export async function getStaticProps() {
  const mainCarouselData = await getMainCarousel();
  const flashDealsData = await getFlashDeals();
  const topCategories = await getTopCategories();
  const topRatedBrands = await getTopRatedBrand();
  const topRatedProducts = await getTopRatedProduct();
  const newArrivalsList = await getNewArrivalList();
  const bigDiscountList = await getBigDiscountList();
  const carBrands = await getCarBrands();
  const carList = await getCarList();
  const mobileBrands = await getMobileBrands();
  const mobileShops = await getMobileShops();
  const mobileList = await getMobileList();
  const opticsBrands = await getOpticsBrands();
  const opticsShops = await getOpticsShops();
  const opticsList = await getOpticsList();
  const bottomCategories = await getCategories();
  const moreItems = await getMoreItems();
  const serviceList = await getServiceList();
  return {
    props: {
      mainCarouselData,
      flashDealsData,
      topCategories,
      topRatedBrands,
      topRatedProducts,
      newArrivalsList,
      bigDiscountList,
      carBrands,
      carList,
      mobileBrands,
      mobileShops,
      mobileList,
      opticsBrands,
      opticsShops,
      opticsList,
      bottomCategories,
      moreItems,
      serviceList
    }
  };
}
export default IndexPage;

