type EmptyProps = {
  message: string;
};

export default function Empty({ message }: EmptyProps) {
  return (
    <div className="flex justify-center">
      <p className="text-slate-400 text-3xl max-w-screen-sm">{message}</p>
    </div>
  );
}
