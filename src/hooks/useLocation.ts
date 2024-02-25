import api from "@/utils/api";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [provinceDump, setProvinceDump] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [province, setProvince] = useState("0");
  const [cityDump, setCityDump] = useState<any>([]);
  const [city, setCity] = useState("0");
  const [districtDump, setDistrictDump] = useState<any>([]);
  const [district, setDistrict] = useState("0");
  const [villageDump, setVillageDump] = useState<any>([]);
  const [village, setVillage] = useState("0");

  const getLocation = async ({ code, type }: { type: string; code?: any }) => {
    const query = code
      ? `/region?code=${code.value}&type=${type}`
      : `/region?type=${type}`;

    try {
      setLoading(true);
      const { data } = await api.get(query);

      data.data = data.data.map((item: any) => {
        return {
          value: item.code,
          label: item.name,
        };
      });

      switch (type) {
        case "province":
          setProvinceDump(data.data);
          break;
        case "city":
          setCityDump(data.data);
          break;
        case "district":
          setDistrictDump(data.data);
          break;
        case "village":
          setVillageDump(data.data);
          break;
        default:
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation({ type: "province" });
  }, []);

  useEffect(() => {
    getLocation({ code: province, type: "city" });
  }, [province]);

  useEffect(() => {
    getLocation({ code: city, type: "district" });
  }, [city]);

  useEffect(() => {
    getLocation({ code: district, type: "village" });
  }, [district]);

  return {
    provinceDump,
    cityDump,
    districtDump,
    villageDump,
    province,
    city,
    district,
    village,
    setProvince,
    setCity,
    setDistrict,
    setVillage,
    loading,
  };
};

export default useLocation;
