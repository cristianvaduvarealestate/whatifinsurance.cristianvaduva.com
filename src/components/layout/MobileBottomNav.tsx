'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Layers, HelpCircle, FileCheck2, MessageSquare } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: (pathname: string) => boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Acasă',
    href: '/',
    icon: Shield,
    isActive: (pathname) => pathname === '/',
  },
  {
    label: 'Scenarii',
    href: '/scenarii',
    icon: Layers,
    isActive: (pathname) => pathname.startsWith('/scenarii'),
  },
  {
    label: 'Quiz',
    href: '/quiz',
    icon: HelpCircle,
    isActive: (pathname) => pathname.startsWith('/quiz'),
  },
  {
    label: 'Checklist',
    href: '/verificare-polita',
    icon: FileCheck2,
    isActive: (pathname) => pathname.startsWith('/verificare-polita'),
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: MessageSquare,
    isActive: (pathname) => pathname.startsWith('/contact'),
  },
];

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigație mobilă"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 print:hidden"
    >
      <div className="max-w-md mx-auto px-2 pt-1 pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))] flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const active = item.isActive(pathname);
          const IconComponent = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 min-h-[48px] ${
                active ? 'text-[#06141B]' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative">
                <IconComponent
                  className={`w-5 h-5 transition-transform duration-200 ${
                    active ? 'text-[#E10600] scale-105 stroke-[2.4]' : 'text-slate-400 stroke-[1.8]'
                  }`}
                />
                {active && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E10600]"
                    aria-hidden="true"
                  />
                )}
              </div>
              <span
                className={`text-[10px] tracking-tight mt-1 transition-all ${
                  active ? 'font-black text-[#06141B]' : 'font-medium text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
