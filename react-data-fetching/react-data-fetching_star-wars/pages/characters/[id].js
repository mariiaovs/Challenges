import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (url) => {
    const response = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }

    return response.json();
  };

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  console.log(data);

  if (error) return <h1>Loading failed...</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        hairColor={data.hair_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
