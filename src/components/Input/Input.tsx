export type InputType = {
  value: string;
};

export const Input = (props: InputType) => {
  return <input value={props.value} />;
};
