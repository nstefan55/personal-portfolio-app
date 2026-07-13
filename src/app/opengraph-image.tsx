import { ImageResponse } from "next/og";

export const alt = "Nikola Štefančić — Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static social-share card generated at build time. ImageResponse (satori)
// only supports inline styles — Tailwind classes don't apply here.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1E3A5F",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            color: "#DBEAFE",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: "#22C55E",
            }}
          />
          Open to opportunities
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          Nikola Štefančić
        </div>
        <div style={{ marginTop: 16, fontSize: 40, color: "#DBEAFE" }}>
          Full-Stack Web Developer
        </div>
        <div style={{ marginTop: 48, fontSize: 28, color: "#9CA3AF" }}>
          nikolastefancic.me · Zagreb, Croatia
        </div>
      </div>
    ),
    { ...size }
  );
}
