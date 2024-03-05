import { useState, useRef, useEffect } from "react";
import { useDelay } from "@/utils/hooks/useDelay";
import { useFocus } from "@/utils/hooks/useFocus";
import { useWindowSize } from "@/utils/hooks/useWindowSize";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const inputEl = useRef(null);
  const isDone = useDelay(3000);
  const [inputRef, setInputFocus] = useFocus();
  const windowSize = useWindowSize();

  useEffect(() => {
    // inputEl.current.focus();
    setInputFocus();
  }, []);

  return (
    <>
      <div className={styles.searchBar}>
        <TextInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
        <Button
          onClick={() => {
            if (text.length > 0) {
              onSubmit(text);
            }
          }}
        >
          Search
        </Button>
      </div>
      {isDone ? "3 sn geçti" : "3 sn bekleniyor"}
      <p>
        genişlik:{windowSize.width},yükseklik:{windowSize.height}
      </p>
      <p>{windowSize.width > 700 ? "desktop" : "mobile"}</p>
    </>
  );
};
export default SearchBar;
