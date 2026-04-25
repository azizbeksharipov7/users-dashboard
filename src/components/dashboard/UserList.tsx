import type { User } from "@/types/user";
import { UserCard } from "./UserCard";
import { SkeletonCard } from "../ui/SkeletonCard";
import { Inbox, AlertCircle } from "lucide-react";

interface UserListProps {
  users: User[];
  loading?: boolean;
  error?: boolean;
  onViewDetails?: (user: User) => void;
}

export function UserList({ users, loading, error, onViewDetails }: UserListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-16 text-center shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
          <AlertCircle className="h-6 w-6 text-red-500" />
        </div>
        <h3 className="mt-4 text-base font-semibold text-gray-900">
          Something went wrong
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Please try refreshing the page.
        </p>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white py-16 text-center shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <Inbox className="h-6 w-6 text-gray-400" />
        </div>
        <h3 className="mt-4 text-base font-semibold text-gray-900">
          No users found
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}