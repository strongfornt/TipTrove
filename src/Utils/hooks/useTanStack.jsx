import { useQuery } from "@tanstack/react-query";


export default function useTanStack(url,key) {
  const {data,isLoading,refetch} = useQuery({
    queryKey:[key],
    queryFn:async()=> {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
 })

 return {data,isLoading,refetch}
}
