const DocsIdPage = ({ params }: { params: Params }) => (
  <div className="absolute top-20 left-20">
    Dockerinos
    {params.id}
  </div>
);

export default DocsIdPage;

interface Params {
  id: string[];
}
