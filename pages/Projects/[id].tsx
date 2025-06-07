import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import ProjectDetails from "../../Components/ProjectDetails";
import { projectsData } from "../../Components/JSON/projectsdata";

interface Project {
  id: number;
  name: string;
  title: string;
  description: string[];
  features: string[];
  tech: string[];
  banner: string;
  logo: string;
  snapshots: string[];
  github: string;
  live: string;
  others: any[];
}

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ProjectDetails projectDetails={project} altt={project.name} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { id: project.name.toLowerCase().replace(/\s+/g, "-") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectId = params?.id as string;
  const project = projectsData.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectId
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage; 