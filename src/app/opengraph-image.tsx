import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} | Software Engineer · AI/ML`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(52,211,153,0.25), rgba(52,211,153,0.05) 55%, transparent 75%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#34d399",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#34d399",
              display: "flex",
            }}
          />
          {profile.eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: -3,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 36,
              color: "#a1a1aa",
            }}
          >
            Software Engineer · AI/ML · MLOps
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#71717a",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>kashmith.com</div>
          <div style={{ display: "flex", color: "#34d399" }}>
            github.com/kashmithnisakya
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
