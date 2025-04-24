"use client";
import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        onChange={(e) => setRoomId(e.target.value)}
        appName="web"
        placeholder="Room Name"
      />
      <Button
        onClick={() => router.push(`/room/${roomId}`)}
        appName="web"
        children="Join Room"
      />
    </div>
  );
}
