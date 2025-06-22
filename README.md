# เกี่ยวกับโปรเจคนี้

โปรเจคนี้เป็นเทมเพลตสำหรับการสร้างแอปพลิเคชันด้วย Next.js 14 (pages directory) และ HeroUI (v2) ที่ออกแบบมาเพื่อให้เริ่มต้นพัฒนาเว็บแอปได้อย่างรวดเร็วและมีประสิทธิภาพ โดยมีการผสมผสานเทคโนโลยีสมัยใหม่ เช่น Next.js, Tailwind CSS, TypeScript และ HeroUI ซึ่งช่วยให้การออกแบบ UI สวยงามและปรับแต่งได้ง่าย

**จุดเด่นของโปรเจคนี้**
- โครงสร้างโค้ดที่เป็นระเบียบ เหมาะสำหรับการต่อยอดและพัฒนาในองค์กรหรือโปรเจคส่วนตัว
- รองรับระบบ Theme และ UI ที่ทันสมัยด้วย HeroUI และ Tailwind CSS
- ใช้งาน TypeScript เพื่อความปลอดภัยและลดข้อผิดพลาดในการเขียนโค้ด
- มีตัวอย่างการใช้งานฟีเจอร์พื้นฐาน เช่น Navbar, Footer, Swiper, ระบบ Auth, และการจัดการสิทธิ์ผู้ใช้ (Role-based Access Control)
- พร้อมใช้งานกับระบบจัดการแพ็คเกจยอดนิยม เช่น npm, yarn, pnpm, bun

**เหมาะสำหรับ**
- นักพัฒนาเว็บที่ต้องการโครงสร้างเริ่มต้นที่ดีและปรับแต่งได้ง่าย
- ทีมงานที่ต้องการมาตรฐานการเขียนโค้ดและ UI ที่สวยงาม
- ผู้ที่ต้องการเรียนรู้หรือทดลองใช้ Next.js และ HeroUI ในโปรเจคจริง

---

# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (pages directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/next-pages-template)

> Note: Since Next.js 14, the pages router is recommend migrating to the [new App Router](https://nextjs.org/docs/app) to leverage React's latest features
>
> Read more: [Pages Router](https://nextjs.org/docs/pages)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/heroui-inc/next-pages-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-pages-template/blob/main/LICENSE).
