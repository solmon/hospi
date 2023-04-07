import { teamNavigations } from '@/lib/teams';
import type { Team } from '@prisma/client';
import classNames from 'classnames';
import Link from 'next/link';

const TeamTab = ({ activeTab, team }: { activeTab: string; team: Team }) => {
  const navigations = teamNavigations(team.slug, activeTab);

  return (
    <div className="mb-5">
      <nav
        className="-mb-px flex space-x-5 border-b border-gray-300"
        aria-label="Tabs"
      >
        {navigations.map((menu) => {
          return (
            <Link href={menu.href} key={menu.href}>
                {menu.name}              
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default TeamTab;
