"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const DINOSAURS = [
  "tyrannosaurus",
  "triceratops",
  "velociraptor",
  "stegosaurus",
  "brachiosaurus",
  "ankylosaurus",
  "spinosaurus",
  "allosaurus",
  "diplodocus",
  "iguanodon",
];
const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  const word = DINOSAURS[Math.floor(Math.random() * DINOSAURS.length)];
  return `anonymous-${word}-${nanoid(6)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUsername(stored);
        return;
      }

      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    };

    main();
  }, []);

  return { username };
};
