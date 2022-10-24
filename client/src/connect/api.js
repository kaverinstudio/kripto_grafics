import { $host } from "./index";
export const fetchCoins = async (id, dateStart, dateEnd) => {
  const { data } = await $host.get(`/api/history/?id=${id}&dateStart=${dateStart}&dateEnd=${dateEnd}`);
  return data;
};

export const fetchNames = async () => {
  const { data } = await $host.get('/api/coin/');
  return data;
};

export const fetchTweets = async (id, dateStart, dateEnd) => {

    try {
      const response = await $host.get(`/api/tweet/?id=${id}&dateStart=${dateStart}&dateEnd=${dateEnd}`);
      if (response.status === 200){
        return response.data
      }
    }catch (e) {
      console.log(e.error)
    }



}
