import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$green500",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
  span: {
    fontWeight: "bold",
    fontSize: 50,
  },
  "&:hover": {
    filter: "brightness(0.8)",
  },
  height: 100,
  width: 200,
  color: "#fff",
  fontSize: 24,
});

export default function Home() {
  return (
    <Button>
      <span> {"->"} </span> Enviar
    </Button>
  );
}
