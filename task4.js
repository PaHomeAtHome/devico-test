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
    block.innerHTML = `${0}`;
    block.style.display = "flex";
    block.style.gridArea = template[i - 1];

    if (i === 1) {
      block.style.backgroundColor = `rgba(254,0,0,255)`;
    }

    if (i === 2) {
      block.style.backgroundColor = `rgba(92,0,254,255)`;
    }

    if (i === 3) {
      block.style.backgroundColor = `rgba(0,142,0,255)`;
    }

    if (i === 4) {
      block.style.backgroundColor = `rgba(143,0,130,255)`;
    }

    if (i === 5) {
      block.style.backgroundColor = `rgba(210,134,50,255)`;
    }

    if (i === 6) {
      block.style.backgroundColor = `rgba(232,241,168,255)`;
    }

    block.style.justifyContent = "center";
    block.style.alignItems = "center";
    blocks.push(block);
  }
  return blocks;
};

const commonBlock = document.createElement(`div`);
commonBlock.style.display = "grid";
commonBlock.style.fontSize = "22px";
commonBlock.style.fontFamily = "Arial";
commonBlock.style.fontWeight = "700";
commonBlock.style.gridTemplateAreas = `"a b c" "a d d" "a d d" "a d d" "a d d" "a d d" "a d d" "a d d" "a d d" "a e f"`;
commonBlock.style.width = "90vw";
commonBlock.style.height = "33vh";
commonBlock.style.margin = "auto";
commonBlock.style.marginTop = "50px";

commonBlock.append(...createBlocks(6));

body.append(commonBlock);
