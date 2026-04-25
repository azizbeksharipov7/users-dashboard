import type { Params, UsersResponse } from "@/types/user";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getUsers = async (params: Params): Promise<UsersResponse> => {
  const query = new URLSearchParams();

  if (params.limit) query.append("limit", String(params.limit));
  if (params.skip) query.append("skip", String(params.skip));
  if (params.sortBy) query.append("sortBy", params.sortBy);
  if (params.order) query.append("order", params.order);

  let url = `${BASE_URL}/users?${query.toString()}`;

  if (params.search) {
    url = `${BASE_URL}/users/search?q=${params.search}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};