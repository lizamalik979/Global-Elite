"use client";

// Last-resort error boundary: catches errors in the root layout itself, so it
// must render its own <html> and <body>.

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(170deg,#15224E 0%,#352A66 60%,#5E3F7E 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
          textAlign: "center",
          padding: 28,
        }}
      >
        <div>
          <h1 style={{ color: "#F2C66A", fontSize: 64, margin: 0, fontWeight: 800 }}>500</h1>
          <p style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginTop: 10 }}>
            Something went wrong
          </p>
          <p style={{ color: "#d9cff0", fontSize: 14, marginTop: 8 }}>
            Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 22,
              background: "linear-gradient(120deg,#E89B3A,#D26FA0,#8E5FB6)",
              color: "#fff",
              border: "none",
              fontSize: 15,
              fontWeight: 700,
              padding: "13px 26px",
              borderRadius: 11,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
