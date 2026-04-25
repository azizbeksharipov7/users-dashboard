import { useState } from "react";
import { useUsers } from "@/hooks/useUsers";
import { SearchInput } from "@/components/ui/SearchInput";
import { SortDropdown, type SortKey } from "@/components/ui/SortDropdown";
import { UserList } from "@/components/dashboard/UserList";
import { Pagination } from "@/components/ui/Pagination";
import type { User } from "@/types/user";
import { UserModal } from "@/components/dashboard/UserViewModal";
import { useDebounce } from "@/hooks/useDebunce";

const PAGE_SIZE = 6;

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [sort, setSort] = useState<SortKey>("name");
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 400);

  const { data, total, loading, error } = useUsers(
    debouncedSearch,
    page,
    sort
  );

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and browse your team members.
          </p>
        </header>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <SearchInput
            value={search}
            onChange={(v) => {
              setSearch(v);
              setPage(1);
            }}
          />
          <SortDropdown
            value={sort}
            onChange={(v) => {
              setSort(v);
              setPage(1);
            }}
          />
        </div>

        <UserList
          users={data}
          loading={loading}
          error={error}
          onViewDetails={(user) => setSelectedUser(user)}
        />
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />

        {!loading && !error && totalPages > 1 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
}