import { useState } from "react";
import { Menu } from "lucide-react";

// Note: You'll need to install @radix-ui/react-dialog
import * as Dialog from "@radix-ui/react-dialog";
import { useStateContext } from "@/contexts/ContextProvider";

const menuItems = [
  { id: "home", name: "Home", href: "/" },
  { id: "services", name: "Services", href: "/services" },
  {
    id: "customer-service",
    name: "Customer Service",
    href: "/customer-service",
  },
];

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { setUserId, setToken } = useStateContext();
  const handleLogout = () => {
    setUserId(null);
    setToken(null);
    // Optional: redirect to login page if needed
    window.location.href = "/login";
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 items-baseline">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">WebShop</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors hover:text-gray-700 ${
                  active === item.id ? "text-gray-900" : "text-gray-500"
                }`}
                onClick={(e) => {
                  setActive(item.id);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="/" className="-m-1.5 p-1.5">
                    <span className="text-xl font-bold">WebShop</span>
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {menuItems.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                            active === item.id
                              ? "text-indigo-600 bg-gray-50"
                              : "text-gray-900 hover:bg-gray-50"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActive(item.id);
                            setIsOpen(false);
                          }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <button
          onClick={handleLogout}
          className="ml-4 px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
