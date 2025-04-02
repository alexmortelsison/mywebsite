import Card from "../components/Card";

export default function ReferencePage() {
  return (
    <div className="h-[80vh] inset-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-7xl mx-auto px-8 pt-8 space-y-4">
        <Card
          image={"/jc.png"}
          name={"JC Cerilla"}
          tel={"+44 (0) 7809 421 099"}
          email={"carlo.cerilla@gmail.com"}
          message={
            "I've had the pleasure of working with Alex at AppDev Manila. He consistently demonstrate professionalism, strong problem-solving skills, and a collaborative spirit. Alex is reliable, dedicated, and always willing to go the extra mile to ensure the success of the team. I highly recommend him for any role - he will be an asset to any team!"
          }
          position={"CEO"}
          company={"AppDev Manila"}
          country={"New York, USA"}
        />
        <Card
          image={"/win.jpg"}
          name={"Winrich Go"}
          tel={"+63 917 569 2016"}
          email={"winrichgo@gmail.com"}
          message={
            "I've had the chance to work with Alex, and honestly, he's one of the most reliable and proactive people I know. Whether it's tackling tough projects or helping out the team, Alex always brings positive energy and gets things done. He's skilled, easy to work with, and I highly recommend him."
          }
          position={"COO"}
          company={"Daily Dozed"}
          country={"Manila, Philippines"}
        />
      </div>
    </div>
  );
}
