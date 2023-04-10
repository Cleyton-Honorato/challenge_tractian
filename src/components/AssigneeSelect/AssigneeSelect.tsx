import { Select } from "antd";
import { useAppSelector } from "../../redux/hooks";

interface AssigneeSelectProps {
  onChange: (value: any) => void;
  assigneeIds?: number[];
}

export default function AssigneeSelect(props: AssigneeSelectProps) {
  const { assigneeIds, onChange } = props;

  const users = useAppSelector((state) => state.usersList.users);

  const assignees = assigneeIds?.map((id) => {
    const filter = users?.find((user) => user.id === id);

    return filter;
  });

  const assigneesMapper = assignees?.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  return (
    <Select
      showSearch
      style={{ width: 160 }}
      placeholder="Selecione"
      optionFilterProp="children"
      onChange={(_, option) => onChange(option)}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={assigneesMapper}
    />
  );
}
