import { useState } from "react";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState("");

  return (
    <div className={styles.searchBar}>
      <TextInput value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => onSubmit(text)}>Search</Button>
    </div>
  );
};
export default SearchBar;
