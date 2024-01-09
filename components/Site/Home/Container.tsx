import clsx from "clsx";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        "max-w-screen-x1 mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
