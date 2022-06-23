import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { SearchResultData } from "../typings";
import { NextPage } from "next";
import InfoCard from "../components/InfoCard";
type Props = { searchResult: SearchResultData[] };

const Search: NextPage<Props> = ({ searchResult }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedEndDate =
    endDate && format(new Date(endDate.toString()), "dd MMM yy");
  const formatedStartDate =
    startDate && format(new Date(startDate.toString()), "dd MMM yy");
  const range = `${formatedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guest`}
      />
      <main className="flex ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuests} guest{" "}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays In {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Canselation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {searchResult.map((data: SearchResultData) => (
            <InfoCard key={data.title} data={data} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/1W6B").then(
    (res) => res.json()
  );

  return {
    props: searchResults,
  };
}
