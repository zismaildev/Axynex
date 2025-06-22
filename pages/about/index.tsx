import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, CardFooter, Divider, Spinner } from "@heroui/react";
import { useTeamDev } from "@/lib/hooks/useTeamDev";
import { FacebookIcon, GithubIcon, YoutubeIcon, InstagramIcon } from "@/components/icons"; // Import the GithubIcon component

// Contact type for teamdev
interface Contact {
  github?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  email?: string;
  [key: string]: string | undefined;
}

export default function DocsPage() {
  const { team, loading, error } = useTeamDev();
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-16 from-white to-violet-50 min-h-screen">
        <div className="inline-block max-w-5xl w-full text-center justify-center space-y-8">
          <h1 className={title() + " text-5xl md:text-6xl font-extrabold mb-8 text-violet-700 drop-shadow-lg"}>About</h1>

          <Card className="shadow-xl border-2 border-violet-100 bg-foreground text-background backdrop-blur-md">
            <CardHeader className="flex gap-3 items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-violet-600 flex items-center gap-2">
                <span>เกี่ยวกับ Axynex</span>
              </h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-lg md:text-xl text-background leading-relaxed">Axynex คือทีมพัฒนาเทคโนโลยีรุ่นใหม่ ที่รวมตัวกันจากนักสร้างสรรค์ นักพัฒนา และนักแก้ปัญหาผู้หลงใหลในการใช้เทคโนโลยีเพื่อสร้างการเปลี่ยนแปลง<br />
                เราไม่เพียงแค่สร้างเว็บไซต์หรือระบบหลังบ้าน แต่เรามุ่งเน้น <span className="font-semibold text-violet-500">&quot;ประสบการณ์&quot;</span> ที่มีความหมาย ใช้งานได้จริง และขับเคลื่อนด้วยแนวคิดที่ทันสมัย</p>
            </CardBody>
            <Divider />
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-violet-100 bg-foreground text-background">
              <CardHeader className="flex gap-3 items-center">
                <h1 className="text-3xl font-bold text-violet-600 flex items-center gap-2">🚀 พันธกิจของเรา</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-background text-lg">&quot;ทำให้เทคโนโลยีเข้าถึงง่าย ใช้งานได้จริง และส่งต่อพลังให้กับผู้คน&quot;<br />
                  <span className="text-violet-500">เราเชื่อว่าเทคโนโลยีที่ดีควรเป็นเครื่องมือให้ทุกคนก้าวไกลขึ้น</span> ไม่ว่าจะเป็นสตาร์ทอัพ ธุรกิจขนาดเล็ก หรือองค์กรที่ต้องการเปลี่ยนผ่านสู่ยุคดิจิทัล เราพร้อมช่วยให้แนวคิดของคุณกลายเป็นจริง</p>
              </CardBody>
              <Divider />
            </Card>

            <Card className="shadow-lg border-violet-100 bg-foreground text-background">
              <CardHeader className="flex gap-3 items-center">
                <h1 className="text-3xl font-bold text-violet-600 flex items-center gap-2">💡 สิ่งที่เราเชี่ยวชาญ</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <ul className="text-left text-background text-lg space-y-2">
                  <li>• <span className="font-semibold text-violet-500">พัฒนาเว็บไซต์</span>: ตั้งแต่ MVP (ผลิตภัณฑ์เริ่มต้น) ไปจนถึงระบบระดับองค์กร</li>
                  <li>• <span className="font-semibold text-violet-500">ออกแบบ UI/UX</span>: สวยงาม เรียบง่าย ใช้งานลื่นไหล</li>
                  <li>• <span className="font-semibold text-violet-500">ระบบคลาวด์และ DevOps</span>: วางโครงสร้างพื้นฐานให้รองรับการเติบโต</li>
                  <li>• <span className="font-semibold text-violet-500">โอเพ่นซอร์ส</span>: เราเชื่อในการแบ่งปันและการเติบโตไปพร้อมกัน</li>
                </ul>
              </CardBody>
              <Divider />
            </Card>

            <Card className="shadow-lg border-violet-100 bg-foreground text-background">
              <CardHeader className="flex gap-3 items-center">
                <h1 className="text-3xl font-bold text-violet-600 flex items-center gap-2">🌐 สิ่งที่เราให้ความสำคัญ</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <ul className="text-left text-background text-lg space-y-2">
                  <li>• โครงสร้างที่เข้าใจนักพัฒนา</li>
                  <li>• การสื่อสารแบบเปิดและโปร่งใส</li>
                  <li>• เรียนรู้และพัฒนาตัวเองอยู่เสมอ</li>
                  <li>• สร้างเทคโนโลยีเพื่อชีวิต ไม่ใช่แค่เพื่อเทคโนโลยี</li>
                </ul>
              </CardBody>
              <Divider />
            </Card>

            <Card className="shadow-lg border-violet-100 bg-foreground text-background">
              <CardHeader className="flex gap-3 items-center">
                <h1 className="text-3xl font-bold text-violet-600 flex items-center gap-2">🧠 ทำไมต้องชื่อ “Axynex”?</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-background text-lg">ชื่อ Axynex มาจากการผสมคำที่สื่อถึงความล้ำหน้าและความยืดหยุ่น<br />
                  เรามองตัวเองเป็นจุดเชื่อมระหว่าง <span className="font-semibold text-violet-500">&quot;แก่นแท้ของความคิด&quot; (Axiom)</span> และ <span className="font-semibold text-violet-500">&quot;เครือข่ายแห่งอนาคต&quot; (Nexus)</span></p>
              </CardBody>
              <Divider />
            </Card>
          </div>

          <Card className="shadow-xl border-2 border-violet-100 bg-foreground text-background">
            <CardHeader className="flex gap-3 items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-violet-600 flex items-center gap-2">✨ เราเชื่อว่า...</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <blockquote className="italic text-xl md:text-2xl text-background font-semibold border-l-4 border-violet-400 pl-4 py-2 bg-violet-50/50">
                &ldquo;เราไม่ได้มาแค่เขียนโค้ด แต่เรามาเพื่อสร้างอนาคตร่วมกัน&rdquo;
              </blockquote>
            </CardBody>
            <Divider />
          </Card>

          <Card className="shadow-xl border-2 border-violet-100 bg-foreground ">
            <CardHeader className="flex gap-3 items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-violet-600 flex items-center gap-2">📬 อยากร่วมงานกับเรา?</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-lg md:text-xl text-background">ไม่ว่าคุณจะมีไอเดียโปรเจกต์ในฝัน หรืออยากพัฒนาอะไรบางอย่างให้ไปไกลกว่าเดิม — <span className="font-semibold text-violet-500">Axynex</span> ยินดีเป็นพาร์ตเนอร์ที่คุณไว้ใจได้เสมอ</p>
            </CardBody>
            <Divider />
          </Card>

          <div>
            <h1 className={title() + " text-5xl md:text-6xl font-extrabold mb-8 text-violet-700 drop-shadow-lg"}>ทีมของเรา</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
              {/* Team Member Cards */}
              {loading ? (
                <div className="flex items-center justify-center h-screen">
                  <Spinner size="lg" color="secondary" />
                </div>
              ) : error ? (
                <div className="col-span-full text-center text-lg text-red-500">{error}</div>
              ) : team.length === 0 ? (
                <div className="col-span-full text-center text-lg text-gray-400">No team members found.</div>
              ) : (
                team.map((member) => {
                  // แปลง contact เป็น object (json) ถ้าเป็น string
                  let contact: Contact = {};
                  if (typeof member.contact === 'string') {
                    try {
                      contact = JSON.parse(member.contact);
                    } catch {
                      contact = {};
                    }
                  } else if (typeof member.contact === 'object' && member.contact !== null) {
                    contact = member.contact as Contact;
                  }
                  return (
                    <Card key={member.id} className="shadow-lg border-violet-100 bg-foreground text-background flex flex-col items-center">
                      {member.avatar_url && (
                        <img
                          src={member.avatar_url}
                          alt={member.username}
                          className="w-24 h-24 rounded-full object-cover mt-6 mb-2 border-4 border-violet-200 shadow"
                        />
                      )}
                      <CardHeader className="flex gap-3 items-center justify-center">
                        <h1 className="text-2xl font-bold text-violet-600">{member.username}</h1>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <p className="text-lg font-semibold text-violet-500 mb-1">ตำแหน่ง {member.dev_role}</p>
                        <p className="text-sm text-background mb-2">คติ {member.bio || member.bio_dev || "No bio."}</p>
                      </CardBody>
                      <CardFooter >
                        {/* Contact icons/links */}
                        {contact && (
                          <div className="flex gap-2 items-center justify-center">
                            {Object.entries(contact)
                              .filter(([_, value]) => typeof value === 'string' && value)
                              .map(([key, value]) => {
                                if (!value) return null;
                                switch (key) {
                                  case 'github':
                                    return (
                                      <a key={key} href={value} target="_blank" rel="noopener noreferrer" title="GitHub">
                                        <GithubIcon />
                                      </a>
                                    );
                                  case 'facebook':
                                    return (
                                      <a key={key} href={value} target="_blank" rel="noopener noreferrer" title="Facebook">
                                        <FacebookIcon />
                                      </a>
                                    );
                                  case 'instagram':
                                    return (
                                      <a key={key} href={value} target="_blank" rel="noopener noreferrer" title="Instagram">
                                        <InstagramIcon />
                                      </a>
                                    );
                                  case 'youtube':
                                    return (
                                      <a key={key} href={value} target="_blank" rel="noopener noreferrer" title="YouTube">
                                        <YoutubeIcon />
                                      </a>
                                    );
                                  default:
                                    return null;
                                }
                              })}
                          </div>
                        )}
                      </CardFooter>
                    </Card>
                  );
                })
              )}
            </div>
          </div>

        </div>
      </section>
    </DefaultLayout>
  );
}

