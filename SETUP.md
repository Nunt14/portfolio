# วิธีติดตั้งไฟล์เข้าโปรเจกต์ (Tailwind CSS v4)

โปรเจกต์ของคุณใช้ **Next.js 16 + Tailwind CSS v4** ซึ่งไม่มีไฟล์ `tailwind.config.ts` แล้ว
(ใช้ `@import "tailwindcss"` + `@theme` ใน CSS แทน) — ไฟล์ทั้งหมดด้านล่างนี้ปรับให้เข้ากับ v4 แล้ว

## 1. ติดตั้ง dependencies เพิ่ม
```bash
npm install framer-motion lucide-react
```
ตรวจสอบว่ามี `@tailwindcss/postcss` และ `tailwindcss` (v4) อยู่ใน devDependencies แล้ว
(ดูตัวอย่างใน `package.reference.json` ที่แนบมา — ถ้า `postcss.config.mjs` ของคุณยังไม่มี
`@tailwindcss/postcss` ให้เพิ่มตามไฟล์ที่แนบมา)

## 2. คัดลอกไฟล์
แตก zip นี้แล้วคัดลอกทับ/วางไฟล์ตามนี้ในโปรเจกต์ของคุณ:

```
app/
├── globals.css          → ทับไฟล์เดิม (ใช้ @import "tailwindcss" + @theme แบบ v4)
├── layout.tsx           → ทับไฟล์เดิม
├── page.tsx             → ทับไฟล์เดิม
└── components/          → วางทั้งโฟลเดอร์ใหม่
    ├── Activity.tsx
    ├── Certificates.tsx
    ├── CloudField.tsx
    ├── Contact.tsx
    ├── Experience.tsx
    ├── Hero.tsx
    ├── Navbar.tsx
    ├── PixelIcons.tsx
    ├── Projects.tsx
    └── Skills.tsx

public/images/           → วางทั้งโฟลเดอร์ (รูป placeholder ทั้งหมด)

postcss.config.mjs       → ตรวจสอบ/ทับไฟล์เดิม (ต้องมี @tailwindcss/postcss)
```

⚠️ **ห้ามใช้** `tailwind.config.ts` แบบเดิม — ลบไฟล์นั้นออกถ้ามี เพราะ v4 ไม่อ่านไฟล์นี้
สีและฟอนต์ทั้งหมดถูกย้ายไปกำหนดใน `app/globals.css` ผ่าน `@theme` block แล้ว

## 3. รันโปรเจกต์
```bash
npm run dev
```
เปิด http://localhost:3000

---

## 4. ปรับแต่งต่อ (สำคัญ!)

### แทนรูปภาพจริง
ทุกไฟล์ใน `public/images/` เป็นรูป placeholder สีพื้น ให้แทนที่ด้วยรูปจริงของคุณ **โดยใช้ชื่อไฟล์เดิม** (หรือแก้ path ใน component ที่เกี่ยวข้อง):

| ไฟล์ | ใช้ที่ |
|---|---|
| `profile-main.jpg` | Hero — รูปโปรไฟล์หลัก |
| `profile-fullbody.jpg` | Skills — รูปเต็มตัว |
| `profile-contact.jpg` | Contact — รูปโปรไฟล์ |
| `project-harnty-1/2/3.jpg` | Projects — มือถือ Harnty Trip |
| `project-discovery-1/2/3.jpg` | Projects — มือถือ Local Discovery |
| `project-salesquest-1/2.jpg` | Projects — เว็บ Sales Quest |
| `project-docs-1/2.jpg` | Projects — เว็บ Document Management |
| `logo-landyhome.png`, `logo-ideatrade.png` | Experience — โลโก้บริษัท |
| `cert-1/2/3.jpg`, `cert-ideatrade.jpg` | Certificates |
| `activity-hackathon/pitch/team.jpg` | Activity |

**คำแนะนำสำหรับ mockup มือถือ/คอม:** ใช้เว็บ mockuphone.com หรือ shots.so ใส่ screenshot แอป/เว็บของคุณเข้าไป แล้วครอปเป็นแค่ "หน้าจอ" (ไม่เอาเฟรม) เพราะ component มีเฟรม CSS ให้แล้ว

**คำแนะนำสำหรับรูปคน:** ใช้ remove.bg เอาพื้นหลังออกถ้าต้องการให้กลมกลืนกับธีมท้องฟ้า

### ปรับตำแหน่ง floating icons
ใน component ต่างๆ จะมี `<FloatingIcon className="...">` ลองปรับ Tailwind position classes (`top-`, `left-`, `right-`, `bottom-`) ให้ตรงกับดีไซน์มากขึ้น

### แก้ลิงก์ติดต่อ
ใน `Contact.tsx` แก้ `href="#"` ของ Link2 (LinkedIn) และ Resume ให้เป็นลิงก์จริงของคุณ

### แก้ไขข้อความ
เนื้อหาทั้งหมด (คำอธิบายโปรเจกต์, ประสบการณ์, ฯลฯ) อยู่ใน component แต่ละไฟล์ตรงๆ — แก้ได้เลย
