import type { User } from "@/types/user";

interface UserModalProps {
  user: User | null;
  onClose: () => void;
}

export function UserModal({ user, onClose }: UserModalProps) {
  if (!user) return null;

  const role = user.role || "user";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <img
            src={user.image}
            alt={user.firstName}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <p><span className="font-medium">Phone:</span> {user.phone}</p>
          <p><span className="font-medium">Age:</span> {user.age}</p>
          <p><span className="font-medium">Company:</span> {user.company?.name}</p>
          <p><span className="font-medium">Role:</span> {role}</p>
          <p><span className="font-medium">Address:</span> {user.address?.city}, {user.address?.country}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-gray-100 py-2 text-sm hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}