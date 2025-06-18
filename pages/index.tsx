import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import IndexLayout from "@/layouts";

export default function IndexPage() {
  return (
    <IndexLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-14 min-h-[80vh]">
        <div className="w-full max-w-7xl mx-auto px-2">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-violet-700 via-fuchsia-600 to-pink-500 shadow-2xl rounded-3xl px-6 pt-16 pb-10 sm:px-16 md:pt-24 flex flex-col lg:flex-row items-center gap-10">
            <svg
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              viewBox="0 0 2024 2024"
            >
              <circle
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
                r={512}
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="flex-1 flex flex-col justify-center items-start text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
                Axynex
              </h2>
              <p className="mt-2 text-lg md:text-xl leading-8 text-white/90 font-medium drop-shadow">
                Axynex คือระบบจัดการงานและชีวิตส่วนตัวแบบครบวงจร ที่ออกแบบมาสำหรับบุคคลที่ต้องบริหารหลายบทบาทในแต่ละวัน เช่น นักพัฒนา, ฟรีแลนซ์, ผู้ประกอบการ หรือผู้ที่ต้องการระบบจัดการตัวเองที่มีประสิทธิภาพ
                ด้วยฟีเจอร์ที่ครอบคลุมตั้งแต่ระบบขายสินค้า, การแสดงผลงาน, การบริหารรายรับ-รายจ่าย, ระบบงานที่ต้องทำ (To-do), ไปจนถึงการวิเคราะห์พอร์ตหุ้น Axynex ช่วยให้คุณสามารถติดตาม ควบคุม และปรับปรุงการดำเนินชีวิตและการทำงานได้จากศูนย์กลางเดียว
                รองรับการใช้งานทั้งส่วนบุคคลและธุรกิจ พร้อมโครงสร้างที่ยืดหยุ่น ปลอดภัย และสามารถขยายในอนาคตได้
              </p>
            </div>
            <div className="relative mt-8 h-64 w-full max-w-md flex-shrink-0 lg:mt-0">
              <Image
                fill
                priority
                alt="App screenshot"
                className="rounded-xl shadow-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 text-transparent bg-clip-text animate-fade-in text-center">
              <span className="drop-shadow">Empower&nbsp;</span>
              <span className="drop-shadow">Your Digital Life</span>
            </h1>
            <div className="text-lg md:text-2xl text-gray-600 font-medium mb-6 animate-fade-in delay-100 text-center max-w-xl">
              Axynex is an integrated platform for managing your personal workflow, business goals, and digital assets — all from a single, powerful interface.
            </div>
            <div className="flex gap-6 mb-10 justify-center animate-fade-in delay-200">
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                  class: "px-8 py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300",
                })}
                href={siteConfig.links.docs}
              >
                Documentation
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  class:
                    "px-8 py-3 text-lg font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-100/60 transition-colors duration-300",
                })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={22} />
                GitHub
              </Link>
            </div>
            <div className="mt-6 flex justify-center animate-fade-in delay-300 w-full">
              <Snippet
                hideCopyButton
                hideSymbol
                className="bg-white/80 rounded-xl shadow border border-violet-200 px-4 py-3 mx-auto"
                variant="bordered"
              >
                <span>
                  Get started by editing{" "}
                  <Code color="primary">pages/index.tsx</Code>
                </span>
              </Snippet>
            </div>
          </div>
        </div>
      </section>
    </IndexLayout>
  );
}
