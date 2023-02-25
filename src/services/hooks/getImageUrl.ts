import { useQuery, UseQueryOptions } from "react-query";
import api from "../api";

const getImage = async (params) => {
  if (!params) return "";
  const { data } = await api.get(`/static/${params}`, { responseType: "blob" });
  const imageObjectURL = URL.createObjectURL(data);
  return imageObjectURL;
};

export function fetchImage(
  params,
  actions: any = [],
  options?: UseQueryOptions<any>
) {
  return useQuery([...actions], () => getImage(params), {
    enabled: !!params,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    ...options,
  });
}
