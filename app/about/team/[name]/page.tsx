import React from 'react'
import { Metadata } from 'next';
type Props = {
  params: {
    name: string;
  };
};
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const memberName = decodeURIComponent(params.name);

  return {
    title: `${memberName} | Team Member | Ansh Kumar Dewangan Portfolio`,
    description: `Explore ${memberName}'s role, skills, projects, and contribution in Ansh Kumar Dewangan's portfolio team section.`,
    keywords: [
      memberName,
      "Team Member",
      "Portfolio",
      "Web Developer",
      "Software Engineer",
      "full-stack developer",
      "AKD Portfolio",
      "Ansh Kumar Dewangan",
      "CG Web Developer",
      "Durg",
      "software developer ansh",
      "software developer",
    ],
    alternates: {
      canonical: `https://ansh-portfolio-75.vercel.app/team/${params.name}`,
    },
    openGraph: {
      title: `${memberName} | Team Member | Ansh Dewangan Portfolio`,
      description: `Explore ${memberName}'s role, skills, projects, and contribution in the portfolio.`,
      url: `https://ansh-portfolio-75.vercel.app/team/${params.name}`,
      siteName: "Ansh Kumar Dewangan Portfolio",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${memberName} | Team Member`,
      description: `Explore ${memberName}'s profile and portfolio contribution.`,
    },
  };
}
const TeamDetailsPage = ({ params }: Props) => {
  const memberName = decodeURIComponent(params.name);

  return (
    <div className="text-black px-6 py-10">
      <h1 className="text-5xl font-bold mb-4">{memberName}</h1>
      <p className="text-lg text-gray-700">
        Team member details page for {memberName}
      </p>
    </div>
  );
};
// const TeamDetailsPage = async ({ params }: { params: { name: string } }) => {
//   const name = (await params).name;
//   return (
//     <div className='text-black text-5-xl'>
//       Team member details Page {name}
//     </div>
//   )
// }

export default TeamDetailsPage
