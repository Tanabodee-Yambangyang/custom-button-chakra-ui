import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen p-20 justify-items-center">
      <div className="flex flex-col items-center justify-between">
        <CustomButton />
        <CustomButton style="outline"/>
        <CustomButton color="red"/>
        <CustomButton style="ghost"/>
      </div>
      <div className="flex flex-col items-center justify-between">
        <CustomButton color="gray"/>
        <CustomButton color="gray" style="outline"/>
        <CustomButton color="gray"/>
        <CustomButton color="gray" style="ghost"/>
      </div>
    </main>
  );
}
