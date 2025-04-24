import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/text-input";


export default function Room() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <div>Room</div>
      <div>
        <TextInput placeholder="Type your message" />
        <Button children="Send Message" />
      </div>
    </div>
  );
}
