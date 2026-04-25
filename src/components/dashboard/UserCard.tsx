import type { User, UserRole } from "@/types/user";

const roleStyles: Record<UserRole, string> = {
  admin: "bg-red-50 text-red-600 ring-1 ring-red-200",
  moderator: "bg-blue-50 text-blue-600 ring-1 ring-blue-200",
  user: "bg-gray-100 text-gray-600 ring-1 ring-gray-200",
};

interface UserCardProps {
  user: User;
  onViewDetails?: (user: User) => void;
}

export function UserCard({ user, onViewDetails }: UserCardProps) {
  const role: UserRole = user.role || "user";

  return (
    <div className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="h-20 w-20 rounded-full object-cover ring-4 ring-gray-100 shadow-sm"
        loading="lazy"
      />

      <h3 className="mt-4 text-base font-semibold text-gray-900">
        {user.firstName} {user.lastName}
      </h3>

      <p className="mt-1 text-sm text-gray-500">{user.email}</p>

      <p className="mt-0.5 text-xs text-gray-400">
        {user.company?.name}
      </p>

      <span
        className={`mt-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${roleStyles[role]}`}
      >
        {role}
      </span>

      <button
        onClick={() => onViewDetails?.(user)}
        className="mt-5 w-full rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-600 active:scale-[0.98]"
      >
        View Details
      </button>
    </div>
  );
}