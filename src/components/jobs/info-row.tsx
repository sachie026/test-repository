interface Props {
  info: string;
  classes?: string;
}

function InfoRow({ info, classes = "" }: Props) {
  return <div className={`font-normal text-base  ${classes}`}>{info}</div>;
}

export default InfoRow;
