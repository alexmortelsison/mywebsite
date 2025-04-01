import { Separator } from "@/components/ui/separator";
import { Github, InstagramIcon } from "lucide-react";
import Image from "next/image";
import { DiJavascript1 } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
import { SiFirebase, SiPrisma, SiSupabase } from "react-icons/si";
import Footer from "./Footer";
export default function AboutPage() {
  return (
    <div className="bg-white z-50 tracking-tighter inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] h-[100vh] md:px-8 md:pt-16 lg:pt-32">
      <div className="h-[100vh]">
        <div className="flex flex-col items-center justify-center pt-24 lg:pt-44">
          <p className="text-sm md:text-2xl">
            Discover More About My Journey, Passions, and Values
          </p>
          <h1 className="md:text-6xl text-4xl">About Me.</h1>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-4 px-2 lg:px-0 pt-8 lg:pt-24">
          <div className="hidden md:inline-block col-span-1 border-r pr-8">
            <Image
              src="/alex.jpg"
              alt="profile photo"
              width={240}
              height={240}
              loading="eager"
              className="object-cover border-4 border-white rounded-xl"
            />
            <p className="pt-4">
              Name: <span className="text-muted-foreground">Alex Sison</span>
            </p>
            <p>
              Location: <span className="text-muted-foreground">Japan</span>
            </p>
            <p>
              Email:
              <a
                href="https://mail.google.com/mail/?view=cm&to=alexismortelsison@gmail.com&su=Hello&body=This%20is%20a%20test%20email"
                target="_blank"
                className="text-muted-foreground"
              >
                {" "}
                <span className="hover:underline underline-offset-4">
                  Email
                </span>
              </a>
            </p>
            <Separator />
            <div className="flex pt-2 space-x-2">
              <a href={"https://x.com/urmrdev"} target="_blank">
                <FaXTwitter className="h-6 w-6 transform hover:scale-125 duration-200" />
              </a>
              <a href={"https://github.com/alexmortelsison/"} target="_blank">
                <Github className="h-6 w-6 transform hover:scale-125 duration-200" />
              </a>
              <a
                href={"https://www.instagram.com/janumortelsison/"}
                target="_blank"
              >
                <InstagramIcon className="h-6 w-6 transform hover:scale-125 duration-200" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3 md:pl-8 col-span-4 text-center md:text-start px-4 md:px-0 tracking-tighter">
            <p>
              I am Alex Sison, a dedicated{" "}
              <span className="font-bold text-[#29b2ff]">web developer</span>{" "}
              with a strong passion for creating efficient, high-performing, and
              user-friendly web applications.
            </p>
            <br />
            <p>
              Before transitioning into web development, I worked as a 3D
              artist, honing my skills in{" "}
              <span className="font-bold text-[#29b2ff]">
                visual design, attention to detail, and creative problem-solving
              </span>
              . This background gives me a unique perspective in crafting
              visually appealing and intuitive digital experiences.
            </p>
            <br />
            <p>
              With a keen eye for detail and a commitment to continuous
              improvement, I strive to develop digital solutions that enhance{" "}
              <span className="font-bold text-[#29b2ff]">user experience</span>{" "}
              and meet modern web standards.
            </p>
            <br />
            My expertise lies in developing{" "}
            <span className="font-bold text-[#29b2ff]">
              scalable and optimized web applications
            </span>
            , leveraging modern technologies to build seamless and interactive
            user interfaces. I specialize in{" "}
            <span className="font-bold text-[#29b2ff]">Next.js</span>, ensuring
            applications are not only fast and efficient but also maintainable
            and future-proof.
            <div className="mt-2 mb-4 flex flex-col justify-center items-center md:items-start px-16 md:px-0">
              <div>
                <h1 className="text-xl mt-4 mb-2">Other Stack</h1>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 md:grid-cols-3">
                  <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                    <DiJavascript1 size={44} />
                    <p>Javascript</p>
                  </div>
                  <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                    <Image
                      src={"/clerk.png"}
                      alt="nextauth"
                      width={60}
                      height={60}
                      className="px-2"
                    />
                    <p>Clerk</p>
                  </div>
                  <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                    <SiFirebase size={40} />
                    <p>Firebase</p>
                  </div>
                  <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                    <SiSupabase size={40} />
                    <p>Supabase</p>
                  </div>
                  <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                    <SiPrisma size={40} />
                    <p>Prisma</p>
                  </div>
                  <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                    <Image
                      src={"/sanity.png"}
                      alt="nextauth"
                      width={120}
                      height={120}
                      className="object-cover pt-4 pb-2 filter grayscale"
                    />
                    <p>Sanity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="justify-center bottom-0 hidden lg:flex pt-16">
        <Footer />
      </footer>
    </div>
  );
}
