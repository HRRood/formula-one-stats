import {useGetAllSeasonConstructors} from "@/api/season/constructor/useGetAllSeasonsConstructors";
import {DialogPropsMap} from "@/hooks/layout/useDialog";
import {Form} from "@/wrappers/form";
import {Box} from "@mui/material";
import {Driver} from "@prisma/client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {InputField} from "@/components/global/form/fields/inputField";
import {SelectField} from "@/components/global/form/fields/selectField";
import {useGetAllDriversInfo} from "@/api/drivers-info/useGetAllDriversInfo";
import {Button} from "@/components/global/button";

const validation = z.object({
  driverInfoId: z.string().min(1, {message: "Driver is required"}),
  constructorTeamId: z.string().min(1, {message: "Constructor is required"}),
  number: z.coerce.number().min(1, {message: "Number range is 1 - 99"}).max(99, {message: "Number range is 1 - 99"}),
  seasonId: z.string().min(1, {message: "Season is required"}),
  id: z.string().min(1, {message: "Id is required"})
})
export const AddSeasonDriver = ({seasonId, onCreate}: DialogPropsMap["addSeasonDriverDialog"]) => {
  const {data: constructors} = useGetAllSeasonConstructors(seasonId);
  const {data: drivers} = useGetAllDriversInfo();

  const form = useForm<Driver>({
    resolver: zodResolver(validation),
    defaultValues: {
      driverInfoId: "",
      constructorTeamId: "",
      number: 0,
      seasonId,
      id: "new-season-driver"
    },
  });

  return (
      <Box sx={{padding: '20px', width: {sx: "90vw", sm: "60vw", md: "40vw", lg: "20vw"}}}>
        <Form {...form} onSubmit={onCreate}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: "10px"}}>
            <SelectField includeSearchHeader label={"Driver"} name={"driverInfoId"}
                         options={drivers?.items?.map(x => ({
                           label: x.name,
                           value: x.id
                         })) || []}/>

            <InputField name={"number"} type={"number"} label={"Race number"}/>
            <SelectField label={"Constructor"} name={"constructorTeamId"} options={constructors?.map(x => ({
              label: x.name,
              value: x.id
            })) || []}/>
            <Button type={"submit"} color={"primary"}>Save</Button>
          </Box>
        </Form>
      </Box>
  );
};
