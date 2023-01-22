"use strict";

const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBlocks = (number) => {
  const blocks = [];
  const template = ["a", "b", "c", "d", "e", "f"];
  for (let i = 1; i <= number; i++) {
    const color = getRandomHexColor();
    const block = document.createElement(`div`);
    block.style.backgroundColor = `${color}`;
    block.style.outline = "1px solid black";
    block.innerHTML = `${i}`;
    block.style.display = "flex";
    block.style.gridArea = template[i - 1];

    if (i === 1) {
      block.style.backgroundColor = `red`;
      // block.style.gridRow = "1 / 4";
    }

    if (i === 4) {
      block.style.backgroundColor = `purple`;
      // block.style.gridColumn = "2 / 4";
      // block.style.gridRow = "2 / 3";
    }

    block.style.justifyContent = "center";
    block.style.alignItems = "center";
    blocks.push(block);
  }
  return blocks;
};

const commonBlock = document.createElement(`div`);
commonBlock.style.display = "grid";
commonBlock.style.gridTemplateAreas = `"a b c" "a d d" "a d d" "a d d" "a d d" "a d d" "a d d" "a d d" "a d d" "a e f"`;
commonBlock.style.width = "90vw";
commonBlock.style.height = "33vh";
commonBlock.style.margin = "auto";
commonBlock.style.marginTop = "50px";

commonBlock.append(...createBlocks(6));

body.append(commonBlock);
