import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type NavLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void; // allow onClick
};

export default function NavLink({ to, children, className, onClick }: NavLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
      <Link
        to={to}
        onClick={onClick} // now works
        className={`transition hover:text-green-600 ${className ?? ""}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
