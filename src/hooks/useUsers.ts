import { getUsers } from "@/services/user.service";
import { useEffect, useState } from "react";
import type { User } from "@/types/user";

export const useUsers = (search: string, page: number, sort: string) => {
  const [data, setData] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const limit = 6;
    const skip = (page - 1) * limit;

    getUsers({
      limit,
      skip,
      search,
      sortBy: sort === "name" ? "firstName" : sort,
      order: "asc",
    })
      .then((res) => {
        setData(res.users);
        setTotal(res.total);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [search, page, sort]);

  return { data, total, loading, error };
};