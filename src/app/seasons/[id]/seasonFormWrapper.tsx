import { useGetSeasonById } from "@/datafetching/season/useGetSeasonById";
import { SeasonForm } from "@/app/seasons/[id]/seasonForm";

interface Props {
  id: string;
}

export const SeasonFormWrapper = ({ id }: Props) => {
  const { data, isLoading } = useGetSeasonById(id);
  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  return <SeasonForm id={id} />;
};
