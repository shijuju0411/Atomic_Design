import "./styles.css";
import { PrimaryButton } from "./conponents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./conponents/atoms/button/SecondaryButton";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
