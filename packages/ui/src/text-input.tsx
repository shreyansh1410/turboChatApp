
interface InputProps {
  className?: string;
  appName?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ className, placeholder, onChange }: InputProps) => {
  return (
    <input
      onChange={onChange}
      className={className}
      style={{
        padding: 10,
        margin: 10,
        borderColor: "black",
        borderRadius: 8,
        borderWidth: 1,
      }}
      placeholder={placeholder}
    />
  );
};
