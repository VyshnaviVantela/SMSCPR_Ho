import SubBar from "./subbar";

export default function MainFrame() {
  return (
    <div
      style={{
        marginLeft: "205px", // space for sidebar
        marginTop: "68.8px",   // space for navbar
      }}
    >
      <SubBar />
    </div>
  );
}
