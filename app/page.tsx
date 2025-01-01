import Image from "next/image";
import { createClient } from '@/utils/superbase/server';

export default async function Home() {

    const supabase = await createClient();
    const { data: countries } = await supabase.from("countries").select();

    return(
      <ul>
        {countries?.map(country => <li key={country.id}>{country.name}</li>)}
      </ul>
    )

}
