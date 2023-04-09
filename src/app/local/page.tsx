import OutSideLinks from "@/components/OutSideLinks";
import Counter from "@/app/local/Counter";

const LocalStateUser = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Local State User</h1>
      <Counter />
      <OutSideLinks />
    </main>
  );
};

export default LocalStateUser;
